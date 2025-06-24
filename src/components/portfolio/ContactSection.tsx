import { cn } from '@/lib/utils';
import { Mail, Github, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-black/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className={cn("text-4xl font-bold mb-16 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent", "font-headline")}>
                    Let's Connect
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <a href="mailto:mensahpeter2003@gmail.com" className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 group">
                        <Mail size={32} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 font-headline">Email</h3>
                        <p className="text-muted-foreground text-sm break-words">mensahpeter2003@gmail.com</p>
                    </a>
                    
                    <a href="https://github.com/Peterkamoah" target="_blank" rel="noopener noreferrer" aria-label="Visit Peter's GitHub profile" className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 group">
                        <Github size={32} className="mx-auto mb-4 text-purple group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 font-headline">GitHub</h3>
                        <p className="text-muted-foreground text-sm">@Peterkamoah</p>
                    </a>
                    
                    <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 group">
                        <Phone size={32} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2 font-headline">Phone</h3>
                        <p className="text-muted-foreground text-sm">+233 203 377 401</p>
                        <p className="text-muted-foreground text-sm">+233 256 526 752</p>
                    </div>
                </div>
                
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-foreground/10">
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
