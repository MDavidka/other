import type { Metadata } from "next";
import "./globals.css";
import { DiscordProvider } from "../lib/discord-store";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Discord Clone — High-Fidelity Interactive Chat & Voice",
  description: "A premium Discord clone featuring real-time-like chat simulation, AI bots, voice calls, custom games, and user profiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <DiscordProvider>
          {children}
          <Toaster 
            theme="dark" 
            position="top-right" 
            toastOptions={{
              style: {
                background: '#2f3136',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.08)',
              }
            }}
          />
        </DiscordProvider>
      </body>
    </html>
  );
}
