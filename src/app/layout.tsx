import { Space_Mono, Old_Standard_TT, Courier_Prime } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import TabNavigation from '@/components/TabNavigation';
import BackgroundGears from '@/components/BackgroundGears';
import AnimationProvider from '@/components/providers/AnimationProvider';
import ScrollProgressBar from '@/components/effects/ScrollProgressBar';
import CustomCursor from '@/components/effects/CustomCursor';
import InkBlot from '@/components/effects/InkBlot';

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
        <AnimationProvider>
          <CustomCursor />
          <ScrollProgressBar />
          <div className="layout-container">
            <Sidebar />
            <div className="main-content">
              <TabNavigation />
              <div className="scroll-area">
                <BackgroundGears />
                <InkBlot />

                <main>{children}</main>
              </div>
            </div>
          </div>
        </AnimationProvider>
        <Analytics />
      </body>
    </html>
  );
}
