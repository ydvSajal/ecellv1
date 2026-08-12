/* E-Cell Design Direction: Bennett Signal / Editorial Momentum. This file establishes the quiet floating navigation and route structure that lets the editorial pages feel like one connected publication. */
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import PaperTextureLayer from "./components/PaperTextureLayer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Mentors from "./pages/Mentors";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import NotFound from "./pages/NotFound";

const navItems = [
  ["Events", "/events"],
  ["People", "/team"],
  ["Mentors", "/mentors"],
  ["About", "/about"],
  ["Newsletter", "/newsletter"],
] as const;

function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="E-Cell home">
        <svg width="31" height="31" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <rect x="4" y="4" width="2.5" height="16" rx="1.25" />
          <rect x="9" y="4" width="2.5" height="16" rx="1.25" />
          <rect x="14" y="8" width="2.5" height="12" rx="1.25" fill="#D9F04A" />
          <rect x="19" y="4" width="2.5" height="16" rx="1.25" />
        </svg>
        <span><b>E-Cell</b><small>Entrepreneurial Society at Bennett</small></span>
      </Link>
      <nav className="desktop-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}
      </nav>
      <Link href="/events" className="nav-action">Find your room <ArrowUpRight size={15} /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      {open && <div className="mobile-menu">{navItems.map(([label, href]) => <Link key={href} href={href}>{label}<ArrowUpRight size={17} /></Link>)}<Link href="/events" className="mobile-cta">See what's next <ArrowUpRight size={17} /></Link></div>}
    </header>
  );
}

function Footer() {
  return <footer className="footer"><div><div className="footer-mark"><svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginRight: '4px' }}><rect x="4" y="4" width="2.5" height="16" rx="1.25" /><rect x="9" y="4" width="2.5" height="16" rx="1.25" /><rect x="14" y="8" width="2.5" height="12" rx="1.25" fill="#D9F04A" /><rect x="19" y="4" width="2.5" height="16" rx="1.25" /></svg><span>E-Cell</span></div><p>Ideas are common.<br /><em>Momentum is not.</em></p></div><div className="footer-links"><span>At Bennett University</span><a href="mailto:ecell@bennett.edu.in">ecell@bennett.edu.in</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 E-Cell, Bennett University</span><span>Built by the student community</span></div></footer>;
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="site-app"><PaperTextureLayer variant="global" className="global-paper" /><SiteNav /><main>{children}</main><Footer /></div>;
}

function Router() {
  return <Layout><Switch><Route path="/" component={Home} /><Route path="/events" component={Events} /><Route path="/team" component={Team} /><Route path="/mentors" component={Mentors} /><Route path="/about" component={About} /><Route path="/newsletter" component={Newsletter} /><Route component={NotFound} /></Switch></Layout>;
}

export default function App() { return <Router />; }
