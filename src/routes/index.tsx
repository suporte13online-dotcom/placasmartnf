import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Menu, MessageCircle, Nfc, QrCode, Smartphone, MapPin, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";
import hero from "@/assets/hero.jpg.asset.json";
import google from "@/assets/google.jpg.asset.json";
import instagram from "@/assets/instagram.jpg.asset.json";
import cardapio from "@/assets/cardapio.jpg.asset.json";
import pix from "@/assets/pix.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "PlacaSmartNF | Plaquinhas Inteligentes NFC e QR Code" },
    { name: "description", content: "Modernize seu negócio com plaquinhas NFC e QR Code para Google, Instagram, cardápios digitais e Pix. Atendimento com Cássio em Nova Friburgo e região." },
    { property: "og:title", content: "PlacaSmartNF — Plaquinhas Inteligentes NFC e QR Code" },
    { property: "og:description", content: "Tecnologia que conecta seu negócio. Conheça os modelos Google, Instagram, Cardápio e Pix." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Brand() {
  return <span className="brand"><Nfc className="brand-icon" aria-hidden="true" />Placa<strong>Smart</strong>NF</span>;
}

const products = [
  { name: "Google", tag: "Mais avaliações", image: google.url, description: "Facilite as avaliações dos seus clientes e fortaleça a presença do seu negócio no Google." },
  { name: "Instagram", tag: "Mais conexões", image: instagram.url, description: "Conecte seus clientes ao seu perfil e transforme cada visita em uma nova conexão." },
  { name: "Cardápio", tag: "Mais praticidade", image: cardapio.url, description: "Seu cardápio digital ao alcance de um toque. Uma experiência prática à mesa." },
  { name: "Pix", tag: "Mais agilidade", image: pix.url, description: "Deixe o acesso ao pagamento via Pix mais simples e prático para seus clientes." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="site-header">
      <div className="container-page flex h-full items-center justify-between gap-4">
        <a href="#inicio" aria-label="PlacaSmartNF início"><Brand /></a>
        <nav aria-label="Navegação principal" className="desktop-nav flex items-center gap-8">
          <a className="nav-link" href="#plaquinhas">Nossas plaquinhas</a>
          <a className="nav-link" href="#como-funciona">Como funciona</a>
          <Button asChild variant="hero"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle /> FALE COM A GENTE <ArrowUpRight /></a></Button>
        </nav>
        <div className="mobile-nav"><Button variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      </div>
    </header>
    {menuOpen && <nav aria-label="Navegação móvel" className="mobile-nav border-b border-border bg-background px-5 py-5"><div className="flex flex-col gap-5"><a href="#plaquinhas" onClick={() => setMenuOpen(false)}>Nossas plaquinhas</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#contato" onClick={() => setMenuOpen(false)}>Fale com a gente</a></div></nav>}
    <main>
      <section id="inicio" className="hero">
        <div className="container-page hero-inner">
          <img className="hero-photo" src={hero.url} alt="Apresentação das plaquinhas inteligentes Google, Cardápio, Pix e Instagram" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-copy reveal">
            <div className="eyebrow text-primary"><span className="eyebrow-dot" /> MODERNIZE SEU NEGÓCIO COM TECNOLOGIA!</div>
            <h1>PLAQUINHAS<br /><em>INTELIGENTES</em><br />NFC E QR CODE</h1>
            <p className="hero-slogan">Tecnologia que conecta seu negócio.</p>
            <p className="hero-description">Facilite a experiência dos seus clientes com soluções inteligentes para avaliações no Google, seguidores no Instagram, cardápios digitais e pagamentos via Pix.</p>
            <div className="hero-actions"><Button asChild variant="hero"><a href="#plaquinhas">CONHEÇA NOSSAS PLAQUINHAS <ArrowDown /></a></Button><Button asChild variant="heroOutline"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle /> FALE COM UM ESPECIALISTA</a></Button></div>
            <div className="hero-footnote"><span className="flex items-center gap-1.5"><MapPin size={13} /> Nova Friburgo e região</span><span className="flex items-center gap-1.5"><Check size={13} className="text-primary" /> Atendimento com Cássio</span></div>
            <div className="mt-7"><Brand /></div>
          </div>
        </div>
      </section>
      <div className="benefit-band"><div className="container-page grid grid-cols-2 gap-x-4 md:grid-cols-4"><div className="benefit-item"><Nfc /> Tecnologia NFC</div><div className="benefit-item"><QrCode /> QR Code integrado</div><div className="benefit-item"><Smartphone /> Conexão pelo celular</div><div className="benefit-item"><Zap /> Mais praticidade no dia a dia</div></div></div>
      <section id="plaquinhas" className="catalog">
        <div className="container-page">
          <div className="catalog-top"><div><span className="eyebrow">CONEXÕES INTELIGENTES, POSSIBILIDADES REAIS</span><h2 className="section-heading">Uma plaquinha.<br />Novas possibilidades.</h2></div><p className="paper-description">Escolha a solução que combina com o seu negócio. Mais facilidade para seus clientes, mais oportunidades para você.</p></div>
          <div className="product-grid">{products.map(product => <article key={product.name} className="product"><img className={`product-photo ${product.name === "Google" ? "google" : ""}`} src={product.image} alt={`Plaquinha inteligente ${product.name} com NFC e QR Code${product.name === "Google" ? ", modelos azul e preto" : ""}`} loading="lazy" /><div className="product-body"><span className="product-tag">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p><a className="product-link" href={whatsappUrl(product.name)} target="_blank" rel="noopener noreferrer" aria-label={`Quero minha plaquinha ${product.name}`}>QUERO ESSA PLAQUINHA <ArrowUpRight size={17} /></a></div></article>)}</div>
        </div>
      </section>
      <section id="como-funciona" className="how-section"><div className="container-page"><span className="eyebrow text-primary">TECNOLOGIA SIMPLES. EXPERIÊNCIA INTELIGENTE.</span><h2 className="section-heading">Um toque faz a conexão.</h2><div className="step-grid"><div className="step"><span className="step-number">01 / ESCOLHA</span><h3>A plaquinha certa para você</h3><p>Google, Instagram, Cardápio ou Pix. Escolha o modelo para a necessidade do seu negócio.</p></div><div className="step"><span className="step-number">02 / CONECTE</span><h3>Aproxime. Escaneie. Pronto.</h3><p>Seu cliente aproxima um celular compatível com NFC ou escaneia o QR Code da plaquinha.</p></div><div className="step"><span className="step-number">03 / TRANSFORME</span><h3>Uma experiência mais prática</h3><p>O acesso à avaliação, ao perfil, ao cardápio ou ao Pix fica à mão, sem complicação.</p></div></div></div></section>
      <section id="contato" className="contact-section"><div className="container-page contact-inner"><div><span className="eyebrow">PLACASMARTNF — TECNOLOGIA QUE CONECTA SEU NEGÓCIO!</span><h2>Seu negócio merece<br />essa conexão.</h2><p>Sua empresa merece uma experiência mais moderna, inteligente e profissional.<br />Modernize seu negócio com tecnologia!</p></div><div><Button asChild variant="ink"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle /> FALE COM UM ESPECIALISTA <ArrowUpRight /></a></Button><p className="mt-3 text-center">Cássio Domingos · (22) 98160-5225</p></div></div></section>
    </main>
    <footer className="site-footer"><div className="container-page"><div className="footer-main"><div><a href="#inicio" aria-label="PlacaSmartNF início"><Brand /></a><p className="mt-3 text-xs text-muted-foreground">Tecnologia que conecta seu negócio.</p></div><div className="footer-contact"><p className="font-semibold text-foreground">Vamos conectar seu negócio?</p><p>Responsável pelo atendimento: Cássio Domingos.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp: (22) 98160-5225.</a><p>Atendimento em Nova Friburgo e região.</p></div></div><div className="footer-bottom"><p>© PlacaSmartNF. Todos os direitos reservados.</p><p className="font-semibold text-foreground">MODERNIZE. CONECTE. DESTAQUE-SE!</p></div></div></footer>
  </>;
}
