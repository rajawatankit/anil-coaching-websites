import {
  Award,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Landmark,
  MapPin,
  Menu,
  Phone,
  Sprout,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

type Course = {
  title: string;
  detail: string;
  icon: React.ElementType;
  accent: string;
};

type Feature = {
  title: string;
  icon: React.ElementType;
};

const courses: Course[] = [
  {
    title: "1st-8th",
    detail: "All Subjects",
    icon: BookOpen,
    accent: "from-leaf to-emerald-600",
  },
  {
    title: "9th-10th",
    detail: "Mathematics",
    icon: Calculator,
    accent: "from-blue-700 to-sky-600",
  },
  {
    title: "11th-12th",
    detail: "Agriculture",
    icon: Sprout,
    accent: "from-crimson to-rose-700",
  },
  {
    title: "MP & CBSE",
    detail: "Board",
    icon: Landmark,
    accent: "from-purple-700 to-violet-600",
  },
  {
    title: "Hindi & English",
    detail: "Medium",
    icon: GraduationCap,
    accent: "from-navy to-blue-800",
  },
];

const features: Feature[] = [
  { title: "Experienced & Qualified Faculty", icon: Award },
  { title: "Regular Tests", icon: CheckCircle2 },
  { title: "Small Batch Size", icon: Users },
  { title: "Personal Attention", icon: Target },
  { title: "Concept Based Teaching", icon: Brain },
  { title: "Result Oriented Approach", icon: Trophy },
  { title: "Strong Foundation", icon: BookOpen },
  { title: "Bright Future", icon: Star },
];

const navItems = ["Home", "Courses", "Features", "About", "Contact"];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-lg ring-2 ring-gold/60">
        <GraduationCap className="h-7 w-7 text-navy" />
      </span>
      <span className="leading-tight">
        <span className="block text-lg font-black tracking-tight text-white sm:text-xl">
          Perfect Coaching
        </span>
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Classes
        </span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 text-white shadow-2xl shadow-navy/20 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-white/80 transition hover:text-gold"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:9977609249"
            className="hidden rounded-full bg-gold px-5 py-3 text-sm font-black text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            Enroll Now
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="absolute -inset-4 rounded-[2rem] bg-gold/25 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-2xl">
        <div className="bg-navy navy-grid p-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold italic text-gold">
                Right Guidance, Bright Future
              </p>
              <h3 className="mt-2 text-3xl font-black uppercase leading-none sm:text-4xl">
                Perfect
                <span className="block text-gold">Coaching</span>
                Classes
              </h3>
            </div>
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-4 border-gold bg-white text-center text-xs font-black uppercase text-navy shadow-glow">
              Admissions
              <span className="block text-2xl text-crimson">Open</span>
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {courses.slice(0, 4).map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3"
              >
                <div
                  className={`mb-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${course.accent} text-white`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xl font-black text-navy">{course.title}</p>
                <p className="font-extrabold uppercase text-slate-700">
                  {course.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-4 mb-4 rounded-2xl bg-navy px-5 py-4 text-center font-black uppercase text-white">
          Hindi & English Medium
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-slate-200 bg-slate-50 p-4 text-center">
          {["Expert Faculty", "Concept Clarity", "Regular Practice"].map(
            (item) => (
              <div key={item}>
                <CheckCircle2 className="mx-auto mb-2 h-6 w-6 text-leaf" />
                <p className="text-xs font-black uppercase text-navy">{item}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pb-20 pt-32 text-white sm:pt-36 lg:pb-28"
    >
      <div className="absolute inset-0 navy-grid opacity-70" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-sm font-bold text-gold backdrop-blur">
            <Star className="h-4 w-4 fill-gold" />
            Discipline Today, Excellence Tomorrow
          </div>
          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            Perfect Coaching Classes
          </h1>
          <p className="mt-5 text-2xl font-extrabold text-gold sm:text-3xl">
            Strong Foundation, Bright Future
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Coaching for 1st-12th students with expert guidance, regular
            practice, concept clarity, and personal attention.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-black text-navy shadow-glow transition hover:-translate-y-1 hover:bg-white"
            >
              Enroll Now
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="tel:9977609249"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="bg-white py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-crimson">
            Courses
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            Complete coaching support from primary to senior secondary.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <article
                key={`${course.title}-${course.detail}`}
                className="card-hover overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift"
              >
                <div
                  className={`h-3 bg-gradient-to-r ${course.accent}`}
                  aria-hidden="true"
                />
                <div className="p-5">
                  <div
                    className={`mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${course.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-navy">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-lg font-extrabold uppercase text-slate-600">
                    {course.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-100 py-20"
    >
      <div className="absolute inset-x-0 top-0 h-20 rounded-b-[50%] bg-white" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">
              Our Features
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Dream it. Believe it. Achieve it.
            </h2>
            <div className="mt-8 grid h-24 w-24 place-items-center rounded-full bg-gold text-navy shadow-glow">
              <Trophy className="h-12 w-12" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="card-hover rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lift"
                >
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-navy">
                    {feature.title}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-leaf">
            Guided By
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            Anil Singh
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Professional guidance for disciplined study habits, strong concepts,
            and confident exam preparation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-black uppercase text-crimson">
                Education
              </p>
              <p className="mt-2 text-2xl font-black text-navy">
                B.Com, B.Tech
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-black uppercase text-crimson">
                Experience
              </p>
              <p className="mt-2 text-2xl font-black text-navy">4 Years</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] bg-navy p-6 text-white shadow-2xl">
          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6">
            <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white text-navy shadow-glow">
              <GraduationCap className="h-16 w-16" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">
                Teacher Profile
              </p>
              <h3 className="mt-2 text-4xl font-black uppercase">
                Anil Singh
              </h3>
              <div className="mt-6 grid gap-3 text-left">
                {["B.Com, B.Tech", "4 Years Experience", "Result Oriented Approach"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-bold text-navy"
                    >
                      <CheckCircle2 className="h-5 w-5 text-leaf" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionCta() {
  return (
    <section className="bg-gold py-16">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-crimson">
            Admissions Open
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            Enroll Now and Build a Better Tomorrow
          </h2>
          <p className="mt-4 text-lg font-bold text-navy/75">
            Join today for focused coaching and disciplined learning.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="tel:9977609249"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-navy px-7 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-crimson"
          >
            <Phone className="h-5 w-5" />
            9977609249
          </a>
          <a
            href="tel:8103829971"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-lg font-black text-navy shadow-xl transition hover:-translate-y-1"
          >
            <Phone className="h-5 w-5" />
            8103829971
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-20">
      <div className="section-shell">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-crimson">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            Visit Perfect Coaching Classes
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="https://maps.google.com/?q=Porsa%20Road%2C%20Gormi"
            className="card-hover rounded-[2rem] bg-white p-7 shadow-lift"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-crimson text-white">
              <MapPin className="h-8 w-8" />
            </div>
            <p className="mt-8 text-sm font-black uppercase text-slate-500">
              Address
            </p>
            <h3 className="mt-2 text-3xl font-black text-navy">
              Porsa Road, Gormi
            </h3>
          </a>
          <a
            href="tel:9977609249"
            className="card-hover rounded-[2rem] bg-navy p-7 text-white shadow-2xl"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold text-navy">
              <Phone className="h-8 w-8" />
            </div>
            <p className="mt-8 text-sm font-black uppercase text-white/60">
              Phone
            </p>
            <h3 className="mt-2 text-3xl font-black">9977609249</h3>
            <p className="mt-2 text-lg font-bold text-white/70">8103829971</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-10 text-white">
      <div className="section-shell flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-black">Perfect Coaching Classes</h2>
          <p className="mt-2 font-bold text-gold">
            Discipline Today, Excellence Tomorrow
          </p>
        </div>
        <div className="space-y-1 text-sm font-bold text-white/75">
          <p>Phone: 9977609249</p>
          <p>Address: Porsa Road, Gormi</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Courses />
      <Features />
      <About />
      <AdmissionCta />
      <Contact />
      <Footer />
    </main>
  );
}
