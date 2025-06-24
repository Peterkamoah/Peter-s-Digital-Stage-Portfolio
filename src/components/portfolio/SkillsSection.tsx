"use client";

import { cn } from '@/lib/utils';
import { skills, type Skill } from '@/lib/data';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const SkillCard = ({ skill, delay }: { skill: Skill, delay: number }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef);

    return (
        <div 
            ref={cardRef}
            className={cn(
                "bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1",
                "scroll-animate slide-in-from-bottom",
                { 'is-in-view': cardInView }
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-center mb-4">
                <skill.icon size={24} className="text-accent mr-3" />
                <h3 className="font-semibold font-headline">{skill.name}</h3>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div 
                    className="bg-gradient-to-r from-accent to-primary h-2.5 rounded-full origin-left"
                    style={{ 
                        width: `${skill.level}%`,
                        transform: cardInView ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 1s ease-out',
                        transitionDelay: '300ms',
                    }}
                ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{skill.level}% Proficiency</p>
        </div>
    );
}

const SkillsSection = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef);

    return (
        <section id="skills" className="py-20 px-4 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <h2 
                    ref={titleRef}
                    className={cn(
                        "text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent font-headline",
                        "scroll-animate slide-in-from-bottom",
                        { 'is-in-view': titleInView }
                    )}
                >
                    Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                       <SkillCard key={skill.name} skill={skill} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
