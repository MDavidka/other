"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/products";
import { toast } from "sonner";

export interface CartItem {
  id: string; // unique combination of product id + color + storage
  product: Product;
  selectedColor: { name: string; hex: string };
  selectedStorage: string;
  quantity: number;
  priceAtAddition: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color?: { name: string; hex: string }, storage?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  promoCode: string;
  promoDiscount: number; // percentage or fixed
  tradeInPromoCode: string;
  tradeInDiscount: number; // fixed dollar amount from trade-in estimator
  applyPromoCode: (code: string) => boolean;
  applyTradeInPromo: (code: string, value: number) => void;
  removePromoCode: () => void;
  getCartSubtotal: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string>("");
  const [promoDiscount, setPromoDiscount] = useState<number>(0); // e.g. 0.1 for 10%
  const [tradeInPromoCode, setTradeInPromoCode] = useState<string>("");
  const [tradeInDiscount, setTradeInDiscount] = useState<number>(0); // e.g. $250 off

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("aerophone_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
    const savedPromo = localStorage.getItem("aerophone_promo");
    if (savedPromo) setPromoCode(savedPromo);
    const savedDiscount = localStorage.getItem("aerophone_discount");
    if (savedDiscount) setPromoDiscount(parseFloat(savedDiscount));
    const savedTradeCode = localStorage.getItem("aerophone_trade_code");
    if (savedTradeCode) setTradeInPromoCode(savedTradeCode);
    const savedTradeValue = localStorage.getItem("aerophone_trade_value");
    if (savedTradeValue) setTradeInDiscount(parseFloat(savedTradeValue));
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem("aerophone_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    product: Product,
    color?: { name: string; hex: string },
    storage?: string
  ) => {
    const finalColor = color || product.colors[0];
    const finalStorage = storage || product.storage[0];
    const cartItemId = `${product.id}-${finalColor.name.replace(/\s+/g, "-")}-${finalStorage}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        toast.success(`Increased quantity of ${product.name} in cart.`);
        return updated;
      } else {
        toast.success(`Added ${product.name} (${finalStorage}, ${finalColor.name}) to cart.`);
        return [
          ...prevCart,
          {
            id: cartItemId,
            product,
            selectedColor: finalColor,
            selectedStorage: finalStorage,
            quantity: 1,
            priceAtAddition: product.price,
          },
        ];
      }
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === cartItemId);
      if (item) {
        toast.info(`Removed ${item.product.name} from cart.`);
      }
      return prevCart.filter((i) => i.id !== cartItemId);
    });
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode("");
    setPromoDiscount(0);
    setTradeInPromoCode("");
    setTradeInDiscount(0);
    localStorage.removeItem("aerophone_cart");
    localStorage.removeItem("aerophone_promo");
    localStorage.removeItem("aerophone_discount");
    localStorage.removeItem("aerophone_trade_code");
    localStorage.removeItem("aerophone_trade_value");
  };

  const applyPromoCode = (code: string) => {
    const uppercaseCode = code.toUpperCase().trim();
    if (uppercaseCode === "LAUNCH10" || uppercaseCode === "AERO10") {
      setPromoCode(uppercaseCode);
      setPromoDiscount(0.1); // 10% off
      localStorage.setItem("aerophone_promo", uppercaseCode);
      localStorage.setItem("aerophone_discount", "0.1");
      toast.success("Promo code 'LAUNCH10' applied! 10% discount on order.");
      return true;
    } else if (uppercaseCode === "SUPERSAVE20") {
      setPromoCode(uppercaseCode);
      setPromoDiscount(0.2); // 20% off
      localStorage.setItem("aerophone_promo", uppercaseCode);
      localStorage.setItem("aerophone_discount", "0.2");
      toast.success("Promo code 'SUPERSAVE20' applied! 20% discount on order.");
      return true;
    } else if (uppercaseCode.startsWith("TRADE-") && uppercaseCode.length > 8) {
      // It is a dynamic trade-in promo code generated in trade-in page
      // We will parse or handle it
      toast.success("Trade-in promo code detected! Please apply in trade-in section.");
      return false;
    } else {
      toast.error("Invalid promo code.");
      return false;
    }
  };

  const applyTradeInPromo = (code: string, value: number) => {
    const uppercaseCode = code.toUpperCase().trim();
    setTradeInPromoCode(uppercaseCode);
    setTradeInDiscount(value);
    localStorage.setItem("aerophone_trade_code", uppercaseCode);
    localStorage.setItem("aerophone_trade_value", value.toString());
    toast.success(`Trade-in promo applied: $${value} credit added to your checkout!`);
  };

  const removePromoCode = () => {
    setPromoCode("");
    setPromoDiscount(0);
    localStorage.removeItem("aerophone_promo");
    localStorage.removeItem("aerophone_discount");
    toast.info("Promo code removed.");
  };

  const getCartSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const getCartTotal = () => {
    const subtotal = getCartSubtotal();
    const discountAmount = subtotal * promoDiscount;
    const finalVal = subtotal - discountAmount - tradeInDiscount;
    return finalVal < 0 ? 0 : finalVal;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        promoCode,
        promoDiscount,
        tradeInPromoCode,
        tradeInDiscount,
        applyPromoCode,
        applyTradeInPromo,
        removePromoCode,
        getCartSubtotal,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
