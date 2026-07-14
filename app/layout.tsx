import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Terrenos Frente al Río | El Fuerte, Sinaloa',
  description:
    'Terrenos en preventa en El Fuerte, Sinaloa. Superficies de 127 m² a 294 m², rodeados de naturaleza y cerca del río.',
  keywords: [
    'terrenos El Fuerte',
    'lotes Sinaloa',
    'terrenos frente al río',
    'terrenos con escritura',
    'inversión inmobiliaria'
  ],
  openGraph: {
    title: 'Terrenos Frente al Río',
    description: 'Un espacio para construir patrimonio junto a la naturaleza.',
    images: ['/images/rio-panorama.jpeg'],
    locale: 'es_MX',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/brand/mark.svg', type: 'image/svg+xml' }],
    shortcut: ['/brand/mark.svg']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
