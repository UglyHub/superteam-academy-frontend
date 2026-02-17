import type { Metadata } from 'next';
import { Archivo, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { WalletContextProvider } from '@/components/wallet/WalletProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// ─── Fonts ────────────────────────────────────────────────────────────────────

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: 'Superteam Academy | Learn Solana Development',
    template: '%s | Superteam Academy',
  },
  description:
    'Interactive learning platform for Solana developers. Earn XP, complete coding challenges, and get verifiable on-chain credentials.',
  keywords: ['Solana', 'Web3', 'Learn', 'Blockchain', 'Superteam', 'Brasil'],
  openGraph: {
    title: 'Superteam Academy',
    description: 'Learn Solana. Earn Credentials. Build the Future.',
    type: 'website',
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <WalletContextProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1" id="main-content">
                {children}
              </main>
              <Footer />
            </div>
          </WalletContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}