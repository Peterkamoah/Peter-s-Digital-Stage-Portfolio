"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Mail, Phone, Code, Book, Award, ChevronDown, Calculator, Database, BarChart3, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'React', icon: Code, level: 85 },
    { name: 'HTML/CSS', icon: Code, level: 90 },
    { name: 'MySQL', icon: Database, level: 80 },
    { name: 'MATLAB', icon: Calculator, level: 85 },
    { name: 'R', icon: BarChart3, level: 80 },
    { name: 'LaTeX', icon: Book, level: 85 },
    { name: 'Excel', icon: BarChart3, level: 90 }
  ];

  const projects = [
    {
      title: 'Quadratic Solver',
      description: 'Excel-based mathematical tool for solving quadratic equations with graphical visualization',
      tech: ['Excel', 'VBA', 'Mathematics'],
      highlight: true
    },
    {
      title: 'LaTeX Presentations',
      description: 'Professional academic presentations and documents using LaTeX typesetting',
      tech: ['LaTeX', 'Academic Writing', 'Typography'],
      highlight: false
    },
    {
      title: 'Mathematical Analysis Tools',
      description: 'MATLAB and R scripts for statistical analysis and mathematical modeling',
      tech: ['MATLAB', 'R', 'Statistics', 'Data Analysis'],
      highlight: true
    },
    {
      title: 'Database Projects',
      description: 'MySQL database design and management for various applications',
      tech: ['MySQL', 'Database Design', 'SQL'],
      highlight: false
    }
  ];

  const ScrollToSection = ({ targetId, children }: { targetId: string, children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    };
    return <a href={`#${targetId}`} onClick={handleClick} className="cursor-pointer">{children}</a>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-deep to-background text-foreground overflow-x-hidden">
      {/* Desktop Nav */}
      <nav className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/50 backdrop-blur-md' : 'bg-transparent'
      } rounded-full px-6 py-3 border border-foreground/20`}>
        <div className="flex space-x-6">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <ScrollToSection key={section} targetId={section}>
              <span className={cn('capitalize transition-colors duration-200',
                activeSection === section ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
              )}>
                {section}
              </span>
            </ScrollToSection>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/20">
        <div className="flex items-center justify-between h-16 px-4">
          <ScrollToSection targetId="home">
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
                  {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                    <ScrollToSection key={section} targetId={section}>
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
      </div>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 animate-pulse"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple rounded-full animate-pulse opacity-75"></div>
              <Image 
                src="https://www.dropbox.com/scl/fi/mem1bf165lfzkiqywx8fm/photo_2025-06-24_07-24-12.jpg?rlkey=3jclpf35xxbl6q9p7mln8jbh0&raw=1"
                alt="Peter Amoah Mensah"
                width={160}
                height={160}
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-foreground/20 shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
            <h1 className={cn("text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent", "font-headline")}>
              Peter Amoah Mensah
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 font-headline">
              Mathematics Student & Software Developer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:mensahpeter2003@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-accent to-primary px-6 py-3 rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 text-primary-foreground">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://github.com/Peterkamoah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-foreground/30 px-6 py-3 rounded-full hover:bg-foreground/10 transition-all duration-300 transform hover:scale-105">
              <Github size={20} />
              View GitHub
            </a>
          </div>
          
          <ScrollToSection targetId="about">
            <ChevronDown size={32} className="mx-auto animate-bounce text-accent" />
          </ScrollToSection>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent", "font-headline")}>
            About Me
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16">
            I am a dedicated and curious third-year student pursuing a Bachelor's degree in Mathematics at the prestigious Kwame Nkrumah University of Science and Technology (KNUST). My academic journey is fueled by a deep fascination with the elegant logic of mathematics and its powerful applications in the world of technology.
            <br/><br/>
            Beyond theory, I am an aspiring software developer with hands-on experience in web technologies and programming. I thrive in collaborative environments and am driven by a desire to solve complex problems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start mb-8 md:mb-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image 
                  src="https://www.dropbox.com/scl/fi/mem1bf165lfzkiqywx8fm/photo_2025-06-24_07-24-12.jpg?rlkey=3jclpf35xxbl6q9p7mln8jbh0&raw=1"
                  alt="Peter Amoah Mensah at work"
                  width={320}
                  height={320}
                  className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10">
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
              
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10">
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

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={cn("text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent", "font-headline")}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className={cn(`bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1`, project.highlight ? 'ring-2 ring-accent/30' : '')}>
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
            ))}
          </div>
        </div>
      </section>

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
            
            <a href="https://github.com/Peterkamoah" target="_blank" rel="noopener noreferrer" className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 group">
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

      <footer className="py-8 px-4 border-t border-foreground/10 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">&copy; 2025 Peter Amoah Mensah. Built with React and a passion for mathematics.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
