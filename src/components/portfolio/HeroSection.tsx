"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Github, Mail, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

const ScrollToSection = ({ targetId, children }: { targetId: string, children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };
    return <a href={`#${targetId}`} onClick={handleClick} className="cursor-pointer">{children}</a>;
};

const HeroSection = () => {
    const imageUrl = "https://www.dropbox.com/scl/fi/mem1bf165lfzkiqywx8fm/photo_2025-06-24_07-24-12.jpg?rlkey=3jclpf35xxbl6q9p7mln8jbh0&raw=1";
    
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const buttonsRef = useRef(null);
    const chevronRef = useRef(null);

    const imageInView = useInView(imageRef, { threshold: 0.5 });
    const titleInView = useInView(titleRef, { threshold: 0.5 });
    const buttonsInView = useInView(buttonsRef, { threshold: 0.5 });
    const chevronInView = useInView(chevronRef, { threshold: 0.5 });

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 animate-pulse"></div>
            <div className="text-center z-10 px-4">
                <div 
                    ref={imageRef}
                    className={cn("mb-8 scroll-animate zoom-in", { 'is-in-view': imageInView })}
                >
                    <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-6 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple rounded-full animate-pulse opacity-75"></div>
                        <Image 
                            src={imageUrl}
                            alt="Peter Amoah Mensah"
                            width={160}
                            height={160}
                            priority
                            className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-foreground/20 shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10"
                            data-ai-hint="portrait man"
                        />
                    </div>
                </div>

                <div 
                    ref={titleRef}
                    className={cn("scroll-animate fade-in", { 'is-in-view': titleInView })}
                    style={{ transitionDelay: '200ms' }}
                >
                    <h1 className={cn("text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent", "font-headline")}>
                        Peter Amoah Mensah
                    </h1>
                    <p className="text-lg md:text-2xl text-muted-foreground mb-8 font-headline">
                        Mathematics Student & Software Developer
                    </p>
                </div>
                
                <div
                    ref={buttonsRef}
                    className={cn(
                        "flex flex-wrap justify-center gap-4 mb-12 scroll-animate slide-in-from-bottom", 
                        { 'is-in-view': buttonsInView }
                    )}
                    style={{ transitionDelay: '400ms' }}
                >
                    <a href="mailto:mensahpeter2003@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-accent to-primary px-6 py-3 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 text-primary-foreground">
                        <Mail size={20} />
                        Get In Touch
                    </a>
                    <a href="https://github.com/Peterkamoah" target="_blank" rel="noopener noreferrer" aria-label="View Peter's GitHub profile" className="flex items-center gap-2 border border-foreground/30 px-6 py-3 rounded-full hover:bg-foreground/10 transition-all duration-300 transform hover:scale-105">
                        <Github size={20} />
                        View GitHub
                    </a>
                </div>
                
                <div
                    ref={chevronRef}
                    className={cn("scroll-animate fade-in", { 'is-in-view': chevronInView })}
                    style={{ transitionDelay: '600ms' }}
                >
                    <ScrollToSection targetId="about">
                        <ChevronDown size={32} className="mx-auto animate-bounce text-accent" />
                    </ScrollToSection>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
