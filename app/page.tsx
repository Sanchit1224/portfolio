"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CirclePlay,
  Code2,
  Command,
  Cpu,
  Database,
  Download,
  GitBranch,
  Layers3,
  Link2,
  Mail,
  MapPin,
  MonitorSmartphone,
  Rocket,
  SendHorizonal,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: 8, suffix: "+", label: "microservices shipped" },
  { value: 2, suffix: "+", label: "years building systems" },
  { value: 99, suffix: "%", label: "focus on reliability" },
];

const skillGroups = [
  {
    title: "Backend",
    icon: Cpu,
    items: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    items: ["Kafka", "JPA", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud & Quality",
    icon: ShieldCheck,
    items: ["Docker", "Kubernetes", "GCP", "AWS", "CI/CD"],
  },
];

const experiences = [
  {
    company: "Larsen & Toubro Technology Services (LTTS)",
    role: "Backend Engineer",
    duration: "Dec 2024 — Present",
    summary:
      "Delivered production-grade backend capabilities for the Calix SmartCloud platform, strengthening resilience and observability.",
    highlights: [
      "Built 8+ microservices with Spring Boot and event-driven integrations",
      "Implemented JWT and OAuth2 security layers for enterprise access control",
      "Instrumented Prometheus and Grafana dashboards to support monitoring",
    ],
  },
  {
    company: "Seligent Consulting Pvt Ltd",
    role: "Full Stack Developer",
    duration: "Jun 2024 — Dec 2024",
    summary:
      "Contributed to a manufacturing operations tracking platform for KONE on a modern React and Spring Boot stack.",
    highlights: [
      "Developed role-based workflows and secure access features",
      "Delivered polished UI components with React, TypeScript, and Material UI",
      "Collaborated in agile sprints to ship stable business-critical flows",
    ],
  },
];

const projects = [
  {
    title: "Enterprise Microservices E-Commerce Backend",
    blurb:
      "A distributed platform designed for scale, with service isolation, secure auth, and resilient caching layers.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Docker",
      "PostgreSQL",
      "Redis",
      "GCP",
    ],
    link: "https://github.com/Sanchit1224/Microservices-E-Commerce",
  },
  {
    title: "MediFlow– AI-Powered Hospital Operations Platform",
    blurb:
      " Designed and developed a scalable hospital operations platform for patient admission, bed management, discharge workflows, and real-time operational monitoring.",
    stack: ["React", "Spring Boot", "Spring Security", "Docker", "JWT","MySQL"],
    link: " https://github.com/Sanchit1224/mediflow",
  },
];

const services = [
  "Backend architecture and API design",
  "Spring Boot and microservices engineering",
  "High-performance REST APIs and integrations",
  "Full stack delivery with React and TypeScript",
  "System optimization, observability, and consulting",
];

const certifications = [
  { name: "Google Cloud Digital Leader", year: "2025" },
  { name: "Google Generative AI Leader", year: "2025" },
];

