import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Houda SDK – Portfolio',
  description: 'My work, skills and contact information'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ maxWidth: 960, margin: '2rem auto', padding: '0 1rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
