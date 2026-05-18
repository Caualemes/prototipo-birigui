import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  CalendarDays,
  Route,
  Heart,
  Star,
  Store,
  Building2,
  Landmark,
  Ticket,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  CloudSun,
  Sun,
  Cloud,
  Camera,
  HelpCircle,
  FileText,
  Users,
  BarChart3,
  Settings,
  Palette,
  ShieldCheck,
  LogIn,
  Plus,
  SlidersHorizontal,
  CheckCircle2,
  MapPinned,
  Navigation,
  Image as ImageIcon,
  Sparkles,
  ArrowUpRight,
  Globe2,
  Map,
  ClipboardList,
  Newspaper,
  Upload,
  Eye,
  Layers3,
  BadgeCheck,
  Building,
  PanelLeft,
  Clock,
} from "lucide-react";

const BRAND = {
  city: "Birigui",
  subtitle: "Capital do Calçado Infantil",
  primary: "#6F2DBD",
  ink: "#151322",
  soft: "#F8F7FB",
  line: "#E9E6F0",
  accent: "#C79A3B",
  support: "#16875B",
  logo: "https://sinbi.org.br/wp-content/uploads/revslider/clean-landing-page-1/SINBI-Selo-de-Procedencia-600x425.png",
  banner: "https://www.ifsp.edu.br/images/slider/cache/741b47586c87a7daf15847acd712f356/Foto2.jpg",
};

const NAV = [
  { label: "Início", page: "home" },
  { label: "Empresas", page: "empresas" },
  { label: "Eventos", page: "eventos" },
  { label: "Explorar", page: "explorar" },
  { label: "IG", page: "ig" },
  { label: "Roteiros", page: "roteiros" },
  { label: "Contato", page: "contato" },
];

const HOME_SECTIONS = [
  { id: "inicio", label: "Início" },
  { id: "empresas-home", label: "Empresas" },
  { id: "ig-home", label: "IG" },
  { id: "explorar-home", label: "Explorar" },
  { id: "eventos-home", label: "Eventos" },
  { id: "clima-home", label: "Clima" },
  { id: "roteiros-home", label: "Roteiros" },
  { id: "galeria-home", label: "Galeria" },
  { id: "faq-home", label: "FAQ" },
];

const companies = [
  {
    name: "Pequenos Passos Calçados",
    type: "Loja de fábrica",
    badge: "Selo IG",
    area: "Centro • Birigui",
    rating: "4,9",
    img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fábrica Primeiros Passos",
    type: "Fábrica aberta à visitação",
    badge: "Destaque",
    area: "Distrito industrial",
    rating: "4,8",
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mundo Kids Calçados",
    type: "Varejo especializado",
    badge: "Aberto",
    area: "Av. principal",
    rating: "4,7",
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Passo Leve Kids",
    type: "Atacado e varejo",
    badge: "Novo",
    area: "Jardim Europa",
    rating: "4,6",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Polo Infantil Birigui",
    type: "Centro comercial",
    badge: "Roteiro",
    area: "Zona sul",
    rating: "4,8",
    img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Criativa Calçados",
    type: "Marca participante",
    badge: "Selo IG",
    area: "Centro",
    rating: "4,9",
    img: "https://images.unsplash.com/photo-1528701800489-20be3c55d75d?auto=format&fit=crop&w=900&q=80",
  },
];

const events = [
  {
    date: "18 MAI",
    category: "Compras",
    title: "Semana do Calçado Infantil",
    text: "Campanha com lojas, vitrines e condições especiais para visitantes.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "24 MAI",
    category: "Negócios",
    title: "Feira de Empresas Locais",
    text: "Encontro entre marcas, produtores, lojistas e visitantes da região.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "02 JUN",
    category: "Cultura",
    title: "Passeio Cultural Guiado",
    text: "Roteiro leve por pontos urbanos e histórias ligadas ao desenvolvimento local.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "12 JUN",
    category: "Gastronomia",
    title: "Noite especial no centro",
    text: "Restaurantes e cafeterias com menus especiais para quem visita a cidade.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
];

const attractions = [
  {
    name: "Parque do Povo",
    type: "Lazer e família",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Centro Comercial",
    type: "Compras e vitrines",
    img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Circuito da Indústria",
    type: "Identidade produtiva",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Praça central",
    type: "Ponto urbano",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Galeria de vitrines",
    type: "Compras",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Espaço de eventos",
    type: "Eventos e feiras",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
];

const routes = [
  { title: "1 dia em Birigui", text: "Compras, almoço local, atração urbana e parada para fotos.", time: "6h", stops: "5 paradas" },
  { title: "Roteiro de compras", text: "Lojas de fábrica, empresas participantes e pontos próximos.", time: "4h", stops: "4 paradas" },
  { title: "Birigui em família", text: "Passeio leve com lojas, parque, gastronomia e eventos.", time: "5h", stops: "6 paradas" },
  { title: "História do calçado", text: "Uma experiência para entender a reputação produtiva da cidade.", time: "3h", stops: "4 paradas" },
];

const weather = [
  { day: "Hoje", temp: "28°", desc: "Sol entre nuvens", icon: CloudSun },
  { day: "Amanhã", temp: "29°", desc: "Ensolarado", icon: Sun },
  { day: "Sexta", temp: "27°", desc: "Parcialmente nublado", icon: Cloud },
  { day: "Sábado", temp: "30°", desc: "Bom para passeio", icon: Sun },
];

const gallery = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
];

const adminStats = [
  { label: "Empresas", value: "342", icon: Building2 },
  { label: "Eventos ativos", value: "27", icon: CalendarDays },
  { label: "Pendências", value: "16", icon: FileText },
  { label: "Atrações", value: "39", icon: Landmark },
];

const adminModules = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "territorios", label: "Territórios", icon: Map },
  { id: "ig", label: "Indicação Geográfica", icon: BadgeCheck },
  { id: "empresas", label: "Empresas", icon: Building2 },
  { id: "eventos", label: "Eventos", icon: CalendarDays },
  { id: "atracoes", label: "Atrações", icon: Landmark },
  { id: "roteiros", label: "Roteiros", icon: Route },
  { id: "galeria", label: "Galeria", icon: ImageIcon },
  { id: "documentos", label: "Documentos", icon: FileText },
  { id: "noticias", label: "Notícias", icon: Newspaper },
  { id: "usuarios", label: "Usuários", icon: Users },
  { id: "aparencia", label: "Aparência", icon: Palette },
  { id: "config", label: "Configurações", icon: Settings },
];

function Dots({ count = 4, active = 0, vertical = false }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${vertical ? "flex-col" : ""}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`block rounded-full transition-all ${
            vertical ? (i === active ? "h-7 w-2" : "h-2 w-2") : i === active ? "h-2 w-6" : "h-2 w-2"
          } ${i === active ? "bg-purple-600" : "bg-slate-300"}`}
        />
      ))}
    </div>
  );
}

function SideCarouselArrows({ light = false, onPrev, onNext }) {
  const base = light
    ? "bg-purple-600 text-white ring-1 ring-purple-500 hover:bg-purple-700"
    : "bg-purple-600 text-white ring-1 ring-purple-600 hover:bg-[#151322] hover:ring-[#151322]";

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Anterior"
        className={`absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition md:flex lg:h-11 lg:w-11 ${base}`}
      >
        <ChevronLeft size={19} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Próximo"
        className={`absolute right-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full transition md:flex lg:h-11 lg:w-11 ${base}`}
      >
        <ChevronRight size={19} />
      </button>
    </>
  );
}

function CarouselControls({ count = 4, active = 0, onChange }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          type="button"
          key={i}
          onClick={() => onChange?.(i)}
          aria-label={`Página ${i + 1}`}
          className={`block rounded-full transition-all ${i === active ? "h-2 w-6 bg-purple-600" : "h-2 w-2 bg-slate-300 hover:bg-purple-300"}`}
        />
      ))}
    </div>
  );
}