const achievements = [
  { label: "CGPA", value: "9.39" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Experience", value: "2 yrs" },
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/90">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) =>
      setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandOpen(true);
      }
      if (event.key === "Escape") {
        setIsCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.24),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.2),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.02),_transparent_60%)]" />
        <div
          className="absolute h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
          style={{
            transform: `translate(${cursor.x / 22}px, ${cursor.y / 22}px)`,
          }}
        />
        <div
          className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
          style={{
            transform: `translate(${cursor.x / 30}px, ${cursor.y / 30}px)`,
          }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link
            href="#hero"
            className="text-lg font-semibold tracking-[0.3em] text-slate-100"
          >
            S.G
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setIsCommandOpen(true)}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-white/10"
          >
            <Command size={16} />
            Quick links
          </button>
        </div>
      </header>

      <main
        id="hero"
        className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-20 sm:px-8 lg:px-10"
      >
        <section className="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              <Sparkles size={16} />
              Backend Engineer • Full Stack Builder
            </div>
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building resilient systems and elegant digital experiences.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              I’m Sanchit Gade, a software engineer crafting scalable backend
              platforms, distributed services, and modern web applications with
              a sharp eye for product quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Sanchit_Gade_Developer_Resume.pdf"
                download="Sanchit_Gade_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:scale-[1.02]"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="https://github.com/Sanchit1224"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:bg-white/10"
              >
                <GitBranch size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sanchit-gade-45540a206"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:bg-white/10"
              >
                <Link2 size={16} />
                LinkedIn
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">
                    <CountUp value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-x-8 top-10 h-48 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/8 p-5 shadow-[0_24px_80px_rgba(3,8,25,0.65)] backdrop-blur-2xl">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
                <div>
                  <p className="text-sm text-slate-400">Current Focus</p>
                  <p className="text-base font-medium text-white">
                    Backend systems • Cloud • AI
                  </p>
                </div>
                <div className="rounded-full bg-emerald-500/15 p-2 text-emerald-300">
                  <BadgeCheck size={18} />
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-3">
                <Image
                  src="/profile-new.JPEG"
                  alt="Sanchit Gade"
                  width={750}
                  height={720}
                  priority
                  className="h-auto w-full rounded-[20px]"
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-2 text-sky-300">
                    <BriefcaseBusiness size={16} />
                    <span className="text-sm font-medium">Experience</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">
                    2+ years
                  </p>
                  <p className="text-sm text-slate-400">
                    Across enterprise and product teams
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-2 text-violet-300">
                    <Layers3 size={16} />
                    <span className="text-sm font-medium">Stack</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Java, React, Kafka
                  </p>
                  <p className="text-sm text-slate-400">
                    Cloud-first and product-minded
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-24 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
        >
          <div className="flex animate-[marquee_24s_linear_infinite] gap-8 whitespace-nowrap text-sm font-medium text-slate-300">
            {Array.from({ length: 2 }, () => [
              "Java 17",
              "Spring Boot 3.x",
              "Kafka",
              "React",
              "TypeScript",
              "Microservices",
              "OAuth2",
              "JWT",
              "Docker",
              "GCP",
            ])
              .flat()
              .map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-white/10 px-4 py-2"
                >
                  {item}
                </span>
              ))}
          </div>
        </motion.div>

        <section id="about" className="mb-24 scroll-mt-24">
          <SectionHeading
            eyebrow="About"
            title="Engineered for scale, shaped by curiosity."
            description="I enjoy building reliable backend foundations, designing clean APIs, and connecting them into systems people can trust every day."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <p className="text-lg leading-8 text-slate-300">
                My work sits at the intersection of backend architecture,
                cloud-native delivery, and thoughtful product design. I care
                deeply about making systems simple to evolve, secure by default,
                and fast under load.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Distributed systems",
                  "API design",
                  "Authentication",
                  "Performance tuning",
                  "Cloud-native delivery",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-sm text-sky-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-7"
            >
              <div className="flex items-center gap-2 text-violet-300">
                <Zap size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                  Core strengths
                </span>
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>
                    Designing scalable backend systems with clean domain
                    boundaries and maintainable abstractions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>
                    Building secure APIs with JWT, OAuth2, role-based access,
                    and thoughtful error handling.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>
                    Shipping modern web experiences with React, TypeScript, and
                    a strong product mindset.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="mb-24 scroll-mt-24">
          <SectionHeading
            eyebrow="Experience"
            title="Trusted to build production-grade systems."
            description="A steady progression from modern product teams to enterprise backend delivery."
          />
          <div className="mt-10 space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
                      {item.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {item.company}
                    </h3>
                    <p className="mt-3 text-slate-300">{item.summary}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                    {item.duration}
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border border-white/10 bg-slate-950/60 p-3"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionHeading
            eyebrow="Skills"
            title="A stack shaped for reliability and velocity."
            description="From backend foundations to polished frontends, each layer is chosen with intent."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6"
                >
                  <div className="flex items-center gap-3 text-sky-300">
                    <Icon size={18} />
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mb-24 scroll-mt-24">
          <SectionHeading
            eyebrow="Projects"
            title=""
            description=""
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="rounded-full border border-sky-400/20 bg-sky-400/10 p-2 text-sky-300">
                    <Code2 size={16} />
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {project.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white"
                >
                  View project
                  <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mb-24 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-7"
          >
            <SectionHeading
              eyebrow="Certifications"
              title="Validated by modern cloud and AI leaders."
              description="Continuing to sharpen the engineering toolkit with platform and AI-focused learning."
            />
            <div className="mt-8 space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div>
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="text-sm text-slate-400">Issued {cert.year}</p>
                  </div>
                  <div className="rounded-full bg-sky-400/10 p-2 text-sky-300">
                    <BadgeCheck size={16} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
          >
            <SectionHeading
              eyebrow="Achievements"
              title="A strong foundation with measurable momentum."
              description="The combination of academic distinction and hands-on delivery speaks for itself."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mb-24">
          <SectionHeading
            eyebrow="Services"
            title="Support for ambitious product and engineering teams."
            description="Whether it is a new platform or a critical service uplift, the focus stays on durable engineering and clear outcomes."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 p-2 text-sky-300">
                  <Rocket size={16} />
                </div>
                <p className="text-lg font-semibold text-white">{service}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-800/90 p-8 shadow-[0_24px_90px_rgba(3,8,25,0.6)]"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s build something dependable and memorable.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                  Open for backend engineering roles, full-stack opportunities,
                  and freelance collaborations focused on product impact.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:sanchitgade8@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-white/10"
                  >
                    <Mail size={16} />
                    Email me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanchit-gade-45540a206"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-white/10"
                  >
                    <Link2 size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin size={18} className="text-sky-300" />
                  <span>Pune, India</span>
                </div>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Availability</span>
                    <span className="text-emerald-300">
                      Open for opportunities
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Preferred focus</span>
                    <span>Backend • APIs • Product platforms</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Response time</span>
                    <span>Within 48 hours</span>
                  </div>
                </div>
                <a
                  href="mailto:sanchitgade8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white"
                >
                  <SendHorizonal size={16} />
                  Start a conversation
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050816]/85">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Sanchit Gade. Crafted for modern engineering brands.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sanchit1224"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanchit-gade-45540a206"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sanchitgade8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => setIsCommandOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-sky-400/30 bg-slate-950/85 px-4 py-3 text-sm font-semibold text-sky-200 shadow-[0_0_45px_rgba(59,130,246,0.2)] backdrop-blur"
      >
        <CirclePlay size={16} />
        Quick Jump
      </button>

      <AnimatePresence>
        {isCommandOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="w-full max-w-xl rounded-[28px] border border-white/10 bg-slate-900/95 p-6 shadow-[0_24px_90px_rgba(2,8,23,0.65)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Command Palette
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Jump to anything
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCommandOpen(false)}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300"
                >
                  Esc
                </button>
              </div>
              <div className="mt-6 space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsCommandOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-sky-400/30 hover:bg-white/10"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm text-slate-400">{item.href}</span>
                  </a>
                ))}
                <a
                  href="mailto:sanchitgade8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsCommandOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-sky-400/30 hover:bg-white/10"
                >
                  <span>Contact</span>
                  <span className="text-sm text-slate-400">Open email</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
