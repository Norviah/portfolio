'use client';

import Link from 'next/link';

import { Suspense } from 'react';
import { ThemeSelector } from '../ThemeSelector';

import { cn } from '@/utils/cn';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import type { Route } from '@/types/Route';

const navItems: Route[] = [
  { name: 'home', path: '/' },
  { name: 'work', path: '/work' },
  { name: 'blog', path: '/blog' },
];

export function Navbar(): JSX.Element {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative flex scroll-pr-6 flex-row items-start justify-between px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {navItems.map((route: Route, index: number) => {
                  return <NavItem key={index} route={route} />;
                })}
              </Suspense>
            </div>
            <ThemeSelector />
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

function NavItem({ route }: { route: Route }): JSX.Element {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  const isActive = route.path === pathname;

  return (
    <Link
      key={route.path}
      href={route.path}
      className={cn('flex align-middle transition-all', isActive ? 'text-foreground' : 'text-muted-foreground')}
    >
      <span className="relative px-2 py-1">
        {route.name}
        {route.path === pathname ? (
          <motion.div
            className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-border"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
