"use client";

import { cn } from '@/lib/utils';
import { projects, type Project } from '@/lib/data';
import { Award } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const ProjectCard = ({ project, delay }: { project: Project, delay: number }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { triggerOnce: true });

    return (
        <div 
            ref={cardRef}
            className={cn(
                `bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1`, 
                project.highlight ? 'ring-2 ring-accent/30' : '',
                "scroll-animate slide-in-from-bottom",
                { 'is-in-view': cardInView }
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className={cn("text-xl font-semibold text-accent", "font-headline")}>{project.title}</h3>
                {project.highlight && (
                    <Award size={20} className="text-warning" />
                )}
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span key={tech} className="bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 rounded-full text-xs border border-foreground/20 text-muted-foreground">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

const ProjectsSection = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { triggerOnce: true });
    
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 
                    ref={titleRef}
                    className={cn(
                        "text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent font-headline",
                        "scroll-animate slide-in-from-bottom",
                        { 'is-in-view': titleInView }
                    )}
                >
                    Featured Projects
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
