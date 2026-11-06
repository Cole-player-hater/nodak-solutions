"use client";
import skills from "@/constants/skills.json";
import { useEffect, useState } from "react";
import {
  LuBrain,
  LuCode,
  LuCodeXml,
  LuGithub,
  LuLayers,
  LuLinkedin,
  LuMail,
  LuMenu,
  LuX,
  LuZap,
} from "react-icons/lu";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [barrelRoll, setBarrelRoll] = useState(false);

  useEffect(() => {
    const konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let progress = 0;
    const handleKey = (e: KeyboardEvent) => {
      progress = e.key === konami[progress] ? progress + 1 : 0;
      if (progress === konami.length) {
        progress = 0;
        setBarrelRoll(true);
        setTimeout(() => setBarrelRoll(false), 1000);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className={`bg-slate-950 text-slate-100 min-h-screen ${barrelRoll ? "animate-[barrel-roll_1s_ease-in-out]" : ""}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <LuCodeXml
                size={32}
                className="text-cyan-400 animate-[spin_3s_linear_infinite] motion-reduce:animate-none"
              />
              <span className="text-2xl font-bold">NoDak Solutions</span>
            </div>

            {/* Desktop Menu - Always visible on md and up */}
            <div className="hidden md:block">
              <div className="flex gap-8 items-center">
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              className="block md:hidden text-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a
                href="#home"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      >
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <span className="text-cyan-400 text-sm font-mono border border-cyan-400/30 rounded-full px-4 py-2 bg-cyan-400/5">
              Wyatt @ NoDak Solutions
            </span>
          </div>
         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="wild-hero-top block">Finding Big Girls</span>
  <span className="wild-hero-bottom block">Making Them Cry</span>
</h1>

<style>{`
  @media (prefers-reduced-motion: no-preference) {
    .wild-hero-top {
      animation: wild-hero-slam 900ms both;
    }

    .wild-hero-bottom {
      animation: wild-hero-glitch 2.4s 250ms infinite both;
    }
  }

  .wild-hero-bottom {
    background: linear-gradient(90deg, #34d399, #22d3ee, #a855f7, #fb7185);
    background-size: 250% 100%;
    background-clip: text;
    color: transparent;
  }

  @keyframes wild-hero-slam {
    0%   { opacity: 0; transform: translateY(-1em) rotate(-12deg) scale(.6); }
    55%  { opacity: 1; transform: translateY(.08em) rotate(4deg) scale(1.12, .8); }
    75%  { transform: translateY(-.06em) rotate(-2deg) scale(.96, 1.1); }
    100% { transform: none; }
  }

  @keyframes wild-hero-glitch {
    0%, 100% { transform: none; background-position: 0% 50%; }
    55%      { transform: none; background-position: 100% 50%; }
    60%      { transform: translateX(-.1em) skewX(-18deg); filter: drop-shadow(5px 0 #f472b6); }
    64%      { transform: translateX(.1em) skewX(16deg); filter: drop-shadow(-5px 0 #22d3ee); }
    69%      { transform: translateY(-.06em) skewX(-8deg); }
    75%      { transform: none; }
  }
`}</style>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
           I do things to big girls
          </p>
          <div className="overflow-hidden whitespace-nowrap mb-8 font-mono text-yellow-300">
            <div className="animate-[marquee_10s_linear_infinite] motion-reduce:animate-none">
              ★ WELCOME TO MY HOMEPAGE ★ BEST VIEWED IN NETSCAPE NAVIGATOR ★
              SIGN MY GUESTBOOK ★
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#services"
              className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-slate-900"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What I Build</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-[blink_1s_step-end_infinite] motion-reduce:animate-none">
            From 300 to 500 i tackle every problem at hand
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-400/50 transition-all">
              <LuBrain className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">AI Integration</h3>
              <p className="text-slate-400 mb-4">
                Intelligent solutions powered by AI to automate tasks and
                enhance user experiences
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>- AI chatbots & assistants</li>
                <li>- Content generation</li>
                <li>- Process automation</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-400/50 transition-all">
              <LuCode className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Business Websites</h3>
              <p className="text-slate-400 mb-4">
                Professional, responsive websites that establish your online
                presence and attract customers
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>- Local business sites</li>
                <li>- Landing pages</li>
                <li>- Portfolio sites</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-400/50 transition-all">
              <LuZap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Web Applications</h3>
              <p className="text-slate-400 mb-4">
                Custom applications with user authentication, databases, and
                interactive features
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>- Dashboards & admin panels</li>
                <li>- Booking systems</li>
                <li>- Customer portals</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-purple-400/50 transition-all">
              <LuLayers className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
              <p className="text-slate-400 mb-4">
                Online stores with payment processing, inventory management, and
                order tracking
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>- Product catalogs</li>
                <li>- Shopping carts</li>
                <li>- Payment integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About NoDak Solutions</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Hi, I&apos;m Wyatt. I founded NoDak Solutions to deliver
                high-quality software development services with a focus on
                modern technologies and clean, maintainable code.
              </p>
              <p className="text-slate-400 mb-4 leading-relaxed">
                With expertise across the full development stack, I help
                businesses and individuals bring their ideas to life through
                custom web applications, performance optimization, and technical
                consulting.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether you need a complete application built from scratch or
                want to improve an existing system, I&apos;m here to help create
                solutions that are both technically sound and user-friendly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillSet, idx) => (
                  <div key={idx}>
                    <h4 className="text-cyan-400 font-semibold mb-3">
                      {skillSet.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.items.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Have a project in mind or want to discuss how we can collaborate?
            Get in touch.
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <a
              href="mailto:wyatt@nodaksolutions.com"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all"
            >
              <LuMail size={20} />
              wyatt@nodaksolutions.com
            </a>
            <a
              href="https://github.com/wyatt-nodak-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all"
            >
              <LuGithub size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/wyatt-cuypers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all"
            >
              <LuLinkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">
              © 2025 NoDak Solutions. Building the future, one line of code at
              a time.
            </p>
            <p className="mt-4 font-mono text-xs text-lime-400">
              You are visitor #
              <span className="bg-black px-1 tracking-widest">000069</span>
              <span className="animate-[blink_1s_step-end_infinite] motion-reduce:animate-none">
                {" "}🚧 UNDER CONSTRUCTION 🚧
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
