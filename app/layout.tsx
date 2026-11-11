import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'DOT — Design Engineering Portfolio', template: '%s — DOT' },
  description: 'From Concept to Creation. A design engineering portfolio.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'DOT — Design Engineering Portfolio', description: 'Design × Engineering', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
