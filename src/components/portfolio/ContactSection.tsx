"use client";

import { cn } from '@/lib/utils';
import { Mail, Github, Phone } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const ContactSection = () => {
    const titleRef = useRef(null);
    const emailRef = useRef(null);
    const githubRef = useRef(null);
    const phoneRef = useRef(null);
    const collabRef = useRef(null);

    const titleInView = useInView(titleRef);
    const emailInView = useInView(emailRef);
    const githubInView = useInView(githubRef);
    const phoneInView = useInView(phoneRef);
    const collabInView = useInView(collabRef);

    return (
        <section id="contact" className="py-20 px-4 bg-black/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 
                    ref={titleRef}
                    className={cn(
                        "text-4xl font-bold mb-16 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent font-headline",
                        "scroll-animate slide-in-from-bottom",
                        { 'is-in-view': titleInView }
                    )}
                >
                    Let's Connect
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <a 
                        ref={emailRef}
                        href="mailto:mensahpeter2003@gmail.com" 
                        className={cn(
                            "bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 group",
                            "scroll-animate slide-in-from-bottom",
                            { 'is-in-view': emailInView }
                        )}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <Mail size={32} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 font-headline">Email</h3>
                        <p className="text-muted-foreground text-sm break-words">mensahpeter2003@gmail.com</p>
                    </a>
                    
                    <a 
                        ref={githubRef}
                        href="https://github.com/Peterkamoah" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit Peter's GitHub profile" 
                        className={cn(
                            "bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 group",
                            "scroll-animate slide-in-from-bottom",
                            { 'is-in-view': githubInView }
                        )}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <Github size={32} className="mx-auto mb-4 text-purple group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 font-headline">GitHub</h3>
                        <p className="text-muted-foreground text-sm">@Peterkamoah</p>
                    </a>
                    
                    <div 
                        ref={phoneRef}
                        className={cn(
                            "bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 group",
                            "scroll-animate slide-in-from-bottom",
                            { 'is-in-view': phoneInView }
                        )}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <Phone size={32} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 font-headline">Phone</h3>
                        <p className="text-muted-foreground text-sm">+233 203 377 401</p>
                        <p className="text-muted-foreground text-sm">+233 256 526 752</p>
                    </div>
                </div>
                
                <div 
                    ref={collabRef}
                    className={cn(
                        "bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-foreground/10",
                        "scroll-animate zoom-in",
                        { 'is-in-view': collabInView }
                    )}
                    style={{ transitionDelay: '400ms' }}
                >
                    <h3 className={cn("text-2xl font-semibold mb-4", "font-headline")}>Ready to collaborate?</h3>
                    <p className="text-muted-foreground mb-6">I'm always open to discussing mathematics, programming projects, or potential opportunities.</p>
                    <a href="mailto:mensahpeter2003@gmail.com" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary px-8 py-3 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 text-primary-foreground">
                        <Mail size={20} />
                        Start a Conversation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