function FloatingPageDots({ sections = HOME_SECTIONS, active = 0, onSelect }) {
  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col items-center gap-2.5">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSelect?.(index)}
            title={section.label}
            aria-label={`Ir para ${section.label}`}
            className={`block rounded-full transition-all duration-300 ${
              index === active
                ? "h-8 w-2.5 bg-purple-600"
                : "h-2.5 w-2.5 bg-slate-400/80 ring-2 ring-white/80 hover:bg-purple-400 hover:ring-purple-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-purple-600">{children}</p>;
}

function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`mb-8 max-w-3xl ${align === "left" ? "text-left" : "mx-auto text-center"}`}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#151322] md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base font-normal leading-7 text-slate-600 md:text-lg">{text}</p>}
    </div>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ui = {
  container: "mx-auto max-w-7xl px-4 md:px-6",
  section: "py-14 md:py-16",
  card: "rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/50",
  mutedCard: "rounded-lg border border-slate-200 bg-[#F8F7FB] shadow-sm shadow-slate-200/50",
  input: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-300 focus:ring-4 focus:ring-purple-100",
  badge: "inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600",
};

function Button({ children, onClick, variant = "default", size = "md", className = "", type = "button" }) {
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    dark: "bg-[#151322] text-white hover:bg-purple-700",
    outline: "border border-slate-200 bg-white text-[#151322] hover:border-purple-200 hover:text-purple-700",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-[#151322]",
    secondary: "bg-[#F8F7FB] text-[#151322] hover:bg-purple-50",
    light: "bg-white text-purple-700 hover:bg-purple-50",
  };

  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}

function Badge({ children, className = "", tone = "default" }) {
  const tones = {
    default: "border-slate-200 bg-white text-slate-600",
    purple: "border-purple-100 bg-purple-50 text-purple-700",
    green: "border-emerald-100 bg-emerald-50 text-[#16875B]",
    gold: "border-amber-100 bg-amber-50 text-[#9A6B11]",
    dark: "border-white/20 bg-white/10 text-white",
  };
  return <span className={cn("inline-flex items-center rounded-md border px-3 py-1 text-xs font-medium", tones[tone], className)}>{children}</span>;
}

function Card({ children, className = "", as: Tag = "div" }) {
  return <Tag className={cn(ui.card, className)}>{children}</Tag>;
}

function FadeInSection({ children, id, className = "" }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SearchBar({ placeholder = "Buscar", buttonLabel = "Buscar", dark = false, className = "" }) {
  return (
    <div
      className={cn(
        "group flex w-full max-w-xl flex-col items-stretch gap-2 rounded-lg border p-2 shadow-sm transition focus-within:ring-4 sm:flex-row sm:items-center sm:gap-3",
        dark
          ? "border-white/18 bg-white/10 text-white shadow-black/10 backdrop-blur-md focus-within:border-purple-300 focus-within:bg-white/14 focus-within:ring-purple-500/20"
          : "border-slate-200 bg-white text-[#151322] shadow-slate-200/60 focus-within:border-purple-300 focus-within:ring-purple-100",
        className
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition",
          dark
            ? "bg-white/10 text-white/78 ring-1 ring-white/10 group-focus-within:bg-purple-600 group-focus-within:text-white group-focus-within:ring-purple-400"
            : "bg-purple-50 text-purple-700 group-focus-within:bg-purple-600 group-focus-within:text-white"
        )}
      >
        <Search size={19} />
      </div>
      <input
        className={cn(
          "min-w-0 flex-1 bg-transparent px-1 text-sm font-medium outline-none placeholder:font-normal",
          dark ? "text-white placeholder:text-white/48" : "text-[#151322] placeholder:text-slate-400"
        )}
        placeholder={placeholder}
      />
      <button
        className={cn(
          "rounded-md px-4 py-2 text-sm font-semibold transition sm:shrink-0",
          dark
            ? "border border-white/18 bg-white/10 text-white hover:border-purple-300 hover:bg-purple-600"
            : "bg-[#151322] text-white hover:bg-purple-700"
        )}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

function MoreButton({ onClick, light = false }) {
  const color = light
    ? "text-white/78 hover:text-white"
    : "text-slate-500 hover:text-purple-700";

  return (
    <button
      onClick={onClick}
      className={`group inline-flex w-fit items-center gap-2 text-sm font-semibold transition ${color}`}
    >
      <span>Ver mais</span>
      <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
    </button>
  );
}

function Header({ page, setPage, setView }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const isOverDarkHero = true;
  const textColor = "text-white";
  const mutedTextColor = "text-white/70";

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 28);

      if (currentY < 20) {
        setVisible(true);
      } else if (currentY > lastY + 8) {
        setVisible(false);
        setOpen(false);
      } else if (currentY < lastY - 6) {
        setVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "border-b border-white/10 bg-[#151322]/72 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
          <img src={BRAND.logo} alt="Selo de Procedência Birigui" className="h-16 w-16 object-contain drop-shadow-sm" />
          <div>
            <p className={`text-xl font-semibold leading-none ${textColor}`}>Birigui</p>
            <p className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${mutedTextColor}`}>Capital do Calçado Infantil</p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active = page === item.page;
            return (
              <button
                key={item.page}
                onClick={() => setPage(item.page)}
                className={`relative py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  active ? "text-purple-300" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-full bg-purple-300" />}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-md p-3 text-white/80 transition hover:bg-white/10 hover:text-white">
            <Search size={18} />
          </button>
          <button
            onClick={() => setView("admin")}
            className="rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:border-purple-300 hover:bg-purple-600 hover:text-white"
          >
            Entrar
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-md border border-white/25 p-3 text-white lg:hidden">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-lg border border-white/15 bg-[#151322]/88 p-4 shadow-xl backdrop-blur lg:hidden">
          <div className="grid gap-2">
            {NAV.map((item) => {
              const active = page === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => { setPage(item.page); setOpen(false); }}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium ${
                    active ? "bg-purple-600 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button onClick={() => setView("admin")} className="rounded-lg border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur">Entrar</button>
          </div>
        </div>
      )}
    </header>
  );
}

function PageHero({ eyebrow, title, text, image, children }) {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#151322]">
      <img src={image} className="absolute inset-0 h-full w-full object-cover opacity-62" alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151322]/95 via-[#151322]/72 to-[#151322]/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#151322]/62 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-4 pt-32 pb-16 md:px-6 md:pt-36">
        <div className="max-w-3xl">
          <Badge tone="dark" className="mb-6">{eyebrow}</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">{text}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

const CHILD_SHOES_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
  <rect width="1200" height="900" fill="#F8F7FB"/>
  <circle cx="245" cy="180" r="120" fill="#EDE7F6"/>
  <circle cx="965" cy="650" r="150" fill="#FFF3D2"/>
  <circle cx="930" cy="170" r="90" fill="#E9F6FF"/>
  <g transform="translate(120 220)">
    <path d="M120 375 C205 295, 330 282, 500 315 C610 337, 710 372, 830 395 C897 408, 948 430, 958 476 C969 524, 930 560, 850 566 L231 598 C144 602, 76 580, 49 535 C22 488, 49 440, 120 375Z" fill="#2DD4BF"/>
    <path d="M72 505 C130 550, 226 560, 360 548 L850 512 C918 507, 951 494, 958 476 C969 524, 930 560, 850 566 L231 598 C144 602, 76 580, 49 535 C40 520, 36 505, 40 489 C47 493, 58 499, 72 505Z" fill="#14B8A6"/>
    <path d="M184 354 C238 278, 343 232, 468 238 C540 242, 578 268, 604 304 C510 295, 399 286, 291 309 C246 319, 210 334, 184 354Z" fill="#A855F7"/>
    <path d="M227 357 C287 332, 381 320, 500 330" fill="none" stroke="#FFFFFF" stroke-width="22" stroke-linecap="round"/>
    <path d="M290 410 C360 385, 465 377, 585 390" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" opacity=".9"/>
    <path d="M659 347 C715 343, 774 349, 820 369" fill="none" stroke="#FBBF24" stroke-width="28" stroke-linecap="round"/>
    <circle cx="682" cy="389" r="18" fill="#FFFFFF"/>
    <circle cx="750" cy="397" r="18" fill="#FFFFFF"/>
    <path d="M190 594 L845 562" stroke="#111827" stroke-width="22" stroke-linecap="round" opacity=".82"/>
  </g>
  <g transform="translate(250 380) rotate(-8)">
    <path d="M90 265 C160 205, 250 196, 384 224 C474 243, 575 275, 680 294 C740 305, 779 323, 788 361 C797 402, 765 433, 700 439 L185 466 C111 470, 56 451, 35 416 C12 378, 32 319, 90 265Z" fill="#F472B6"/>
    <path d="M55 390 C112 421, 190 430, 303 421 L700 394 C752 390, 780 378, 788 361 C797 402, 765 433, 700 439 L185 466 C111 470, 56 451, 35 416 C29 405, 26 393, 27 381 C35 385, 44 388, 55 390Z" fill="#EC4899"/>
    <path d="M136 245 C181 183, 270 145, 372 151 C433 155, 467 177, 489 210 C404 204, 310 196, 220 213 C181 221, 152 232, 136 245Z" fill="#FDE68A"/>
    <path d="M171 254 C224 235, 305 229, 410 239" fill="none" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>
    <path d="M232 303 C292 284, 380 280, 481 292" fill="none" stroke="#FFFFFF" stroke-width="13" stroke-linecap="round" opacity=".9"/>
    <circle cx="573" cy="295" r="15" fill="#FFFFFF"/>
    <circle cx="632" cy="303" r="15" fill="#FFFFFF"/>
    <path d="M158 461 L695 437" stroke="#111827" stroke-width="18" stroke-linecap="round" opacity=".82"/>
  </g>
  <g opacity=".9">
    <circle cx="158" cy="690" r="16" fill="#A855F7"/>
    <circle cx="1030" cy="315" r="13" fill="#14B8A6"/>
    <circle cx="795" cy="755" r="10" fill="#F59E0B"/>
    <rect x="910" y="250" width="34" height="34" rx="10" fill="#A855F7" transform="rotate(14 927 267)"/>
    <rect x="220" y="120" width="28" height="28" rx="8" fill="#FBBF24" transform="rotate(-18 234 134)"/>
  </g>
</svg>
`)}`;

function Hero({ setPage }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#151322]">
      <img
        src={BRAND.banner}
        alt="Banner de Birigui"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151322]/95 via-[#151322]/78 to-[#151322]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#151322]/72 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-32 pb-20 md:px-6 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            Indicação Geográfica
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
            Descubra o polo do <span className="text-purple-300">Calçado Infantil</span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-normal leading-7 text-white/78 md:text-xl md:leading-8">
            Tradição, qualidade e inovação. Visite lojas, conheça empresas participantes e explore o melhor de Birigui para sua família.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => setPage("empresas")} size="lg">
              Explorar lojas <ChevronRight size={17} />
            </Button>
            <Button onClick={() => setPage("ig")} size="lg" className="bg-white/14 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/22">
              Conhecer a história
            </Button>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[["+340", "empresas"], ["27", "eventos"], ["39", "atrações"]].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/18 bg-white/10 p-4 text-white backdrop-blur">
                <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                <p className="mt-1 text-xs text-white/62">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickAccess({ setPage }) {
  const items = [
    {
      title: "Empresas",
      text: "Lojas de fábrica e marcas certificadas",
      icon: Store,
      page: "empresas",
      color: "bg-purple-600",
      soft: "bg-purple-50",
      border: "hover:border-purple-200",
      meta: "+340 cadastradas",
    },
    {
      title: "Eventos",
      text: "Feiras, campanhas e programação local",
      icon: CalendarDays,
      page: "eventos",
      color: "bg-[#16875B]",
      soft: "bg-emerald-50",
      border: "hover:border-emerald-200",
      meta: "27 ativos",
    },
    {
      title: "Atrações",
      text: "Pontos urbanos, lazer e cultura",
      icon: Landmark,
      page: "explorar",
      color: "bg-[#C79A3B]",
      soft: "bg-amber-50",
      border: "hover:border-amber-200",
      meta: "39 lugares",
    },
    {
      title: "Roteiros",
      text: "Monte sua visita com horários e paradas",
      icon: Route,
      page: "roteiros",
      color: "bg-[#151322]",
      soft: "bg-slate-50",
      border: "hover:border-slate-300",
      meta: "Criar roteiro",
    },
  ];

  return (
    <section className="relative bg-white py-14 md:py-16">
      <div className={ui.container}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, text, icon: Icon, page, color, soft, border, meta }) => (
            <motion.button
              whileHover={{ y: -4 }}
              onClick={() => setPage(page)}
              key={title}
              className={cn("group relative min-h-[210px] overflow-hidden rounded-lg border border-slate-200 bg-white p-6 text-left shadow-sm shadow-slate-200/50 transition", border, "hover:shadow-md")}
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${soft} transition group-hover:scale-125`} />
              <div className={`absolute bottom-0 left-0 h-1 w-full ${color} opacity-80`} />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color} text-white shadow-sm`}>
                    <Icon size={22} />
                  </div>
                  <Badge>{meta}</Badge>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#151322]">{title}</h3>
                  <p className="mt-2 min-h-[42px] text-sm leading-6 text-slate-600">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 transition group-hover:gap-2">
                    Ver mais <ChevronRight size={15} />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyCard({ company, onDetails }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="group relative aspect-[3/4] min-h-[360px] overflow-hidden rounded-lg bg-slate-950 sm:min-h-[420px] lg:min-h-[440px]">
      <img src={company.img} alt="" className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/48" />
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-purple-700 backdrop-blur">{company.badge}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">{company.type}</p>
        <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em]">{company.name}</h3>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/78">
          <span className="flex items-center gap-1"><MapPin size={15} /> {company.area}</span>
          <span className="flex items-center gap-1 text-[#F4C869]"><Star size={15} fill="currentColor" /> {company.rating}</span>
        </div>
        <button onClick={() => onDetails?.(company)} className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#151322] transition hover:bg-purple-50 hover:text-purple-700">
          Ver detalhes <ArrowUpRight size={15} />
        </button>
      </div>
    </motion.article>
  );
}

function CompanyDetailsModal({ company, onClose }) {
  if (!company) return null;

  const info = [
    [MapPin, "Endereço", company.area],
    [Clock, "Horário", "Segunda a sábado, das 9h às 18h"],
    [BadgeCheck, "Certificação", "Empresa participante da Indicação de Procedência"],
    [Star, "Avaliação", `${company.rating} de 5`],
  ];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#151322]/70 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        onClick={(event) => event.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white shadow-2xl md:max-h-[90vh] md:overflow-hidden md:grid-cols-[0.95fr_1.05fr]"
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-[#151322] ring-1 ring-slate-200 transition hover:bg-purple-600 hover:text-white">
          <X size={18} />
        </button>

        <div className="relative min-h-[260px] overflow-hidden bg-slate-950 sm:min-h-[320px] md:min-h-[560px]">
          <img src={company.img} alt="" className="h-full w-full object-cover opacity-88 transition duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <Badge tone="dark" className="mb-4">{company.badge}</Badge>
            <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">{company.name}</h3>
            <p className="mt-2 text-white/70">{company.type}</p>
          </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <SectionLabel>Detalhes da empresa</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#151322] sm:text-3xl">Visite, compre e conheça a produção local.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Esta empresa faz parte do ecossistema calçadista de Birigui e aparece no portal para facilitar a visitação, a compra direta e o contato com marcas ligadas à identidade produtiva da cidade.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {info.map(([Icon, label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-[#F8F7FB] p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-purple-700 ring-1 ring-slate-200">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                <p className="mt-1 font-medium text-[#151322]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-purple-100 bg-purple-50 p-5">
            <h4 className="font-semibold text-purple-900">O que o visitante encontra</h4>
            <p className="mt-2 text-sm leading-6 text-purple-900/70">
              Atendimento ao público, produtos infantis, informações sobre a marca e possibilidade de incluir a parada em um roteiro pela cidade.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button>Adicionar ao roteiro <Heart size={16} /></Button>
            <Button variant="outline">Abrir localização <MapPin size={16} /></Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CompaniesTeaser({ setPage }) {
  const [carouselPage, setCarouselPage] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const pageCount = companies.length - 2;
  const visibleCompanies = companies.slice(carouselPage, carouselPage + 3);
  const next = () => setCarouselPage((page) => (page + 1) % pageCount);
  const prev = () => setCarouselPage((page) => (page - 1 + pageCount) % pageCount);

  return (
    <section className="flex min-h-screen items-center bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading align="left" eyebrow="Empresas" title="Compre direto na origem" text="Conheça lojas de fábrica, marcas certificadas e empresas que fazem parte da tradição calçadista de Birigui." />
          <MoreButton onClick={() => setPage("empresas")} />
        </div>
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-3">{visibleCompanies.map((c) => <CompanyCard key={c.name} company={c} onDetails={setSelectedCompany} />)}</div>
          <SideCarouselArrows onPrev={prev} onNext={next} />
        </div>
        <div className="mt-8"><CarouselControls count={pageCount} active={carouselPage} onChange={setCarouselPage} /></div>
      </div>
      <CompanyDetailsModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
    </section>
  );
}

function AboutIGTeaser({ setPage }) {
  const timeline = [
    ["1958", "Primeiras fábricas", "A produção de calçados começa a ganhar força e abre caminho para uma nova vocação econômica local."],
    ["1970", "Especialização infantil", "Birigui passa a se destacar pela fabricação de calçados voltados ao público infantil."],
    ["1990", "Polo nacional", "A cidade amplia sua rede de fábricas, fornecedores, lojistas e profissionais especializados."],
    ["2023", "Origem reconhecida", "O calçado infantil de Birigui consolida sua reputação com reconhecimento oficial de procedência."],
  ];

  return (
    <section className="flex min-h-screen items-center bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-9 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            align="left"
            eyebrow="História"
            title="Birigui cresceu passo a passo."
            text="O que começou como uma força produtiva local se transformou em identidade da cidade. Ao longo das décadas, fábricas, trabalhadores, lojistas e fornecedores ajudaram Birigui a se tornar referência nacional em calçados infantis."
          />
          <MoreButton onClick={() => setPage("ig")} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Card className="relative overflow-hidden bg-[#151322] p-7 text-white">
            <img
              src="https://museubirigui.com.br/wp-content/uploads/2015/08/Popi-Cal%C3%A7ados-d%C3%A9cada-de-601.jpg"
              alt="Fábrica de calçados em Birigui na década de 1960"
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#151322]/95 via-[#151322]/78 to-[#151322]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151322]/85 via-transparent to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <Badge tone="dark" className="mb-5">Capital do Calçado Infantil</Badge>
                <h3 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Uma cidade feita de indústria, vitrines e tradição.</h3>
                <p className="mt-5 max-w-xl leading-7 text-white/68">
                  A história do calçado infantil aparece no comércio, nas famílias que trabalham no setor e nas empresas que levam o nome de Birigui para todo o Brasil.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[["+65", "anos de trajetória"], ["+340", "empresas no ecossistema"], ["IP", "origem reconhecida"]].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
                    <p className="text-3xl font-semibold tracking-[-0.05em]">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-white/56">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="relative rounded-lg border border-slate-200 bg-[#F8F7FB] p-5 md:p-6">
            <div className="absolute left-[45px] top-10 hidden h-[calc(100%-80px)] w-px bg-purple-200 md:block" />
            <div className="grid gap-4">
              {timeline.map(([year, title, text], index) => (
                <div key={year} className="relative grid gap-4 rounded-lg border border-slate-200 bg-white p-5 md:grid-cols-[90px_1fr] md:items-start">
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white ring-4 ring-[#F8F7FB]">
                      {index + 1}
                    </span>
                    <span className="text-2xl font-semibold tracking-[-0.05em] text-purple-700">{year}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold tracking-[-0.03em] text-[#151322]">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, onDetails }) {
  const details = {
    Compras: { place: "Centro comercial", time: "09h às 18h", audience: "Famílias" },
    Negócios: { place: "Espaço de eventos", time: "14h às 20h", audience: "Empresas" },
    Cultura: { place: "Roteiro urbano", time: "16h", audience: "Público geral" },
    Gastronomia: { place: "Centro", time: "19h30", audience: "Visitantes" },
  }[event.category] || { place: "Birigui", time: "Consultar", audience: "Público geral" };

  const info = [
    { value: details.place, icon: MapPin },
    { value: details.time, icon: CalendarDays },
    { value: details.audience, icon: Users },
  ];

  return (
    <Card as="article" className="group flex h-full flex-col overflow-hidden transition hover:border-purple-200 hover:shadow-md">
      <div className="relative h-48 shrink-0 overflow-hidden">
        <img src={event.img} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge tone="purple">{event.date}</Badge>
          <Badge tone="green">{event.category}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#151322]">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{event.text}</p>

        <div className="mt-4 grid gap-2 border-y border-slate-100 py-3">
          {info.map(({ value, icon: Icon }) => (
            <div key={value} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-700">
                <Icon size={15} />
              </span>
              <span className="truncate font-medium text-[#151322]">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <Button size="sm" onClick={() => onDetails?.(event)}>Programação</Button>
          <Button size="sm" variant="outline">
            <Heart size={15} /> Salvar
          </Button>
        </div>
      </div>
    </Card>
  );
}

function EventDetailsModal({ event, onClose }) {
  if (!event) return null;

  const details = {
    Compras: { place: "Centro comercial", time: "09h às 18h", audience: "Famílias" },
    Negócios: { place: "Espaço de eventos", time: "14h às 20h", audience: "Empresas" },
    Cultura: { place: "Roteiro urbano", time: "16h", audience: "Público geral" },
    Gastronomia: { place: "Centro", time: "19h30", audience: "Visitantes" },
  }[event.category] || { place: "Birigui", time: "Consultar", audience: "Público geral" };

  const info = [
    [CalendarDays, "Data", event.date],
    [Clock, "Horário", details.time],
    [MapPin, "Local", details.place],
    [Users, "Perfil", details.audience],
  ];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#151322]/70 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        onClick={(eventClick) => eventClick.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white shadow-2xl md:max-h-[90vh] md:overflow-hidden md:grid-cols-[0.95fr_1.05fr]"
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-[#151322] ring-1 ring-slate-200 transition hover:bg-purple-600 hover:text-white">
          <X size={18} />
        </button>

        <div className="relative min-h-[260px] overflow-hidden bg-slate-950 sm:min-h-[320px] md:min-h-[560px]">
          <img src={event.img} alt="" className="h-full w-full object-cover opacity-88 transition duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="mb-4 flex gap-2">
              <Badge tone="dark">{event.date}</Badge>
              <Badge tone="dark">{event.category}</Badge>
            </div>
            <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">{event.title}</h3>
            <p className="mt-2 text-white/72">Agenda local de Birigui</p>
          </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <SectionLabel>Detalhes do evento</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#151322] sm:text-3xl">Programe sua visita com antecedência.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            {event.text} O evento pode ser salvo no roteiro para ajudar o visitante a organizar horários, deslocamentos e paradas próximas.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {info.map(([Icon, label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-[#F8F7FB] p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-purple-700 ring-1 ring-slate-200">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                <p className="mt-1 font-medium text-[#151322]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-purple-100 bg-purple-50 p-5">
            <h4 className="font-semibold text-purple-900">Sugestão para o visitante</h4>
            <p className="mt-2 text-sm leading-6 text-purple-900/70">
              Combine este evento com empresas próximas, gastronomia local e pontos urbanos para criar uma experiência completa.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button>Adicionar ao roteiro <Heart size={16} /></Button>
            <Button variant="outline">Ver localização <MapPin size={16} /></Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function EventsTeaser({ setPage }) {
  const [carouselPage, setCarouselPage] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const pageCount = Math.max(1, events.length - 2);
  const visibleEvents = events.slice(carouselPage, carouselPage + 3);
  const next = () => setCarouselPage((page) => (page + 1) % pageCount);
  const prev = () => setCarouselPage((page) => (page - 1 + pageCount) % pageCount);

  return (
    <section className="flex min-h-screen items-center bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading align="left" eyebrow="Eventos" title="O que está rolando em Birigui" text="Feiras, campanhas comerciais, passeios culturais e experiências para quem quer aproveitar a cidade além das vitrines." />
          <MoreButton onClick={() => setPage("eventos")} />
        </div>
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visibleEvents.map((event) => <EventCard key={event.title} event={event} onDetails={setSelectedEvent} />)}</div>
          <SideCarouselArrows onPrev={prev} onNext={next} />
        </div>
        <div className="mt-8"><CarouselControls count={pageCount} active={carouselPage} onChange={setCarouselPage} /></div>
      </div>
      <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}

function AttractionImageCard({ item, onDetails }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="group relative aspect-[3/4] min-h-[360px] overflow-hidden rounded-lg bg-slate-950 sm:min-h-[420px] lg:min-h-[440px]">
      <img src={item.img} className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" alt="" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">{item.type}</p>
        <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em]">{item.name}</h3>
        <button onClick={() => onDetails?.(item)} className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#151322] transition hover:bg-purple-50 hover:text-purple-700">Ver detalhes <ArrowUpRight size={15} /></button>
      </div>
    </motion.article>
  );
}

function AttractionDetailsModal({ item, onClose }) {
  if (!item) return null;

  const info = [
    [Landmark, "Categoria", item.type],
    [MapPin, "Local", "Birigui, SP"],
    [Clock, "Tempo médio", "40min a 1h"],
    [Route, "Roteiro", "Pode ser salvo como parada"],
  ];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#151322]/70 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        onClick={(eventClick) => eventClick.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white shadow-2xl md:max-h-[90vh] md:overflow-hidden md:grid-cols-[0.95fr_1.05fr]"
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-[#151322] ring-1 ring-slate-200 transition hover:bg-purple-600 hover:text-white">
          <X size={18} />
        </button>

        <div className="relative min-h-[260px] overflow-hidden bg-slate-950 sm:min-h-[320px] md:min-h-[560px]">
          <img src={item.img} alt="" className="h-full w-full object-cover opacity-88 transition duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <Badge tone="dark" className="mb-4">{item.type}</Badge>
            <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">{item.name}</h3>
            <p className="mt-2 text-white/72">Ponto para visitar em Birigui</p>
          </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <SectionLabel>Detalhes do ponto</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#151322] sm:text-3xl">Inclua este lugar no seu passeio.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Este ponto pode complementar a experiência do visitante, conectando compras, lazer, cultura e circulação pela cidade em um roteiro personalizado.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {info.map(([Icon, label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-[#F8F7FB] p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-purple-700 ring-1 ring-slate-200">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                <p className="mt-1 font-medium text-[#151322]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-purple-100 bg-purple-50 p-5">
            <h4 className="font-semibold text-purple-900">Como usar no roteiro</h4>
            <p className="mt-2 text-sm leading-6 text-purple-900/70">
              Salve este ponto como parada e combine com empresas, eventos e horários para criar uma visita mais organizada.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button>Adicionar ao roteiro <Heart size={16} /></Button>
            <Button variant="outline">Ver no mapa <MapPin size={16} /></Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ExploreTeaser({ setPage }) {
  const [carouselPage, setCarouselPage] = useState(0);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const pageCount = attractions.length - 2;
  const visibleAttractions = attractions.slice(carouselPage, carouselPage + 3);
  const next = () => setCarouselPage((page) => (page + 1) % pageCount);
  const prev = () => setCarouselPage((page) => (page - 1 + pageCount) % pageCount);

  return (
    <section className="flex min-h-screen items-center bg-[#F5F8F6] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading align="left" eyebrow="Explorar" title="Lugares para incluir no passeio" text="Parques, centros comerciais, espaços de eventos e pontos urbanos para combinar compras, lazer e cultura no mesmo dia." />
          <MoreButton onClick={() => setPage("explorar")} />
        </div>
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-3">{visibleAttractions.map((item) => <AttractionImageCard key={item.name} item={item} onDetails={setSelectedAttraction} />)}</div>
          <SideCarouselArrows onPrev={prev} onNext={next} />
        </div>
        <div className="mt-8"><CarouselControls count={pageCount} active={carouselPage} onChange={setCarouselPage} /></div>
      </div>
      <AttractionDetailsModal item={selectedAttraction} onClose={() => setSelectedAttraction(null)} />
    </section>
  );
}

function WeatherSection({ setPage }) {
  const weeklyWeather = [
    { day: "Terça-feira, 05", high: "33°", low: "18°", icon: CloudSun },
    { day: "Quarta-feira, 06", high: "31°", low: "18°", icon: CloudSun },
    { day: "Quinta-feira, 07", high: "31°", low: "18°", icon: CloudSun },
    { day: "Sexta-feira, 08", high: "28°", low: "18°", icon: CloudSun },
  ];

  return (
    <section className="bg-[#F8F7FB] py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#151322]">Previsão do Tempo</h2>
            <p className="mt-2 text-base text-slate-600">Acompanhe as previsões desta semana</p>
          </div>
          <MoreButton onClick={() => setPage("explorar")} />
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {weeklyWeather.map(({ day, high, low, icon: Icon }) => (
              <Card key={day} className="flex min-h-[104px] items-center gap-4 p-4 sm:min-h-[112px] sm:gap-5 sm:p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#C79A3B] sm:h-16 sm:w-16">
                  <Icon size={30} />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-600">{day}</p>
                  <div className="mt-2 flex items-center gap-3 text-lg font-semibold text-[#151322]">
                    <span className="text-red-500">↑</span>
                    <span>{high}</span>
                    <span className="text-blue-500">↓</span>
                    <span>{low}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <SideCarouselArrows />
        </div>

        <div className="mt-7">
          <CarouselControls count={2} active={0} />
        </div>
      </div>
    </section>
  );
}

function MiniMapDecor() {
  const stops = [
    { left: "18%", top: "64%", label: "Loja" },
    { left: "36%", top: "38%", label: "Café" },
    { left: "58%", top: "52%", label: "Evento" },
    { left: "76%", top: "28%", label: "Parque" },
  ];

  return (
    <div className="relative h-full min-h-[330px] overflow-hidden rounded-lg border border-slate-200 bg-[#F8F7FB] p-5">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(#E9E4F2 1px, transparent 1px), linear-gradient(90deg, #E9E4F2 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 330" fill="none">
        <path
          d="M55 230 C120 155, 165 260, 220 170 C265 95, 320 210, 365 90"
          stroke="#6F2DBD"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="10 12"
          opacity="0.75"
        />
      </svg>

      {stops.map((stop, index) => (
        <div
          key={stop.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-[#151322] shadow-sm ring-1 ring-slate-200"
          style={{ left: stop.left, top: stop.top }}
        >
          <span className="mr-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-purple-600 text-[10px] text-white">
            {index + 1}
          </span>
          {stop.label}
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-4 shadow-sm backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">Roteiro personalizado</p>
        <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[#151322]">Monte sua própria rota</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Salve pontos, defina horários e organize as paradas em uma sequência visual.
        </p>
        <button onClick={() => {}} className="mt-4 rounded-md bg-purple-600 px-4 py-2.5 text-sm font-medium text-white">
          Criar roteiro
        </button>
      </div>
    </div>
  );
}

function RouteMiniCard({ route, setPage, index = 0 }) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:border-purple-200 hover:bg-[#FCFAFF]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-50 text-purple-600 ring-1 ring-purple-100">
          <span className="text-sm font-semibold">{index + 1}</span>
        </div>
        <span className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
          {route.time} • {route.stops}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#151322]">{route.title}</h3>
      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{route.text}</p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Route size={15} className="text-purple-600" />
          Roteiro sugerido
        </div>
        <button onClick={() => setPage("roteiros")} className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 transition group-hover:gap-2">
          Ver <ChevronRight size={15} />
        </button>
      </div>
    </article>
  );
}

function RoutesTeaser({ setPage }) {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Roteiros"
            title="Roteiros prontos ou do seu jeito"
            text="O visitante pode começar por uma sugestão pronta ou criar uma rota própria, salvando empresas, atrações e eventos com horários."
          />
          <MoreButton onClick={() => setPage("roteiros")} />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2">
            {routes.slice(0, 4).map((route, index) => (
              <RouteMiniCard key={route.title} route={route} setPage={setPage} index={index} />
            ))}
          </div>

          <button onClick={() => setPage("roteiros")} className="block text-left">
            <MiniMapDecor />
          </button>
        </div>


      </div>
    </section>
  );
}

function GallerySection({ setPage }) {
  const galleryGrid = [gallery[1], gallery[2], gallery[3], companies[1].img, attractions[4].img];

  return (
    <section className="bg-[#F8F7FB] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Galeria"
            title="Veja Birigui em imagens"
            text="Registros da cidade, das lojas, dos eventos e dos pontos de visitação que ajudam a apresentar Birigui de forma mais viva."
          />
          <MoreButton onClick={() => setPage("explorar")} />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          <div className="group overflow-hidden rounded-lg">
            <img src={gallery[0]} className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90" alt="" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {galleryGrid.slice(0, 4).map((src, index) => (
              <div key={`${src}-${index}`} className="group overflow-hidden rounded-lg">
                <img src={src} className="h-[202px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ setPage }) {
  const faqs = ["O que é a Indicação de Procedência de Birigui?", "Onde encontro lojas e fábricas participantes?", "Posso montar um roteiro sem login?", "Como uma empresa aparece no portal?"];
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <SectionLabel>Dúvidas</SectionLabel>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#151322] md:text-5xl">Perguntas frequentes</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-600 md:text-lg">Respostas rápidas sobre a Indicação de Procedência, empresas participantes, roteiros e visitação em Birigui.</p>
          <button onClick={() => setPage("contato")} className="mt-7 rounded-md bg-purple-600 px-5 py-3.5 text-sm font-medium text-white">Falar com a equipe</button>
        </div>
        <div className={cn(ui.card, "grid gap-3 p-6")}>
          {faqs.map((faq, i) => (
            <button key={faq} className={`flex items-center justify-between rounded-lg border p-4 text-left text-sm font-medium transition ${i === 1 ? "border-purple-200 bg-purple-50 text-purple-800" : "border-slate-200 bg-white text-[#151322] hover:bg-slate-50"}`}>
              {faq}<ChevronRight size={17} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdminPreview({ setView }) {
  return (
    <section className="bg-[#F8F7FB] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Gerenciamento" title="O botão Entrar leva ao CMS do portal" text="Prévia da área administrativa com todos os módulos necessários para alimentar as páginas públicas dedicadas." />
        <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white lg:grid-cols-[250px_1fr]">
          <aside className="bg-[#151322] p-6 text-white">
            <div className="mb-8 flex items-center gap-3"><img src={BRAND.logo} className="h-11 w-11 rounded-lg bg-white object-contain" alt="" /><div><p className="font-medium">Birigui IG</p><p className="text-xs text-white/45">Painel Admin</p></div></div>
            {adminModules.slice(0, 9).map(({ icon: Icon, label }, i) => <div key={label} className={`mb-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${i === 0 ? "bg-purple-600" : "text-white/60"}`}><Icon size={17} /> {label}</div>)}
          </aside>
          <main className="p-6 md:p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#151322]">Dashboard</h3><p className="text-slate-500">Visão geral do portal público</p></div><button onClick={() => setView("admin")} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#151322] px-5 py-3 text-sm font-medium text-white"><LogIn size={17} /> Abrir modo admin</button></div>
            <div className="grid gap-4 md:grid-cols-4">{adminStats.map(({ label, value, icon: Icon }) => <div key={label} className="rounded-lg border border-slate-200 bg-white p-5"><div className="mb-5 flex items-center justify-between"><span className="text-sm font-medium text-slate-500">{label}</span><div className="rounded-lg bg-[#F8F7FB] p-3 text-purple-600"><Icon size={20} /></div></div><p className="text-4xl font-semibold tracking-[-0.05em] text-[#151322]">{value}</p><p className="mt-1 text-sm font-medium text-slate-500">Atualizado hoje</p></div>)}</div>
          </main>
        </div>
      </div>
    </section>
  );
}

function CTAFooter({ setPage }) {
  const footerNav = [
    { label: "Início", page: "home" },
    { label: "Empresas", page: "empresas" },
    { label: "Eventos", page: "eventos" },
    { label: "Explorar", page: "explorar" },
    { label: "Roteiros", page: "roteiros" },
  ];

  const institutional = [
    { label: "Indicação Geográfica", page: "ig" },
    { label: "Empresas participantes", page: "empresas" },
    { label: "Documentos da IP", page: "ig" },
    { label: "Contato", page: "contato" },
  ];

  const contactItems = [
    [MapPin, "Birigui, SP"],
    [Globe2, "biriguiig.com.br"],
    [Heart, "Meu roteiro"],
  ];

  return (
    <footer id="contato" className="relative overflow-hidden bg-[#151322] text-white">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C79A3B]/16 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <Badge tone="dark" className="mb-4">Capital do Calçado Infantil</Badge>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Planeje sua visita e conheça Birigui pela origem.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              Guia turístico e comercial com empresas certificadas, eventos locais, roteiros e informações sobre a Indicação de Procedência do Calçado Infantil de Birigui.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button onClick={() => setPage("empresas")} variant="light">
              Explorar empresas <ChevronRight size={16} />
            </Button>
            <Button onClick={() => setPage("roteiros")} className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
              Montar roteiro
            </Button>
          </div>
        </div>

        <div className="grid gap-8 border-y border-white/10 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.8fr_.9fr]">
          <div>
            <button onClick={() => setPage("home")} className="flex items-center gap-4 text-left">
              <img src={BRAND.logo} className="h-20 w-20 object-contain drop-shadow-sm" alt="Selo de Procedência de Birigui" />
              <div>
                <p className="text-2xl font-semibold">Birigui</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Capital do Calçado Infantil</p>
              </div>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/58">
              Portal de visitação, compras e experiências locais conectado à Indicação de Procedência do Calçado Infantil de Birigui.
            </p>
            <div className="mt-6 flex gap-2">
              {[Camera, MapPinned, Store].map((Icon, index) => (
                <button key={index} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:border-purple-300 hover:bg-purple-600 hover:text-white">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Navegação</h4>
            <div className="grid gap-2">
              {footerNav.map((item) => (
                <button key={item.page} onClick={() => setPage(item.page)} className="w-fit text-sm text-white/60 transition hover:text-purple-300">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Institucional</h4>
            <div className="grid gap-2">
              {institutional.map((item) => (
                <button key={item.label} onClick={() => setPage(item.page)} className="w-fit text-sm text-white/60 transition hover:text-purple-300">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Contato e acesso</h4>
            <div className="grid gap-3">
              {contactItems.map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/62">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-purple-300 ring-1 ring-white/10">
                    <Icon size={16} />
                  </span>
                  {text}
                </div>
              ))}
            </div>
            <button onClick={() => setPage("contato")} className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-purple-300 hover:bg-purple-600">
              Fale com a equipe <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Birigui • Capital do Calçado Infantil • Guia de empresas, roteiros e experiências locais</p>
          <div className="flex flex-wrap gap-4">
            <button className="hover:text-white">Política de privacidade</button>
            <button className="hover:text-white">Acessibilidade</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ setPage, setView }) {
  return (
    <>
      <div id="inicio" className="scroll-mt-0"><Hero setPage={setPage} /></div>
      <FadeInSection className="scroll-mt-6"><QuickAccess setPage={setPage} /></FadeInSection>
      <FadeInSection id="empresas-home" className="scroll-mt-6"><CompaniesTeaser setPage={setPage} /></FadeInSection>
      <FadeInSection id="ig-home" className="scroll-mt-6"><AboutIGTeaser setPage={setPage} /></FadeInSection>
      <FadeInSection id="explorar-home" className="scroll-mt-6"><ExploreTeaser setPage={setPage} /></FadeInSection>
      <FadeInSection id="eventos-home" className="scroll-mt-6"><EventsTeaser setPage={setPage} /></FadeInSection>
      <FadeInSection id="clima-home"><WeatherSection setPage={setPage} /></FadeInSection>
      <FadeInSection id="roteiros-home"><RoutesTeaser setPage={setPage} /></FadeInSection>
      <FadeInSection id="galeria-home"><GallerySection setPage={setPage} /></FadeInSection>
      <FadeInSection id="faq-home"><FAQSection setPage={setPage} /></FadeInSection>
      <FadeInSection><CTAFooter setPage={setPage} /></FadeInSection>
    </>
  );
}

function EmpresasPage() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <>
      <PageHero eyebrow="Empresas" title="Lojas, fábricas e negócios da cidade" text="A página dedicada reúne filtros, categorias, empresas participantes da IG, lojas de fábrica e pontos de atendimento ao visitante." image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1200&q=80">
        <SearchBar dark className="mt-8" placeholder="Buscar empresa, loja ou segmento" />
      </PageHero>
      <section className="bg-[#F8F7FB] py-10"><div className="mx-auto max-w-7xl px-4 md:px-6"><div className="mb-8 flex flex-wrap gap-2">{["Todos", "Selo IG", "Loja de fábrica", "Atacado", "Varejo", "Aberto agora"].map((f, i) => <button key={f} className={`rounded-md px-4 py-2 text-sm font-medium ${i === 0 ? "bg-[#151322] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>{f}</button>)}</div><div className="grid gap-5 md:grid-cols-3">{companies.map((c) => <CompanyCard key={c.name} company={c} onDetails={setSelectedCompany} />)}</div></div></section>
      <CompanyDetailsModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
    </>
  );
}

function EventosPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Eventos"
        title="Agenda para viver Birigui"
        text="Eventos culturais, campanhas comerciais, feiras, programações institucionais e experiências para visitantes."
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
      >
        <div className="mt-8 max-w-3xl">
          <FilterPills dark />
        </div>
      </PageHero>

      <section className="bg-[#F8F7FB] py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} event={event} onDetails={setSelectedEvent} />
          ))}
        </div>
      </section>

      <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
}

function IGPage() {
  const timeline = [
    ["1958", "Primeiras fábricas", "A produção calçadista ganha força e começa a formar uma cultura industrial própria."],
    ["1970", "Vocação infantil", "Birigui passa a se especializar no calçado infantil e conquista espaço no mercado nacional."],
    ["1990", "Polo produtivo", "A cadeia local cresce com fábricas, fornecedores, lojistas e mão de obra especializada."],
    ["2023", "Origem reconhecida", "O Calçado Infantil de Birigui recebe reconhecimento como Indicação de Procedência."],
  ];


  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#151322]">
        <img
          src="https://museubirigui.com.br/wp-content/uploads/2015/08/Popi-Cal%C3%A7ados-d%C3%A9cada-de-601.jpg"
          alt="História do calçado infantil em Birigui"
          className="absolute inset-0 h-full w-full object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151322]/95 via-[#151322]/76 to-[#151322]/38" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#151322] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-32 pb-20 md:px-6 md:pt-36">
          <div className="max-w-4xl">
            <Badge tone="dark" className="mb-6">Indicação de Procedência</Badge>
            <h1 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
              Birigui, cidade que calça gerações.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              A história do calçado infantil nasceu nas fábricas, atravessou vitrines, empregos e famílias, e hoje fortalece a identidade produtiva da cidade por meio da Indicação de Procedência.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => {}}>Empresas participantes <ChevronRight size={17} /></Button>
              <Button size="lg" className="bg-white/12 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/18">Documentos da IP</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-700 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {[
            ["2023", "Reconhecimento pelo INPI"],
            ["IP", "Indicação de Procedência"],
            ["+65", "anos de tradição calçadista"],
            ["SINBI", "entidade gestora"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-white/20 pl-5">
              <p className="text-4xl font-semibold tracking-[-0.06em]">{value}</p>
              <p className="mt-1 text-sm text-white/66">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-9 grid gap-5 border-b border-slate-200 pb-5 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <SectionLabel>Nossa história</SectionLabel>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#151322] md:text-5xl">
                Tradição reconhecida dentro e fora da cidade.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg lg:justify-self-end">
              Birigui construiu sua reputação pela produção de calçados infantis. A Indicação de Procedência organiza essa trajetória em uma narrativa pública, conectando origem, empresas, documentação e visitantes interessados em conhecer o polo.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_.92fr] lg:items-stretch">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [BadgeCheck, "Origem reconhecida", "Produtos e empresas conectados ao território."],
                [Store, "Empresas participantes", "Fabricantes e lojas ligadas ao setor calçadista."],
                [FileText, "Documentação pública", "Regulamentos, cartilhas e materiais oficiais."],
                [MapPin, "Turismo produtivo", "A história da cidade convertida em visitação."],
              ].map(([Icon, title, text]) => (
                <Card key={title} className="flex min-h-[172px] flex-col justify-between p-5 transition hover:border-purple-200">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#151322]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="overflow-hidden bg-[#151322] text-white">
              <div className="relative flex h-full min-h-[360px] flex-col justify-between p-7">
                <div className="absolute inset-0 bg-[#151322]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,#6F2DBD_0,transparent_36%)] opacity-55" />
                <div className="absolute inset-x-0 top-0 h-1.5 bg-purple-600" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">Calçando gerações</div>
                  <img src={BRAND.logo} className="h-20 w-20 object-contain" alt="Selo de procedência" />
                </div>
                <div className="relative z-10 mt-16">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">Um selo para contar a origem</h3>
                  <p className="mt-3 max-w-xl leading-7 text-white/68">
                    O símbolo identifica a procedência e reforça a reputação construída pelo polo calçadista de Birigui.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7FB] py-14 md:py-16">
        <div className={ui.container}>
          <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 md:grid-cols-[1fr_auto] md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Linha do tempo"
              title="Da fábrica local ao reconhecimento nacional"
              text="Uma visão resumida da formação do polo e do caminho que transformou Birigui em referência no calçado infantil."
            />
            <MoreButton onClick={() => {}} />
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-purple-200 lg:block" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map(([year, title, text], index) => (
                <Card key={year} className="relative overflow-hidden p-5">
                  <div className="relative z-10 mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white ring-8 ring-[#F8F7FB]">{index + 1}</div>
                  <p className="text-4xl font-semibold tracking-[-0.06em] text-purple-700">{year}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#151322]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Empresas certificadas" title="Marcas que fazem parte dessa história" text="O visitante pode conhecer empresas participantes, lojas de fábrica e fabricantes vinculados à identidade calçadista de Birigui." />
          <div className="relative">
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {companies.slice(0, 5).map((company, index) => {
                const logos = [
                  { initials: "PP", name: "Pequenos Passos", className: "bg-purple-600 text-white" },
                  { initials: "FP", name: "Primeiros Passos", className: "bg-[#151322] text-white" },
                  { initials: "MK", name: "Mundo Kids", className: "bg-[#16875B] text-white" },
                  { initials: "PL", name: "Passo Leve", className: "bg-[#C79A3B] text-white" },
                  { initials: "PI", name: "Polo Infantil", className: "bg-white text-purple-700 ring-1 ring-purple-200" },
                ];
                const logo = logos[index];

                return (
                  <Card key={company.name} className="group p-5 text-center transition hover:border-purple-200 hover:bg-[#FCFAFF]">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-[#F8F7FB] p-2">
                      <div className={`flex h-full w-full items-center justify-center rounded-md text-xl font-semibold tracking-[-0.04em] ${logo.className}`}>
                        {logo.initials}
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#151322]">{logo.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{company.type}</p>
                    <div className="mt-4 inline-flex items-center gap-1 rounded-md bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                      <BadgeCheck size={13} /> Certificada
                    </div>
                  </Card>
                );
              })}
            </div>
            <SideCarouselArrows />
          </div>
          <div className="mt-7"><CarouselControls count={4} active={1} /></div>
        </div>
      </section>
    </>
  );
}

function FilterPills({ items = ["Todos", "Este mês", "Compras", "Cultura", "Família", "Negócios"], dark = false }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item, i) => {
        const active = i === 0;
        return (
          <button
            key={item}
            className={`rounded-md px-4 py-2.5 text-sm font-semibold transition ${
              dark
                ? active
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-950/20"
                  : "border border-white/18 bg-white/8 text-white/68 backdrop-blur hover:border-purple-300 hover:bg-purple-600/18 hover:text-white"
                : active
                  ? "bg-[#151322] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function ExplorarPage() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Explorar"
        title="Descubra lugares, experiências e eventos"
        text="Aqui o visitante encontra empresas, atrações, eventos e pontos gastronômicos em um fluxo simples de descoberta. Os filtros ajudam a separar o que faz sentido para cada passeio."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      >
        <div className="mt-8 max-w-2xl">
          <FilterPills dark />
        </div>
      </PageHero>

      <section className="bg-[#F8F7FB] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 grid gap-5 border-b border-slate-200 pb-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>Catálogo</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#151322]">Escolha o que visitar</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Combine empresas, atrações e eventos. Ao salvar um item, ele pode ser usado depois no módulo de roteiros.
              </p>
            </div>
            <FilterPills items={["Todos", "Empresas", "Atrações", "Eventos", "Gastronomia", "Favoritos"]} />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item) => (
              <AttractionImageCard key={item.name} item={item} onDetails={setSelectedAttraction} />
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {companies.slice(0, 3).map((company) => (
              <CompanyCard key={company.name} company={company} onDetails={setSelectedCompany} />
            ))}
          </div>

          <div className="mt-8">
            <CarouselControls count={5} active={1} />
          </div>
        </div>
      </section>

      <AttractionDetailsModal item={selectedAttraction} onClose={() => setSelectedAttraction(null)} />
      <CompanyDetailsModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
    </>
  );
}

const routeCatalog = [
  { name: "Pequenos Passos Calçados", category: "Empresa", time: "09:00", duration: "45min", icon: Store, area: "Centro", img: companies[0].img },
  { name: "Centro Comercial", category: "Compras", time: "10:15", duration: "1h", icon: Store, area: "Av. principal", img: attractions[1].img },
  { name: "Parque do Povo", category: "Atração", time: "13:30", duration: "50min", icon: Landmark, area: "Lazer", img: attractions[0].img },
  { name: "Semana do Calçado Infantil", category: "Evento", time: "15:00", duration: "2h", icon: CalendarDays, area: "Centro comercial", img: events[0].img },
  { name: "Noite especial no centro", category: "Gastronomia", time: "19:30", duration: "1h30", icon: Ticket, area: "Centro", img: events[3].img },
];

function RouteCatalogCard({ item, selected, onToggle }) {
  const Icon = item.icon;
  return (
    <article className="grid gap-4 rounded-lg border border-slate-200 bg-white p-3 sm:min-h-[190px] sm:grid-cols-[150px_1fr]">
      <div className="group relative h-40 overflow-hidden rounded-lg sm:h-[166px]">
        <img src={item.img} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90" alt="" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="flex min-h-[166px] flex-col justify-between p-2">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-purple-700">
            <Icon size={17} /> {item.category}
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#151322]">{item.name}</h3>
          <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
            <MapPin size={15} /> {item.area} • {item.duration}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <label className="flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-[#F8F7FB] px-4 text-sm text-slate-600">
            Horário
            <input defaultValue={item.time} className="w-16 bg-transparent font-medium text-[#151322] outline-none" />
          </label>
          <button onClick={onToggle} className={`inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium ${selected ? "bg-purple-600 text-white" : "bg-[#151322] text-white"}`}>
            <Heart size={16} fill={selected ? "currentColor" : "none"} /> {selected ? "No roteiro" : "Adicionar"}
          </button>
        </div>
      </div>
    </article>
  );
}

function RouteMapPreview({ selectedItems, onRemove }) {
  const points = [
    { x: 43, y: 55 },
    { x: 52, y: 42 },
    { x: 38, y: 68 },
    { x: 61, y: 58 },
    { x: 48, y: 76 },
  ];
  const visiblePoints = selectedItems.map((item, index) => ({ ...item, ...(points[index] || points[points.length - 1]) }));

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="relative h-[320px] bg-[#F7F2E8] sm:h-[380px] lg:h-[430px]">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              linear-gradient(32deg, transparent 0 47%, rgba(224,180,112,.45) 48% 52%, transparent 53% 100%),
              linear-gradient(118deg, transparent 0 46%, rgba(224,180,112,.36) 47% 51%, transparent 52% 100%),
              linear-gradient(4deg, transparent 0 48%, rgba(224,180,112,.30) 49% 51%, transparent 52% 100%)
            `,
            backgroundSize: "180px 120px, 220px 150px, 260px 180px",
            backgroundPosition: "0 0, 30px 20px, -40px 40px",
          }}
        />
        <div className="absolute left-[9%] top-[22%] h-[46%] w-[18%] rounded-full bg-[#DCEFD7] opacity-70" />
        <div className="absolute right-[12%] top-[10%] h-[20%] w-[22%] rounded-full bg-[#DCEFD7] opacity-60" />
        <div className="absolute bottom-[13%] right-[18%] h-[15%] w-[18%] rounded-full bg-[#DCEFD7] opacity-60" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 320" fill="none" preserveAspectRatio="none">
          <path d="M35 240 C95 210 126 160 176 178 C226 198 250 136 318 122 C358 114 382 88 404 62" stroke="#D9B77B" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
          <path d="M32 94 C94 120 154 106 210 130 C272 156 322 152 394 178" stroke="#D9B77B" strokeWidth="6" strokeLinecap="round" opacity="0.32" />
          <path d="M106 308 C126 235 160 210 214 172 C260 140 306 72 330 18" stroke="#D9B77B" strokeWidth="6" strokeLinecap="round" opacity="0.28" />
        </svg>

        <div className="absolute right-4 top-4 z-20 grid overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
          <button className="h-9 w-9 border-b border-slate-200 text-xl font-medium text-[#151322]">+</button>
          <button className="h-9 w-9 text-xl font-medium text-[#151322]">−</button>
        </div>

        {visiblePoints.map((item, index) => (
          <motion.button
            key={item.name}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            title={item.name}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-sm font-semibold text-white ring-4 ring-white">
              {index + 1}
            </span>
          </motion.button>
        ))}

        {visiblePoints[0] && (
          <div className="absolute left-[46%] top-[34%] z-20 max-w-[230px] rounded-lg bg-white px-4 py-3 text-sm shadow-lg ring-1 ring-slate-200">
            <button className="absolute right-3 top-2 text-slate-400">×</button>
            <p className="font-semibold text-[#151322]">{visiblePoints[0].name}</p>
            <p className="mt-1 text-xs text-slate-500">Clique no card para detalhes</p>
          </div>
        )}

        <div className="absolute bottom-2 right-3 rounded bg-white/90 px-2 py-1 text-[11px] text-slate-500 ring-1 ring-slate-200">
          Leaflet | © OpenStreetMap contributors © CARTO
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#151322]">Paradas do roteiro</p>
            <p className="text-xs text-slate-500">Visualização demonstrativa do trajeto</p>
          </div>
          <Navigation className="text-purple-600" size={20} />
        </div>

        <div className="grid gap-2">
          {selectedItems.length === 0 && (
            <div className="rounded-lg bg-[#F8F7FB] p-4 text-sm text-slate-500">Seu roteiro ainda está vazio.</div>
          )}
          {selectedItems.map((item, index) => (
            <div key={item.name} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-50 text-sm font-semibold text-purple-700">{index + 1}</div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#151322]">{item.name}</p>
                <p className="text-xs text-slate-500">{item.time} • {item.duration}</p>
              </div>
              <button onClick={() => onRemove(item.name)} className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-purple-50 hover:text-purple-700">
                Remover
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoteirosPage() {
  const [selected, setSelected] = useState(["Pequenos Passos Calçados", "Centro Comercial", "Parque do Povo"]);
  const selectedItems = routeCatalog.filter((item) => selected.includes(item.name));
  const toggleItem = (name) => setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);

  return (
    <>
      <PageHero eyebrow="Roteiros" title="Monte seu roteiro pela cidade" text="Funciona como um carrinho de visita: o usuário favorita empresas, eventos e atrações, escolhe horários e acompanha tudo no mapa." image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80">
        <button className="mt-8 rounded-md bg-[#151322] px-5 py-2.5 text-sm font-medium text-white">Começar roteiro</button>
      </PageHero>

      <section className="bg-[#F8F7FB] py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_430px] xl:grid-cols-[minmax(0,1fr)_450px]">
          <div>
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-end">
              <div>
                <SectionLabel>Adicionar ao roteiro</SectionLabel>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#151322]">Favoritos, horários e paradas</h2>
                <p className="mt-3 max-w-2xl text-slate-600">Empresas, atrações e eventos aparecem em uma lista. O visitante adiciona ao roteiro e ajusta o horário de cada parada.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Todos", "Empresas", "Atrações", "Eventos"].map((filter, i) => (
                  <button key={filter} className={`rounded-md px-3.5 py-2 text-sm font-medium ${i === 0 ? "bg-[#151322] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>{filter}</button>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {routeCatalog.map((item) => (
                <RouteCatalogCard key={item.name} item={item} selected={selected.includes(item.name)} onToggle={() => toggleItem(item.name)} />
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="border-b border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionLabel>Meu roteiro</SectionLabel>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#151322]">{selectedItems.length} paradas salvas</h3>
                    <p className="mt-2 text-sm text-slate-500">Organize a ordem, ajuste horários e visualize o trajeto.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600"><Route /></div>
                </div>
              </div>

              <div className="p-5">
                <RouteMapPreview selectedItems={selectedItems} onRemove={toggleItem} />

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <button className="rounded-md bg-[#151322] px-4 py-2.5 text-sm font-medium text-white">Otimizar rota</button>
                  <button className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-[#151322]">Abrir no mapa</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContatoPage() {
  const contactCards = [
    [MapPin, "Atendimento local", "Birigui, SP", "Referências da cidade, empresas e pontos de visitação."],
    [Globe2, "Portal oficial", "biriguiig.com.br", "Informações públicas sobre empresas, roteiros e eventos."],
    [Heart, "Meu roteiro", "Suporte ao visitante", "Ajuda para organizar paradas, horários e experiências."],
  ];

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a equipe local"
        text="Dúvidas sobre empresas, roteiros, eventos, Indicação de Procedência ou participação no portal podem ser enviadas por aqui."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="relative overflow-hidden bg-[#F8F7FB] py-12 md:py-16">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-purple-100/70 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1fr_.82fr] lg:items-stretch">
          <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7 border-b border-slate-200 pb-5">
              <SectionLabel>Mensagem</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#151322] sm:text-3xl">Envie sua solicitação</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Preencha os dados abaixo e a equipe responsável poderá retornar com orientações sobre visitação, empresas e conteúdos do portal.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-600">
                Nome
                <input className={ui.input} placeholder="Seu nome" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-600">
                E-mail
                <input className={ui.input} placeholder="voce@email.com" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-600">
                Telefone
                <input className={ui.input} placeholder="(18) 00000-0000" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-600">
                Assunto
                <select className={ui.input} defaultValue="">
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Empresas participantes</option>
                  <option>Roteiros e visitação</option>
                  <option>Eventos</option>
                  <option>Indicação de Procedência</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-600 sm:col-span-2">
                Mensagem
                <textarea className={cn(ui.input, "h-40 resize-none")} placeholder="Conte rapidamente o que você precisa" />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700">Enviar mensagem</button>
              <span className="text-sm text-slate-500">Retorno em horário comercial.</span>
            </div>
          </form>

          <aside className="grid gap-5 lg:grid-rows-[auto_1fr]">
            <Card className="overflow-hidden bg-white p-0">
              <div className="relative h-52 overflow-hidden bg-[#151322]">
                <img src={BRAND.banner} className="h-full w-full object-cover opacity-65 transition duration-500 hover:scale-105 hover:brightness-90" alt="Birigui" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151322]/88 via-[#151322]/38 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <Badge tone="dark" className="mb-3">Atendimento</Badge>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">Portal Birigui</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="leading-7 text-slate-600">Canal para visitantes, empresas interessadas e parceiros que desejam entender melhor o funcionamento do portal.</p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-[#151322] transition hover:border-purple-200 hover:text-purple-700">
                  Chamar no WhatsApp <ArrowUpRight size={15} />
                </button>
              </div>
            </Card>

            <div className="grid gap-3">
              {contactCards.map(([Icon, title, value, text]) => (
                <Card key={title} className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151322]">{title}</h4>
                    <p className="mt-1 text-sm font-medium text-purple-700">{value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function PublicSite({ setView }) {
  const [page, setPage] = useState("home");
  const [activeHomeSection, setActiveHomeSection] = useState(0);

  useEffect(() => {
    if (page !== "home") return;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.38;
      let closestIndex = 0;
      let closestDistance = Infinity;

      HOME_SECTIONS.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (!element) return;
        const distance = Math.abs(element.getBoundingClientRect().top - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveHomeSection(closestIndex);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [page]);

  const scrollToHomeSection = (index) => {
    const section = HOME_SECTIONS[index];
    const element = document.getElementById(section.id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveHomeSection(index);
  };

  const content = useMemo(() => {
    const props = { setPage, setView };
    return {
      home: <HomePage {...props} />,
      empresas: <EmpresasPage />,
      eventos: <EventosPage />,
      explorar: <ExplorarPage />,
      ig: <IGPage />,
      roteiros: <RoteirosPage />,
      contato: <ContatoPage />,
    }[page];
  }, [page, setView]);

  return (
    <div className="min-h-screen bg-white font-sans text-[#151322] antialiased">
      <Header page={page} setPage={setPage} setView={setView} />
      {page === "home" && (
        <FloatingPageDots active={activeHomeSection} onSelect={scrollToHomeSection} />
      )}
      {content}
      {page !== "home" && <CTAFooter setPage={setPage} />}
    </div>
  );
}

function AdminTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-[720px] text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-[#F8F7FB] text-xs uppercase tracking-[0.14em] text-slate-400">
            <th className="px-5 py-4 font-semibold">Nome</th>
            <th className="px-4 py-4 font-semibold">Tipo</th>
            <th className="px-4 py-4 font-semibold">Categoria</th>
            <th className="px-4 py-4 font-semibold">Status</th>
            <th className="px-5 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 transition hover:bg-[#FCFAFF]">
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-50 text-sm font-semibold text-purple-700">
                    {row[0].slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-[#151322]">{row[0]}</p>
                    <p className="text-xs text-slate-400">Atualizado recentemente</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-slate-600">{row[1]}</td>
              <td className="px-4 py-4">
                <span className="rounded-md bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                  {row[2]}
                </span>
              </td>
              <td className="px-4 py-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium ${
                    row[3] === "Pendente"
                      ? "bg-amber-50 text-[#9A6B11]"
                      : row[3] === "Aprovado" || row[3] === "Publicado" || row[3] === "Atualizado"
                        ? "bg-emerald-50 text-[#16875B]"
                        : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {row[3]}
                </span>
              </td>
              <td className="px-5 py-4 text-right">
                <button className="rounded-md border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:border-purple-200 hover:text-purple-700">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminSummaryCard({ label, value, icon: Icon, detail, tone = "purple" }) {
  const tones = {
    purple: "bg-purple-50 text-purple-700 ring-purple-100",
    green: "bg-emerald-50 text-[#16875B] ring-emerald-100",
    gold: "bg-amber-50 text-[#9A6B11] ring-amber-100",
    dark: "bg-slate-100 text-[#151322] ring-slate-200",
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-purple-200 hover:bg-[#FCFAFF]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#151322]">{value}</p>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-md ring-1 ${tones[tone]}`}>
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-4 text-xs font-medium text-slate-400">{detail}</p>
    </div>
  );
}

function AdminModuleContent({ module }) {
  const baseRows = [
    ["Pequenos Passos Calçados", "Empresa", "Selo IG", "Aprovado"],
    ["Semana do Calçado Infantil", "Evento", "Compras", "Publicado"],
    ["Parque do Povo", "Atração", "Lazer", "Publicado"],
    ["Galeria do Centro Comercial", "Mídia", "Fotos", "Pendente"],
    ["Regulamento de Uso", "Documento", "IG", "Atualizado"],
  ];

  if (module === "dashboard") {
    return (
      <>
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {adminStats.map(({ label, value, icon: Icon }, index) => (
            <AdminSummaryCard
              key={label}
              label={label}
              value={value}
              icon={Icon}
              detail={index === 2 ? "3 itens precisam de revisão" : "Sincronizado com o portal"}
              tone={["purple", "green", "gold", "dark"][index]}
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <section className="rounded-lg border border-slate-200 bg-white p-5 md:p-6">
            <div className="mb-5 flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-end">
              <div>
                <SectionLabel>Operação</SectionLabel>
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">Cadastros recentes</h2>
              </div>
              <button className="text-sm font-semibold text-purple-700 transition hover:text-[#151322]">Ver todos</button>
            </div>
            <AdminTable rows={baseRows} />
          </section>

          <aside className="grid gap-6">
            <div className="relative overflow-hidden rounded-lg bg-[#151322] p-6 text-white">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-600/30 blur-2xl" />
              <div className="relative z-10">
                <Badge tone="dark" className="mb-4">White-label</Badge>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">Identidade do portal</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Logo, cor principal, banner e módulos podem mudar por cidade, região ou IG.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-md bg-purple-600" />
                  <div className="h-12 rounded-md bg-[#C79A3B]" />
                  <div className="h-12 rounded-md bg-[#16875B]" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">Módulos ativos</h3>
                <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-medium text-[#16875B]">12 ativos</span>
              </div>
              <div className="grid gap-2">
                {adminModules.slice(1, 8).map(({ id, icon: Icon, label }) => (
                  <div key={id} className="flex items-center justify-between rounded-md border border-slate-100 bg-[#F8F7FB] px-3 py-3">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-700"><Icon size={16} className="text-purple-600" />{label}</span>
                    <CheckCircle2 className="text-[#16875B]" size={17} />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </>
    );
  }

  if (module === "aparencia") {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <SectionLabel>Marca</SectionLabel>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Logo do cliente</h3>
            </div>
            <Upload className="text-purple-600" />
          </div>
          <div className="flex h-44 items-center justify-center rounded-lg bg-[#F8F7FB] p-6 ring-1 ring-slate-200">
            <img src={BRAND.logo} className="h-32 w-32 object-contain" alt="Logo" />
          </div>
          <button className="mt-5 w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:border-purple-200 hover:text-purple-700">Alterar imagem</button>
        </Card>

        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <SectionLabel>Design</SectionLabel>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Paleta ativa</h3>
            </div>
            <Palette className="text-purple-600" />
          </div>
          <div className="grid gap-3">
            {[["Principal", "#6F2DBD", "bg-purple-600"], ["Apoio", "#16875B", "bg-[#16875B]"], ["Destaque", "#C79A3B", "bg-[#C79A3B]"]].map(([label, hex, color]) => (
              <div key={label} className="flex items-center justify-between rounded-lg border border-slate-200 bg-[#F8F7FB] p-3">
                <div className="flex items-center gap-3">
                  <span className={`h-10 w-10 rounded-md ${color}`} />
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="text-xs text-slate-500">{hex}</p>
                  </div>
                </div>
                <button className="text-sm font-semibold text-purple-700">Editar</button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 lg:col-span-1">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <SectionLabel>Portal</SectionLabel>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Banner público</h3>
            </div>
            <ImageIcon className="text-purple-600" />
          </div>
          <div className="relative h-44 overflow-hidden rounded-lg bg-[#151322]">
            <img src={BRAND.banner} className="h-full w-full object-cover opacity-75" alt="Banner" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151322]/70 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">Home principal</p>
          </div>
          <button className="mt-5 w-full rounded-md bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700">Salvar aparência</button>
        </Card>
      </div>
    );
  }

  if (module === "ig") {
    return (
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="overflow-hidden p-0">
          <div className="relative h-40 bg-[#151322]">
            <img
              src="https://museubirigui.com.br/wp-content/uploads/2015/08/Popi-Cal%C3%A7ados-d%C3%A9cada-de-601.jpg"
              className="h-full w-full object-cover opacity-55"
              alt="História"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151322] to-transparent" />
            <Badge tone="dark" className="absolute left-5 top-5">Indicação de Procedência</Badge>
          </div>
          <div className="p-6">
            <img src={BRAND.logo} className="mb-5 h-24 w-24 object-contain" alt="Selo da IG" />
            <h3 className="text-3xl font-semibold tracking-[-0.04em]">Calçado Infantil de Birigui</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Área para manter história, selo, documentos oficiais, empresas participantes e textos institucionais da procedência.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[["2023", "INPI"], ["IP", "Tipo"], ["342", "Empresas"]].map(([value, label]) => (
                <div key={label} className="rounded-md border border-slate-200 bg-[#F8F7FB] p-3">
                  <p className="text-2xl font-semibold text-purple-700">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid gap-5">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <SectionLabel>Conteúdo da IG</SectionLabel>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">Materiais publicados</h3>
              </div>
              <button className="rounded-md bg-purple-600 px-4 py-2.5 text-sm font-medium text-white">Novo material</button>
            </div>
            <AdminTable
              rows={[
                ["Regulamento de Uso", "Documento", "PDF", "Atualizado"],
                ["Certificado INPI", "Documento", "Link", "Publicado"],
                ["Linha do tempo", "Conteúdo", "História", "Publicado"],
                ["Evidência territorial", "Acervo", "Imagem", "Pendente"],
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

  const titles = {
    territorios: "Estados, cidades, regiões e endereços",
    empresas: "Empresas, associados e parceiros",
    eventos: "Eventos e agenda local",
    atracoes: "Atrações e pontos turísticos",
    roteiros: "Roteiros e experiências prontas",
    galeria: "Galeria de fotos e mídia",
    documentos: "Documentos, normativas e arquivos",
    noticias: "Notícias e novidades públicas",
    usuarios: "Usuários, perfis e permissões",
    config: "Configurações gerais do portal",
  };

  const icons = {
    territorios: Map,
    empresas: Building2,
    eventos: CalendarDays,
    atracoes: Landmark,
    roteiros: Route,
    galeria: ImageIcon,
    documentos: FileText,
    noticias: Newspaper,
    usuarios: Users,
    config: Settings,
  };

  const Icon = icons[module] || Layers3;

  return (
    <div className="grid gap-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-slate-200 bg-white p-7">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-purple-50 text-purple-700 ring-1 ring-purple-100">
            <Icon size={24} />
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">{titles[module]}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Gerencie os conteúdos publicados no portal, revise cadastros, atualize informações e acompanhe o que aparece para os visitantes.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button className="rounded-md bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700">
              <Plus className="mr-2 inline" size={16} />
              Novo cadastro
            </button>
            <button className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:border-purple-200 hover:text-purple-700">
              <Eye className="mr-2 inline" size={16} />
              Pré-visualizar
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <SectionLabel>Resumo</SectionLabel>
          <div className="grid gap-3">
            {[["Publicados", "28"], ["Em revisão", "04"], ["Rascunhos", "07"]].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-md bg-[#F8F7FB] px-4 py-3">
                <span className="text-sm font-medium text-slate-600">{label}</span>
                <span className="text-lg font-semibold text-[#151322]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AdminTable rows={baseRows} />
    </div>
  );
}

function AdminFull({ setView }) {
  const [module, setModule] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const current = adminModules.find((m) => m.id === module);

  const selectModule = (id) => {
    setModule(id);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F7FB] font-sans text-[#151322] antialiased">
      <div className="grid min-h-screen lg:grid-cols-[300px_1fr]">
        <aside className={`fixed inset-y-0 left-0 z-50 w-[300px] border-r border-white/10 bg-[#151322] p-5 text-white transition lg:sticky lg:top-0 lg:block lg:h-screen ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
          <div className="mb-6 flex items-center justify-between gap-3">
            <button onClick={() => setView("public")} className="flex items-center gap-3 text-left">
              <img src={BRAND.logo} className="h-14 w-14 object-contain" alt="" />
              <div>
                <p className="text-lg font-semibold leading-none">Birigui</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">Painel CMS</p>
              </div>
            </button>
            <button onClick={() => setSidebarOpen(false)} className="rounded-md p-2 text-white/60 hover:bg-white/10 lg:hidden">
              <X size={18} />
            </button>
          </div>

          <div className="mb-5 rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">Portal ativo</p>
            <p className="mt-2 font-semibold">Calçado Infantil de Birigui</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Publicado
            </div>
          </div>

          <nav className="h-[calc(100vh-220px)] space-y-1 overflow-y-auto pr-1">
            {adminModules.map(({ id, icon: Icon, label }) => {
              const active = module === id;
              return (
                <button
                  key={id}
                  onClick={() => selectModule(id)}
                  className={`group flex w-full items-center gap-3 rounded-md px-3.5 py-2.5 text-left text-sm font-medium transition ${
                    active ? "bg-purple-600 text-white" : "text-white/58 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={17} className={active ? "text-white" : "text-white/45 group-hover:text-white"} />
                  {label}
                </button>
              );
            })}
          </nav>
        </aside>

        {sidebarOpen && <div className="fixed inset-0 z-40 bg-[#151322]/60 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />}

        <main className="min-w-0 p-4 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="rounded-md p-2 text-[#151322] hover:bg-slate-100">
              <Menu size={20} />
            </button>
            <p className="font-semibold">{current?.label || "Gerenciamento"}</p>
            <button onClick={() => setView("public")} className="rounded-md p-2 text-purple-700 hover:bg-purple-50">
              <Eye size={19} />
            </button>
          </div>

          <div className="mb-8 rounded-lg border border-slate-200 bg-white p-5 md:p-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <SectionLabel>Área administrativa</SectionLabel>
                <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{current?.label || "Gerenciamento"}</h1>
                <p className="mt-2 max-w-2xl leading-7 text-slate-500">
                  Atualize empresas, eventos, documentos, roteiros e conteúdos exibidos no portal público.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setView("public")} className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:border-purple-200 hover:text-purple-700">
                  <Eye className="mr-2 inline" size={16} />Pré-visualizar
                </button>
                <button className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:border-purple-200 hover:text-purple-700">
                  <SlidersHorizontal className="mr-2 inline" size={16} />Filtros
                </button>
                <button className="rounded-md bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700">
                  <Plus className="mr-2 inline" size={16} />Novo
                </button>
              </div>
            </div>
          </div>

          <AdminModuleContent module={module} />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("public");
  return view === "admin" ? <AdminFull setView={setView} /> : <PublicSite setView={setView} />;
}
