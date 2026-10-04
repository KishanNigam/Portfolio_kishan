import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleDot,
  Cloud,
  Code2,
  Cpu,
  Download,
  GitBranch,
  Globe,
  Mail,
  Phone,
  ServerCog,
  TerminalSquare,
  Workflow,
} from 'lucide-react'
import {
  experiences,
  githubHighlights,
  journeyStages,
  metrics,
  navItems,
  profile,
  projectCases,
  skillGroups,
  terminalLines,
} from './data/profile'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
    },
  }),
}

function App() {
  const githubLink = profile.githubUrl || '#'
  const linkedinLink = profile.linkedinUrl || '#'
  const primaryAction = { href: '#projects', label: 'View My Projects' }
  const secondaryAction = { href: githubLink, label: 'View GitHub' }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="bg-grid" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-base text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
              K
            </span>
            <span className="hidden sm:inline">Kishan Nigam</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="hidden rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20 sm:inline-flex"
            >
              Download Resume
            </a>
            <button type="button" className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 md:hidden" aria-label="Open navigation menu">
              <span className="sr-only">Open menu</span>
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-slate-100" />
                <span className="block h-0.5 w-5 rounded-full bg-slate-100" />
                <span className="block h-0.5 w-5 rounded-full bg-slate-100" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.18)]">
              <CircleDot className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
              Available for DevOps / Cloud Engineering opportunities
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Infrastructure • Automation • Reliability</p>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                {profile.name}
              </h1>
              <div className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-200">
                {profile.title}
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                {profile.headline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={primaryAction.href}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryAction.href}
                target={secondaryAction.href.startsWith('http') ? '_blank' : undefined}
                rel={secondaryAction.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-slate-800"
              >
                <GitBranch className="h-4 w-4" />
                {secondaryAction.label}
              </a>
              <a
                href={linkedinLink}
                target={linkedinLink.startsWith('http') ? '_blank' : undefined}
                rel={linkedinLink.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/50 hover:bg-slate-800"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <a href={profile.resumeUrl} download className="inline-flex items-center gap-2 text-cyan-200 hover:text-cyan-100">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <span className="text-slate-500">•</span>
              <span>{profile.location}</span>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="relative">
            <div className="pipeline-panel">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                  <TerminalSquare className="h-4 w-4 text-cyan-300" />
                  delivery.flow
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-xs text-emerald-300">online</span>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="pipeline-row">
                  <span>Developer</span>
                  <span className="pipeline-arrow">→</span>
                  <span>Git</span>
                  <span className="pipeline-arrow">→</span>
                  <span>CI/CD</span>
                  <span className="pipeline-arrow">→</span>
                  <span>Build</span>
                </div>
                <div className="pipeline-row">
                  <span>Docker</span>
                  <span className="pipeline-arrow">→</span>
                  <span>Registry</span>
                  <span className="pipeline-arrow">→</span>
                  <span>AWS</span>
                  <span className="pipeline-arrow">→</span>
                  <span>Production</span>
                </div>

                <div className="mt-8 space-y-3 rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-4 font-mono text-sm text-cyan-100">
                  {terminalLines.map((line, index) => (
                    <div key={line + index} className="terminal-line">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">About</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Building resilient systems from production support to automation.</h2>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={1} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_0_50px_rgba(14,116,144,0.12)] backdrop-blur-sm">
              <p className="text-lg leading-8 text-slate-300">
                {profile.summary} I have worked across production support, infrastructure operations, cloud activities, and deployment automation, helping enterprise environments remain stable while improving delivery efficiency through scripting, monitoring, and process automation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Production exposure</p>
                  <p className="mt-2 text-lg font-semibold text-white">L1 & L2 Handling</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Automation</p>
                  <p className="mt-2 text-lg font-semibold text-white">8+ solutions delivered</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={2} className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-7">
              <div className="flex items-center gap-3 text-cyan-300">
                <Workflow className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.22em]">Engineering focus</span>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><Code2 className="mt-1 h-4 w-4 text-cyan-300" /> CI/CD pipeline support and deployment automation for enterprise applications.</li>
                <li className="flex gap-3"><Cloud className="mt-1 h-4 w-4 text-cyan-300" /> AWS cloud operations across EC2, IAM, and S3.</li>
                <li className="flex gap-3"><ServerCog className="mt-1 h-4 w-4 text-cyan-300" /> Production troubleshooting, incident response, and operational reliability.</li>
                <li className="flex gap-3"><Cpu className="mt-1 h-4 w-4 text-cyan-300" /> Performance and automation improvements using Python, Bash, and SQL-based workflows.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Experience</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Career timeline</h2>
          </motion.div>

          <div className="relative mt-12">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-sky-500 to-transparent md:left-1/2" aria-hidden="true" />

            <div className="space-y-8">
              {experiences.map((job, index) => (
                <motion.article
                  key={`${job.title}-${job.period}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={index}
                  className="relative grid gap-6 md:grid-cols-2 md:items-start"
                >
                  <div className={index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:col-start-2 md:pl-8'}>
                    <div className="mb-4 flex items-center gap-3 md:justify-end">
                      <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                      <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{job.period}</span>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_30px_rgba(15,23,42,0.45)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{job.type}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{job.title}</h3>
                      <p className="mt-2 text-lg font-medium text-slate-200">{job.company}</p>
                      <p className="mt-1 text-sm text-slate-400">{job.location}</p>

                      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                        {job.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 flex-none" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Skills</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">DevOps skill ecosystem</h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2.5 py-1.5 text-xs font-medium text-cyan-100">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Projects</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Engineering work and delivery patterns</h2>
          </motion.div>

          <div className="mt-10 grid gap-8 xl:grid-cols-3">
            {projectCases.map((project, index) => (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index}
                className="group rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_30px_rgba(15,23,42,0.55)] transition hover:border-cyan-400/40 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Case study</p>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                    Live systems
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <div>
                    <p className="font-semibold text-cyan-200">Problem</p>
                    <p className="mt-1 leading-6">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-200">Architecture</p>
                    <ul className="mt-2 space-y-2">
                      {project.architecture.map((step) => (
                        <li key={step} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" /> <span>{step}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="font-semibold text-cyan-200">Outcomes</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" /> <span>{outcome}</span></li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">DevOps Journey</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">From production operations to cloud delivery</h2>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={stage}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-xs font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-slate-200">{stage}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="github" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_0_35px_rgba(15,23,42,0.55)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">GitHub</p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Repository and delivery profile</h2>
              </div>

              <a
                href={githubLink}
                target={githubLink.startsWith('http') ? '_blank' : undefined}
                rel={githubLink.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
              >
                <GitBranch className="h-4 w-4" />
                Explore My GitHub
              </a>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Profile</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-white">{profile.name}</p>
                    <p className="text-sm text-slate-400">{profile.title}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-slate-300">Public repository activity and profile URL were not included in the provided sources, so the profile is intentionally left configurable and ready to be filled in once the exact GitHub handle is provided.</p>
              </div>

              <div className="space-y-4">
                {githubHighlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-cyan-300">
              <Workflow className="h-4 w-4" />
              Deployment pipeline
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300 md:flex-row md:justify-center md:gap-2">
              <div className="pipeline-node">Developer</div>
              <span className="hidden text-cyan-300 md:inline">↓</span>
              <div className="pipeline-node">GitHub</div>
              <span className="hidden text-cyan-300 md:inline">↓</span>
              <div className="pipeline-node">CI/CD</div>
              <span className="hidden text-cyan-300 md:inline">↓</span>
              <div className="pipeline-node">Docker</div>
              <span className="hidden text-cyan-300 md:inline">↓</span>
              <div className="pipeline-node">Registry</div>
              <span className="hidden text-cyan-300 md:inline">↓</span>
              <div className="pipeline-node">AWS</div>
              <span className="hidden text-cyan-300 md:inline">↓</span>
              <div className="pipeline-node">Production</div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Metrics</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Impact across production and automation</h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
              >
                <p className="text-4xl font-black text-cyan-300">{metric.value}</p>
                <p className="mt-3 text-lg font-semibold text-white">{metric.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Resume</p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Professional profile snapshot</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  DevOps Engineer with a background in production support, enterprise application reliability, AWS cloud operations, Docker-based deployment workflows, and process automation across BFSI environments.
                </p>
              </div>
              <a href={profile.resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 pb-28 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_0_35px_rgba(15,23,42,0.55)]">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Let’s build something reliable.</h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/5">
                <Mail className="h-5 w-5 text-cyan-300" />
                <span>{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/5">
                <Phone className="h-5 w-5 text-cyan-300" />
                <span>{profile.phone}</span>
              </a>
              <a href={linkedinLink} target={linkedinLink.startsWith('http') ? '_blank' : undefined} rel={linkedinLink.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/5">
                <BriefcaseBusiness className="h-5 w-5 text-cyan-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
