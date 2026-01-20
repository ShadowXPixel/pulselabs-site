'use client';

import Link from 'next/link';
import { Bot, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Bot className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold">PulseLabs</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Services
          </Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild variant="default" className="transition-transform duration-300 hover:scale-105">
            <Link href="https://discord.gg/placeholder" target="_blank">Contact</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Bot className="h-7 w-7 text-primary" />
                  <span className="font-headline text-xl font-bold">PulseLabs</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  <Link
                    href="/services"
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </nav>
                <Button asChild className="mt-8">
                  <Link href="https://discord.gg/placeholder" target="_blank">
                    Contact
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
