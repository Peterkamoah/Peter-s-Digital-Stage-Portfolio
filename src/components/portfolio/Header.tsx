"use client";

import React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const ScrollToSection = ({ targetId, children, onClick }: { targetId: string, children: React.ReactNode, onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    onClick();
  };
  return <a href={`#${targetId}`} onClick={handleClick} className="cursor-pointer">{children}</a>;
};

interface HeaderProps {
  sections: string[];
  activeSection: string;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection, isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Nav */}
      <header className="md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className={`transition-all duration-300 ${
          isScrolled ? 'bg-background/50 backdrop-blur-md' : 'bg-transparent'
        } rounded-full px-6 py-3 border border-foreground/20 hidden md:block`}>
          <div className="flex space-x-6">
            {sections.map((section) => (
              <ScrollToSection key={section} targetId={section} onClick={() => {}}>
                <span className={cn('capitalize transition-colors duration-200',
                  activeSection === section ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                )}>
                  {section}
                </span>
              </ScrollToSection>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/20">
        <div className="flex items-center justify-between h-16 px-4">
          <ScrollToSection targetId="home" onClick={handleLinkClick}>
            <span className="font-bold font-headline text-accent">Peter A. Mensah</span>
          </ScrollToSection>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open Menu" className="p-1">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur-xl w-4/5 p-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col space-y-8 text-center">
                  {sections.map((section) => (
                    <ScrollToSection key={section} targetId={section} onClick={handleLinkClick}>
                      <span className={cn('capitalize transition-colors duration-200 text-2xl font-headline',
                        activeSection === section ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                      )}>
                        {section}
                      </span>
                    </ScrollToSection>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Header;
