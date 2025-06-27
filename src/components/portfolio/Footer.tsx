import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const cleanLinkedInUrl = "https://www.linkedin.com/in/peter-amoah-mensah-a04b7527a/";
    const instagramUrl = "https://www.instagram.com/peterkamoah/";

    return (
        <footer className="py-8 px-4 border-t border-foreground/10 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
                <p className="text-muted-foreground text-sm text-center">&copy; {new Date().getFullYear()} Peter Amoah Mensah. Built with React and a passion for mathematics.</p>
                <div className="flex items-center gap-2">
                    <a 
                        href={instagramUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Peter's Instagram Profile"
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                        <Instagram size={24} />
                    </a>
                    <a 
                        href={cleanLinkedInUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Peter's LinkedIn Profile"
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
