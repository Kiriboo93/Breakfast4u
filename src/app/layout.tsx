import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: "Breakfast 4 u",
  description: "Let us sweeten your morning!",
  authors: [{ name: "Roberto Luquero" }]
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
