import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Terrenos Frente al Río | El Fuerte, Sinaloa',
  description:
    'Lotes escriturables en preventa en El Fuerte, Sinaloa. Superficies de 127 m² a 294 m², rodeados de naturaleza y cerca del río.',
  keywords: [
    'terrenos El Fuerte',
    'lotes Sinaloa',
    'terrenos frente al río',
    'terrenos escriturables',
    'inversión inmobiliaria'
  ],
  openGraph: {
    title: 'Terrenos Frente al Río',
    description: 'Un espacio para construir patrimonio junto a la naturaleza.',
    images: ['/images/rio-panorama.jpeg'],
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
