import type { Metadata } from 'next';
import { SiteConfig } from '@/lib/types';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Next.js Shadcn App',
  description: 'A production-ready Next.js app using shadcn/ui and Tailwind CSS.',
  openGraph: {
    title: 'Next.js Shadcn App',
    description: 'A production-ready Next.js app using shadcn/ui and Tailwind CSS.',
    url: 'https://example.com',
    siteName: 'Next.js Shadcn App',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Shadcn App',
    description: 'A production-ready Next.js app using shadcn/ui and Tailwind CSS.',
    image: 'https://placehold.co/1200x630.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900">
        <header className="bg-white dark:bg-slate-800 shadow-sm">
          <nav className="container flex items-center justify-between h-16">
            <a href="/" className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Shadcn App
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 container py-8">{children}</main>
        <footer className="bg-white dark:bg-slate-800 shadow-inner">
          <div className="container py-4 text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Shadcn App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

app/layout.tsx[usedfor]root layout[/usedfor]