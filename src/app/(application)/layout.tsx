import { Navbar } from '@/components/layout/Navbar';
import type { LayoutProps } from '@/types/components/LayoutProps';

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='mx-4 mb-40 mt-8 flex flex-col px-5 antialiased md:flex-row lg:mx-auto lg:max-w-3xl lg:px-0'>
      <main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0'>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
