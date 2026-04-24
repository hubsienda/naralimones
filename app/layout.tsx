import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naralimon',
  description: 'A refined way to discover better possibilities on the Costa del Sol.',
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
