"use client";

import React from 'react';
import { cn } from '@/lib/utils';

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
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection, isScrolled }) => {
  return (
    <header className="flex justify-center fixed top-4 left-0 right-0 z-50 px-4">
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'bg-background/50 backdrop-blur-md' : 'bg-transparent'
      } rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-foreground/20`}>
        <div className="flex items-center space-x-2 sm:space-x-4">
          {sections.map((section) => (
            <ScrollToSection key={section} targetId={section} onClick={() => {}}>
              <span className={cn('capitalize transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap',
                activeSection === section ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
              )}>
                {section}
              </span>
            </ScrollToSection>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
