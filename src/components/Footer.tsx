import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-shafaque-7109761aa/" },
  { label: "Resume", href: "https://drive.google.com/file/d/1FR4KAWwzakdJV3UUvoeZ8pWI7EjE52ln/view?usp=sharing" },
  { label: "Portfolio in PDF", href: "https://drive.google.com/file/d/1Nyyr8cGy9ZReuCedZC3-lXbmItFVtoke/view?usp=sharing" },];

const marqueeTools = [
  "Figma", "Framer", "Sketch", "Adobe XD", "Adobe Photoshop", " Adobe Illustrator", "Adobe InDesign",
  "Canva", "Notion", "Protopie", "Miro", "Zeplin", "Slack", "Microsoft PowerPoint",
];

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Marquee ticker */}
      <div className="border-t border-b border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeTools, ...marqueeTools, ...marqueeTools].map((tool, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-medium text-muted-foreground/40 uppercase tracking-widest"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Big CTA section */}
      <div className="px-6 sm:px-12 lg:px-20 py-20 relative">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] -bottom-60 left-1/2 -translate-x-1/2 pointer-events-none" />

        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Got a project in mind?
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
            Let's work
            <br />
            together<span className="text-primary">.</span>
          </h2>
          <motion.a
            href="mailto:shafaqueansari4@gmail.com"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={18} />
            Say Hello
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 sm:px-12 lg:px-20 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Contact */}
          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:shafaqueansari4@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail size={14} /> shafaqueansari4@gmail.com
            </a>
            <a href="tel:+919534008586" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone size={14} /> +91 9534008586
            </a>
            <a href="https://wa.me/919534008586" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={14} /> WhatsApp
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Mohammad Shafaque. Thoughtfully designed, driven by passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
