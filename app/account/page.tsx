import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Your account — other",
  description: "Manage your orders, book setup calls, and track returns from one dashboard.",
}

export default function AccountPage() {
  return (
    <>
<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Your purchases and preferences</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Track orders, book calls, and manage returns.</p>
        <p className="text-muted-foreground max-w-2xl">Login required. All actions sync across devices.</p></div>

    </div>
  </div>
</section>

<section className="px-4 py-16 sm:py-20 lg:py-28 ">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Recent activity</h2></div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">iPhone 16 Pro</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Delivered March 12 • Setup call completed</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Galaxy S25 Ultra</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Return processed March 8 • Refund issued</p>
        </CardContent>
      </Card>
      <Card key={i}>
        <CardContent className="p-6 text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4"><AvatarFallback className="text-xl">U</AvatarFallback></Avatar>
          <h3 className="font-semibold">Pixel 8 Pro</h3>
          
          <p className="text-sm text-muted-foreground mt-2">Setup call scheduled March 20 • 4:00 PM PST</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
    </>
  )
}
