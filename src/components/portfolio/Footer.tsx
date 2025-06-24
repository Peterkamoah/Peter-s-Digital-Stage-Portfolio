const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-foreground/10 mt-20">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Peter Amoah Mensah. Built with React and a passion for mathematics.</p>
            </div>
        </footer>
    );
};

export default Footer;
