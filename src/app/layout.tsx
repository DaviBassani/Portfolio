import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Seu Nome - Desenvolvedor Full Stack',
  description: 'Portfólio pessoal com projetos e informações sobre minha experiência como desenvolvedor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
