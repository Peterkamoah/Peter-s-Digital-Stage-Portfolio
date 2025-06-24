"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const AboutSection = () => {
    const imageUrl = "https://www.dropbox.com/scl/fi/mem1bf165lfzkiqywx8fm/photo_2025-06-24_07-24-12.jpg?rlkey=3jclpf35xxbl6q9p7mln8jbh0&raw=1";

    const titleRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const educationRef = useRef(null);
    const leadershipRef = useRef(null);

    const titleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.5 });
    const textInView = useInView(textRef, { triggerOnce: true });
    const imageInView = useInView(imageRef, { triggerOnce: true });
    const educationInView = useInView(educationRef, { triggerOnce: true });
    const leadershipInView = useInView(leadershipRef, { triggerOnce: true });

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 
                    ref={titleRef}
                    className={cn(
                        "text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent font-headline",
                        "scroll-animate slide-in-from-bottom",
                        { 'is-in-view': titleInView }
                    )}
                >
                    About Me
                </h2>

                <p 
                    ref={textRef}
                    className={cn(
                        "text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16",
                        "scroll-animate slide-in-from-bottom",
                        { 'is-in-view': textInView }
                    )}
                    style={{ transitionDelay: '150ms' }}
                >
                    I am a dedicated and curious third-year student pursuing a Bachelor's degree in Mathematics at the prestigious Kwame Nkrumah University of Science and Technology (KNUST). My academic journey is fueled by a deep fascination with the elegant logic of mathematics and its powerful applications in the world of technology.
                    <br/><br/>
                    Beyond theory, I am an aspiring software developer with hands-on experience in web technologies and programming. I thrive in collaborative environments and am driven by a desire to solve complex problems.
                </p>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div 
                        ref={imageRef}
                        className={cn(
                            "flex justify-center md:justify-start mb-8 md:mb-0",
                            "scroll-animate zoom-in",
                            { 'is-in-view': imageInView }
                        )}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <Image 
                                src={imageUrl}
                                alt="Peter Amoah Mensah at work"
                                width={320}
                                height={320}
                                className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div 
                            ref={educationRef}
                            className={cn(
                                "bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10",
                                "scroll-animate slide-in-from-bottom",
                                { 'is-in-view': educationInView }
                            )}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <h3 className={cn("text-2xl font-semibold mb-4 text-accent", "font-headline")}>Education</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold font-headline">Bachelor's in Mathematics (3rd Year)</h4>
                                    <p className="text-muted-foreground">Kwame Nkrumah University of Science and Technology</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold font-headline">WASSCE (2018-2021)</h4>
                                    <p className="text-muted-foreground">Ghana Secondary Technical School</p>
                                </div>
                            </div>
                        </div>
                        
                        <div 
                            ref={leadershipRef}
                            className={cn(
                                "bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10",
                                "scroll-animate slide-in-from-bottom",
                                { 'is-in-view': leadershipInView }
                            )}
                            style={{ transitionDelay: '500ms' }}
                        >
                            <h3 className={cn("text-2xl font-semibold mb-4 text-purple", "font-headline")}>Leadership & Experience</h3>
                            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                <li>Assistant Boys School Prefect</li>
                                <li>Team collaboration with SideCodeTeam</li>
                                <li>LaTeX presentation leadership</li>
                                <li>Mathematical project development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
