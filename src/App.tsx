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
  Send,
  Sprout,
  Star,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import anilTeacherPhoto from "./assets/anil-singh-teacher.png";

type EnrollAction = () => void;

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
    title: "1st-10th",
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
    <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white shadow-lg ring-2 ring-gold/60 sm:h-12 sm:w-12">
        <GraduationCap className="h-6 w-6 text-navy sm:h-7 sm:w-7" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block text-base font-black tracking-tight text-white sm:text-xl">
          Perfect Coaching
        </span>
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Classes
        </span>
      </span>
    </a>
  );
}

function Header({ onEnroll }: { onEnroll: EnrollAction }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const openEnroll = () => {
    closeMenu();
    onEnroll();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 text-white shadow-2xl shadow-navy/20 backdrop-blur-xl">
      <nav className="section-shell flex h-[72px] items-center justify-between sm:h-20">
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
          <button
            type="button"
            onClick={onEnroll}
            className="hidden rounded-full bg-gold px-5 py-3 text-sm font-black text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            Enroll Now
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-sidebar"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-[72px] bg-navy/60 backdrop-blur-sm transition-opacity duration-300 sm:top-20 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <aside
        id="mobile-sidebar"
        className={`fixed right-0 top-[72px] h-[calc(100vh-72px)] w-[min(86vw,340px)] border-l border-white/10 bg-navy p-5 shadow-2xl transition-transform duration-300 sm:top-20 sm:h-[calc(100vh-80px)] lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-black text-white transition hover:border-gold hover:text-gold"
              >
                {item}
                <ChevronRight className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-auto grid gap-3">
            <button
              type="button"
              onClick={openEnroll}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-base font-black text-navy shadow-glow"
            >
              Enroll Now
              <ChevronRight className="h-5 w-5" />
            </button>
            <a
              href="tel:9977609249"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-base font-black text-white"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </aside>
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
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-gold bg-white shadow-glow sm:h-32 sm:w-28">
              <img
                src={anilTeacherPhoto}
                alt="Anil Singh, teacher at Perfect Coaching Classes"
                className="h-full w-full object-cover object-[50%_20%]"
              />
              <div className="absolute inset-x-1 bottom-1 rounded-xl bg-navy/90 px-2 py-1 text-center text-[10px] font-black uppercase leading-tight text-gold">
                Admissions Open
              </div>
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

function Hero({ onEnroll }: { onEnroll: EnrollAction }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pb-16 pt-28 text-white sm:pb-20 sm:pt-36 lg:pb-28"
    >
      <div className="absolute inset-0 navy-grid opacity-70" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-xs font-bold text-gold backdrop-blur sm:mb-6 sm:text-sm">
            <Star className="h-4 w-4 fill-gold" />
            <span className="min-w-0">Discipline Today, Excellence Tomorrow</span>
          </div>
          <h1 className="max-w-3xl text-[2.75rem] font-black uppercase leading-[0.96] tracking-tight sm:text-6xl sm:leading-[0.92] lg:text-7xl">
            Perfect Coaching Classes
          </h1>
          <p className="mt-5 text-[1.65rem] font-extrabold leading-tight text-gold sm:text-3xl">
            Strong Foundation, Bright Future
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Coaching for 1st-12th students with expert guidance, regular
            practice, concept clarity, and personal attention.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onEnroll}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-black text-navy shadow-glow transition hover:-translate-y-1 hover:bg-white sm:w-auto"
            >
              Enroll Now
              <ChevronRight className="h-5 w-5" />
            </button>
            <a
              href="tel:9977609249"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:text-gold sm:w-auto"
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
                className="group relative min-h-[230px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-[0_18px_45px_rgba(6,26,54,0.10)] transition duration-300 hover:-translate-y-2 hover:border-gold/70 hover:shadow-[0_28px_65px_rgba(6,26,54,0.18)]"
              >
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${course.accent} opacity-[0.12] blur-xl transition duration-300 group-hover:opacity-25`}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${course.accent} text-white shadow-[0_16px_35px_rgba(6,26,54,0.20)] ring-4 ring-white`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                      Course
                    </span>
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="text-2xl font-black leading-tight text-navy">
                    {course.title}
                    </h3>
                    <p className="mt-2 text-sm font-black uppercase tracking-[0.08em] text-slate-500">
                      {course.detail}
                    </p>
                  </div>
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
          <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
            <div className="relative aspect-[4/5] bg-white">
              <img
                src={anilTeacherPhoto}
                alt="Anil Singh professional teacher portrait"
                className="h-full w-full object-cover object-[50%_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-6 pt-20">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">
                  Teacher Profile
                </p>
                <h3 className="mt-2 text-4xl font-black uppercase">
                  Anil Singh
                </h3>
              </div>
            </div>
            <div className="p-6">
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

function AdmissionCta({ onEnroll }: { onEnroll: EnrollAction }) {
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
          <button
            type="button"
            onClick={onEnroll}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-crimson px-7 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-navy"
          >
            <Send className="h-5 w-5" />
            Admission Form
          </button>
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

function EnrollmentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const studentClass = String(formData.get("class") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const enquiry = [
      "Hello Perfect Coaching Classes,",
      "I want to enroll a student.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Class/Course: ${studentClass}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/919977609249?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer",
    );
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-navy/70 px-4 py-6 backdrop-blur-md">
      <button
        type="button"
        aria-label="Close enrollment form"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white text-navy shadow-2xl">
        <div className="bg-navy navy-grid p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">
                Admission Enquiry
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
                Enroll Now
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close enrollment form"
              onClick={onClose}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 p-6">
          <label className="grid gap-2">
            <span className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
              Student Name
            </span>
            <input
              name="name"
              required
              placeholder="Enter student name"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition focus:border-gold focus:bg-white"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                Phone Number
              </span>
              <input
                name="phone"
                required
                inputMode="tel"
                pattern="[0-9+\-\s]{8,15}"
                placeholder="9977609249"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition focus:border-gold focus:bg-white"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                Class/Course
              </span>
              <select
                name="class"
                required
                defaultValue=""
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition focus:border-gold focus:bg-white"
              >
                <option value="" disabled>
                  Select course
                </option>
                {courses.map((course) => (
                  <option
                    key={`${course.title}-modal`}
                    value={`${course.title} ${course.detail}`}
                  >
                    {course.title} - {course.detail}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
              Message
            </span>
            <textarea
              name="message"
              rows={3}
              placeholder="Preferred timing or any question"
              className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold outline-none transition focus:border-gold focus:bg-white"
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-black text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-navy hover:text-white"
            >
              <Send className="h-5 w-5" />
              Send Enquiry
            </button>
            <a
              href="tel:9977609249"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-4 font-black text-navy transition hover:border-navy hover:bg-slate-50"
            >
              <Phone className="h-5 w-5" />
              Call
            </a>
          </div>
        </form>
      </div>
    </div>
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
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <main>
      <Header onEnroll={() => setIsEnrollOpen(true)} />
      <Hero onEnroll={() => setIsEnrollOpen(true)} />
      <Courses />
      <Features />
      <About />
      <AdmissionCta onEnroll={() => setIsEnrollOpen(true)} />
      <Contact />
      <Footer />
      <EnrollmentModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
      />
    </main>
  );
}
