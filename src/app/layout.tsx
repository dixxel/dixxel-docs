import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'BarMate - Home',
  description: 'The one place for a curated list of beverages and cocktails.',
  openGraph: {
    title: 'BarMate - Home',
    description: 'The one place for a curated list of beverages and cocktails.',
    url: 'https://barmate.dixxel.io',
    siteName: 'BarMate - Home',
    images: [
      {
        url: 'https://dixxel.io/_next/static/media/banner_1024x512.562a7bab.png',
        width: 1024,
        height: 512,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} bg-gradient-to-bl from-gray-900 to-gray-800 text-white min-h-screen m-0 flex flex-col`}
      >
        <Navbar />
        <main className='flex-1 w-full lg:flex lg:items-center lg:flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
