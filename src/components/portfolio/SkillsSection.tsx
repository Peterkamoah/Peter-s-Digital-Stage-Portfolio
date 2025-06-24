import { cn } from '@/lib/utils';
import { skills } from '@/lib/data';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <h2 className={cn("text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent", "font-headline")}>
                    Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center mb-4">
                                <skill.icon size={24} className="text-accent mr-3" />
                                <h3 className="font-semibold font-headline">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                                <div 
                                    className="bg-gradient-to-r from-accent to-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{skill.level}% Proficiency</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
