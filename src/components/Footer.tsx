import { Bot } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-6 md:px-6">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PulseLabs. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
            </Link>
            <Link href="https://discord.com/users/1399341822383489024" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
            </Link>
        </div>
      </div>
    </footer>
  );
}
