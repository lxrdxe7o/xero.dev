import { Space_Mono, Old_Standard_TT, Courier_Prime } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import TabNavigation from '@/components/TabNavigation';
import BackgroundGears from '@/components/BackgroundGears';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

const oldStandard = Old_Standard_TT({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-old-standard',
  display: 'swap',
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier-prime',
  display: 'swap',
});

export const metadata = {
  title: 'ARCHIVAL // XERO.DEV',
  description: 'Technical archives and project documentation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${spaceMono.variable} ${oldStandard.variable} ${courierPrime.variable}`}
        suppressHydrationWarning
      >
        <div className="layout-container">
          <Sidebar />
          <div className="main-content">
            <TabNavigation />
            <div className="scroll-area">
              <BackgroundGears />
              <div className="texture-overlay"></div>
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

