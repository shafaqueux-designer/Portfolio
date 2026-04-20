import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Sparkles } from "lucide-react";

const skills = [
  "Figma", "Framer", "Sketch", "Adobe XD", "Adobe Photoshop", " Adobe Illustrator", "Adobe InDesign",
  "Canva", "Notion", "Protopie", "Miro", "Zeplin", "Slack", "Microsoft PowerPoint"
];

const coreSkills = [
  "Data Analysis", "Product Strategy", "User Research", "User Personas", "Information Architecture", "User Flows", "Wireframing", "Prototyping", "Interaction Design", "Usability Testing", "A/B Testing", "Design Systems", "Responsive Design", "Accessibility", "Visual Design", "Typography", "Color Theory", "Layout Design", "Brand Identity", "Creative Problem-Solving", "Design Thinking", "Cross-functional Collaboration", "Stakeholder Communication", "Presentation Skills", "Attention to Detail"
];

const education = [
  { title: "Bachelor in Computer Applications (BCA) ", place: "Manipal University, Jaipur", period: "2021 – 2024" },
  { title: "UI/UX Design Certification", place: "Dice Academy, New Delhi", period: "Aug 2022 – Feb 2023" },
  { title: "Graphic Design Certification", place: "Udemy, Online", period: "Mar 2020" },
  { title: "Intermediate 12th (CBSE)", place: "K.M. Academy", period: "2018 – 2020" },
  { title: "Secondary School 10th (CBSE)", place: "Nath Public School", period: "2018" },
];

const Work = [
  { title: "UI/UX Designer", company: "Corewave Tech Pvt. Ltd.", place: "Noida, Uttarpradesh", period: "Sep 2024 – Present", mode: "On-site"},
  { title: "UI/UX Designer", company: "Cut Edge Technology Pvt. Ltd.", place: "Gurugram, Haryana", period: "Nov 2023 – Jul 2024", mode: "On-site" },
  { title: "Graphic & UI/UX Designer", company: "Ace Graffix", place: "Faridabad, Haryana", period: "May 2022 – Oct 2023", mode: "On-site" },
  { title: "Graphic Designer", company: "Ace Graffix", place: "Faridabad, Haryana", period: "Dec 2021 – Apr 2022", mode: "Hybrid" },
  { title: "Junior Graphic Designer", company: "Ace Graffix", place: "Faridabad, Haryana", period: "Oct 2020 – Nov 2021", mode: "Remote" },
];

const socialLinks = [
  { label: "Resume", href: "https://drive.google.com/file/d/1FR4KAWwzakdJV3UUvoeZ8pWI7EjE52ln/view?usp=sharing" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-shafaque-7109761aa/" },
  { label: "Portfolio in PDF", href: "https://drive.google.com/file/d/1Nyyr8cGy9ZReuCedZC3-lXbmItFVtoke/view?usp=sharing" },
];

const stats = [
  { value: "5.5+", label: "Years of Experience" },
  { value: "35+", label: "Ux/Ui Design Projects" },
  { value: "300+", label: "Graphic Design Projects" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] -top-60 -right-60 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] bottom-20 -left-40 pointer-events-none" />

      {/* Hero — full width two-column layout */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Left column */}
        <div>
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Product Designer · UI/UX Designer
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-display font-bold text-foreground leading-[1.1]">
            Hey, I<span className="text-primary">'</span>m
            <br />
            Mohammad Shafaque<span className="text-primary">.</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-6 text-muted-foreground text-lg leading-relaxed space-y-4">
        <p>
        A UI/UX with over 5.5 years of total experience, including 3.5 years in UI/UX and a strong background in graphic design with 2 years of experience. I’ve worked across both product and visual design, contributing to everything from brand visuals to full-scale digital products, which gives me a well-rounded perspective on design. Currently working as a UI/UX Designer, I focus on creating intuitive, user-friendly, and visually engaging experiences that solve real problems.        </p>

        <p>
        My journey started in graphic design, where I built a strong foundation in typography, color, and layout—skills that continue to shape my approach to UI/UX today. I enjoy turning ideas into clean, functional designs and continuously improving my craft to deliver meaningful and impactful digital experiences.
        </p>
      
    </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:shafaqueansari4@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} custom={4} className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={13} /> {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column — stats & highlight card */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-col gap-6 lg:pt-8"
        >
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 transition-colors"
              >
                <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Open to opportunity card */}
          <div className="rounded-xl border border-border bg-card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-primary" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary">Open to opportunities</span>
            </div>
            <p className="text-foreground font-display font-medium">Open to full-time roles</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Open to full-time opportunities in service-based and product-based organizations, seeking a UI/UX Designer role where I can contribute to user-centered design solutions. Interested in working across the complete design lifecycle, collaborating with cross-functional teams, and delivering scalable, intuitive, and high-quality digital experiences.
            </p>
          </div>

          {/* Primary Tools */}
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Primary Tools</p>
            <div className="flex flex-wrap gap-4 ">
              {["Figma", "Framer", "Protopie", "Sketch", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Balsamiq"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Work Experience
          </h2>
          {/* <p className="text-muted-foreground leading-relaxed">
            3+ years of design experience shaping comprehensive brand identities and crafting high-impact print and digital marketing assets. Proven track record of managing targeted social media and email campaigns to drive audience engagement and elevate brand visibility across logos, editorial layouts, brochures, web interfaces, and custom merchandise.
          </p> */}
           <div className="grid gap-4 mt-6">
            {Work.map((Work) => (
              <div
                key={Work.title}
                className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-medium text-foreground">
                    {Work.title}
                     </h3>
                  <h3 className="font-display font-light text-foreground/60">
                    {Work.mode}
                    </h3>
                    </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {Work.company} 
                  <span className="mx-3">|</span>
                  {Work.place}
                  <span className="mx-3">|</span>
                  {Work.period}
                  </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education on the right */}

        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Education & Certifications
          </h2>
          <div className="grid gap-4">
            {education.map((edu) => (
              <div
                key={edu.title}
                className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-display font-medium text-foreground">{edu.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.place} 
                  <span className="mx-3">|</span>
                  {edu.period}
                  </p>
              </div>
            ))}
          </div>
        </div>

      </motion.section>

      {/* Skills — two columns */}
      <motion.section
        className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Software & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm text-primary transition-colors cursor-default hover:bg-primary/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Index;
