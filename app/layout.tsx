import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';
import TanStackProvider from '../components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const geistRoboto = Roboto({
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'A simple note management application',
  openGraph: {
    title: 'NoteHub',
    description: 'Manage your notes easily',
    url: 'https://08-zustand-wheat.vercel.app/',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub Open Graph Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistRoboto.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main>
              {children}
              {modal}
            </main>
            <Footer />
            <div id="modal-root" />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
