import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Sparkles } from "lucide-react";
// import Works from "./Works";

import eyesetucover from "@/assets/App/Eye Setu/1.png";
import ics1 from "@/assets/App/ics/1.png";
import bkd1 from "@/assets/App/BKD/1.png";
import pro1 from "@/assets/App/Pronod/1.png";

const AppleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.08.08 2.16-.57 2.81-1.37z" />
  </svg>
);

const PlayStoreIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.55.35-.95.84-1.03.17-.03.36 0 .52.1l11.75 8.5-4.22 4.22L3.84 21.43c-.16.1-.35.13-.52.1-.49-.08-.84-.48-.84-1.03zm14.15-8.43L20 10.38c.67.38.67 1.86 0 2.24l-2.85 1.69-3.27-3.24 3.27-3.00zM4.77 2.86l9.36 9.36-2.86 2.86L4.77 2.86zm9.36 12.08l2.86 2.86-9.36 9.36 6.5-12.22z" />
  </svg>
);

const skills = [
  "Figma", "Framer", "Sketch", "Adobe XD", "Adobe Photoshop", " Adobe Illustrator", "Adobe InDesign",
  "Canva", "Notion", "Protopie", "Miro", "Zeplin", "Slack", "Microsoft PowerPoint"
];

const coreSkills = [
  "Data Analysis", "Product Strategy", "User Research", "User Personas", "Information Architecture", "User Flows", "Wireframing", "Prototyping", "Interaction Design", "Usability Testing", "A/B Testing", "Design Systems", "Responsive Design", "Accessibility", "Visual Design", "Typography", "Color Theory", "Layout Design", "Brand Identity", "Creative Problem-Solving", "Design Thinking", "Cross-functional Collaboration", "Stakeholder Communication", "Presentation Skills", "Attention to Detail"
];
const projects = [
  {
    title: "EyeSetu (Healthcare Platform – User, Doctor & Optometrist Apps)",
    category: "Healthcare Platform",
    image: eyesetucover,
    appStore: "https://apps.apple.com/in/app/eyesetu/id6765830146",
    description: "This project is a comprehensive eye care platform designed to streamline the entire patient journey—from appointment booking to consultation, diagnosis, and product purchase. It integrates telemedicine, OPD management, and an e-commerce store into one seamless experience. The platform supports multiple user roles including patients, doctors, optometrists, and administrators, enabling efficient healthcare delivery while maintaining a user-friendly interface."
  },
  {
    title: "Rise Against Cancer (ICS)",
    category: "Cancer Awareness & Support",
    image: ics1,
    appStore: "https://apps.apple.com/in/iphone/search?term=rise%20against%20cancer",
    description: "Rise Against Cancer is a comprehensive cancer awareness and support platform developed to bridge the gap between information and accessibility. It provides reliable, easy-to-understand content about cancer, helping users make informed decisions about prevention, detection, and care. The app is designed for patients, caregivers, and the general public, offering a centralized space for education, guidance, and emotional support."
  },
  {
    title: "OnBKD - Grocery Ordering App",
    category: "Quick Commerce",
    image: bkd1,
    playStore: "https://play.google.com/store/apps/details?id=com.bkdapp.bkd_app&hl=en_IN",
    description: "BKD – Baniya Ki Dukan is a quick commerce grocery platform inspired by the traditional neighborhood store experience. It enables users to browse, order, and receive groceries and daily essentials in minutes. The app combines speed, simplicity, and familiarity, offering a digital version of the trusted local “baniya” shop with modern features like real-time tracking and seamless payments."
  },
  // {
  //   title: "Pronod - iOS Dashcam Streaming App",
  //   category: "Smart Automotive",
  //   image: pro1,
  //   description: "Developed an iOS dashcam streaming application using Provider, implementing real-time video streaming with VLC/media_kit, network handling over Wi-Fi/4G, REST API integration, Google Maps tracking."
  // },
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
  // { label: "Portfolio Figma", href: "https://drive.google.com/file/d/1Nyyr8cGy9ZReuCedZC3-lXbmItFVtoke/view?usp=sharing" },
];

const stats = [
  { value: "5.5+", label: "Years of Experience" },
  { value: "30+", label: "Ux/Ui Design Projects" },
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

<motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => {
            const Icon = proj.image;
            return (
              <div
                key={proj.title}
                className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all group flex flex-col justify-between"
              >
                {proj.image ? (
                  <div className="h-96 w-full border-b border-border/40 relative overflow-hidden bg-card">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-md border border-border/80 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-sm z-10">
                      {proj.category}
                    </div>
                  </div>
                ) : null}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                  
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {(proj.appStore || proj.playStore) && (
                    <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-border/40">
                      {proj.appStore && (
                        <a
                          href={proj.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border transition-colors group/btn"
                        >
                          <AppleIcon className="w-4 h-4 text-foreground group-hover/btn:text-primary transition-colors" />
                          <span>App Store</span>
                          <ExternalLink size={11} className="opacity-60" />
                        </a>
                      )}
                      {proj.playStore && (
                        <a
                          href={proj.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border transition-colors group/btn"
                        >
                          <PlayStoreIcon className="w-4 h-4 text-emerald-500 transition-colors" />
                          <span>Google Play</span>
                          <ExternalLink size={11} className="opacity-60" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

{/* 
      <div>
        <Works />
      </div> */}
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
