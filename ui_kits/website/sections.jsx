/* SOLETTA — marketing website UI kit. Sections compose the design-system
   primitives (window.SolettaDesignSystem_19cf15) into a real landing page. */
const DS = window.SolettaDesignSystem_19cf15;
const { Logo, Button, Badge, Stat, Card, FeatureBadge } = DS;

/* Lucide icon helper (shared) */
const Ic = ({ n, s = 24, sw = 1.75 }) => {
  const d = (window.lucide && window.lucide.icons[n]) || [];
  return React.createElement('svg', { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' },
    d.map((c, i) => React.createElement(c[0], { ...c[1], key: i })));
};

const A = '../../assets';
const LOGO = '../../assets/logo';

/* ----------------------------------------------------------------- NAV */
function NavBar({ onContact }) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('#kit-scroll');
    const onScroll = () => setSolid((el ? el.scrollTop : window.scrollY) > 60);
    const t = el || window;
    t.addEventListener('scroll', onScroll);
    return () => t.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['El destino', 'Masterplan', 'Planes', 'Contacto'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 48px',
      background: solid ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--duration-normal) var(--ease-standard), border-color var(--duration-normal)',
    }}>
      <Logo variant="wordmark" color={solid ? 'marine' : 'white'} size={32} assetBase={LOGO} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {links.map(l => (
          <a key={l} href="#" onClick={e => e.preventDefault()} style={{
            fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
            color: solid ? 'var(--ink-700)' : 'rgba(255,255,255,0.92)', textDecoration: 'none',
          }}>{l}</a>
        ))}
        <Button variant="accent" size="sm" leftIcon={<Ic n="Phone" s={15} />} onClick={onContact}>Contáctame</Button>
      </nav>
    </header>
  );
}

/* ---------------------------------------------------------------- HERO */
function Hero() {
  return (
    <section style={{ position: 'relative', height: 640, marginTop: -74, display: 'flex', alignItems: 'flex-end' }}>
      <img src={`${A}/imagery/terrace-sunset.png`} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-full)' }} />
      <div style={{ position: 'relative', padding: '0 48px 64px', maxWidth: 880 }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <Badge variant="outline-light" size="sm">Sisal · Yucatán</Badge>
          <Badge variant="outline-light" size="sm">Pueblo Mágico</Badge>
          <Badge variant="outline-light" size="sm">Playa Platino</Badge>
        </div>
        <h1 className="soletta-heading" style={{ color: '#fff', fontSize: 60, margin: 0, maxWidth: 760 }}>
          <span style={{ fontWeight: 300 }}>Tu siguiente hogar</span><br />tiene vista al mar.
        </h1>
        <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 19, lineHeight: 1.5, maxWidth: 560, marginTop: 18 }}>
          Ancla tu inversión a un puerto reconocido, con plusvalía en aumento y la calma de la costa yucateca.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 28, alignItems: 'center' }}>
          <Button variant="accent" size="lg" leftIcon={<Ic n="Phone" s={18} />}>Contáctame</Button>
          <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>Ver masterplan</Button>
          <span style={{ color: 'var(--text-on-dark-muted)', fontSize: 14, marginLeft: 8 }}>Lotes desde <b style={{ color: '#fff' }}>$837,760</b></span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FEATURES */
function Features() {
  const items = [
    { i: 'TrendingUp', v: '24%', c: 'Plusvalía en Soletta Chicxulub' },
    { i: 'HardHat', v: 'Infraestructura', c: 'Lista para iniciar a construir' },
    { i: 'FileCheck', v: 'Escrituración', c: 'Inmediata · certeza jurídica' },
    { i: 'Clock', v: '40 min', c: 'De Mérida' },
  ];
  return (
    <section style={{ padding: '72px 48px', background: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40, maxWidth: 1120, margin: '0 auto' }}>
        {items.map(it => (
          <div key={it.v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
            <FeatureBadge icon={<Ic n={it.i} s={32} />} size={76} />
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22, color: 'var(--marine-700)' }}>{it.v}</div>
            <div style={{ fontSize: 15, color: 'var(--ink-500)', lineHeight: 1.45, maxWidth: 180 }}>{it.c}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- MASTERPLAN */
function Masterplan() {
  return (
    <section style={{ background: 'var(--sand-50)', padding: '80px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', maxWidth: 1120, margin: '0 auto' }}>
        <div>
          <div className="soletta-eyebrow" style={{ marginBottom: 14 }}>El masterplan</div>
          <h2 className="soletta-heading" style={{ fontSize: 40, margin: '0 0 18px' }}>
            Tierra firme, delimitada y lista.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-500)', lineHeight: 1.6, marginBottom: 28 }}>
            Calle blanca compactada, lotes delimitados con mojoneras y tendido eléctrico a pie de lote. Acceso directo al mar a solo 90 metros.
          </p>
          <div style={{ display: 'flex', gap: 48 }}>
            <Stat caption="Medidas desde" value="8 × 20 m" labelStyle="plain" color="ink" align="left" size="md" />
            <Stat caption="Acceso al mar" value="90 m" labelStyle="plain" color="ink" align="left" size="md" />
            <Stat caption="Disponibles" value="35" label="lotes" labelStyle="plain" color="ink" align="left" size="md" />
          </div>
        </div>
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: 420 }}>
          <img src={`${A}/imagery/masterplan-aerial.png`} alt="Masterplan Soletta Sisal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- PLANS */
function Plans() {
  const [sel, setSel] = React.useState(1);
  const plans = [
    { name: 'Inversionista Estratégico', tag: 'Te da tiempo sin quitarte ventaja', stats: [['50%', 'De enganche'], ['50%', 'A 12 o 24 MSI']], disc: 'Hasta 10% de descuento' },
    { name: 'Patrimonio Activo', tag: 'Una inversión equilibrada', stats: [['25%', 'De enganche'], ['50%', 'A 12 o 24 MSI'], ['25%', 'Al cierre']], disc: 'Hasta 10% de descuento' },
    { name: 'Máxima Rentabilidad', tag: 'La decisión más rentable', stats: [['90%', 'Primer pago'], ['10%', 'En 45 días']], disc: '15% de descuento' },
  ];
  return (
    <section style={{ padding: '84px 48px', background: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="soletta-eyebrow" style={{ marginBottom: 12 }}>Financiamiento a tu medida</div>
        <h2 className="soletta-heading" style={{ fontSize: 40, margin: 0 }}>
          <span style={{ fontWeight: 300 }}>Tu visión merece </span>un plan a su medida
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 1080, margin: '0 auto' }}>
        {plans.map((p, idx) => {
          const active = sel === idx;
          return (
            <div key={p.name} onClick={() => setSel(idx)} style={{
              cursor: 'pointer', borderRadius: 'var(--radius-lg)', padding: '32px 28px',
              background: active ? 'var(--marine-900)' : '#fff',
              border: `1px solid ${active ? 'transparent' : 'var(--border-subtle)'}`,
              boxShadow: active ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
              transition: 'all var(--duration-normal) var(--ease-out)',
              transform: active ? 'translateY(-6px)' : 'none',
            }}>
              <Badge variant={active ? 'coral' : 'soft'} size="sm">{`Plan ${idx + 1}`}</Badge>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 21, margin: '14px 0 4px', color: active ? '#fff' : 'var(--ink-900)' }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: active ? 'var(--text-on-dark-muted)' : 'var(--ink-400)', margin: '0 0 24px' }}>{p.tag}</p>
              <div style={{ display: 'flex', gap: 24, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {p.stats.map(s => <Stat key={s[1]} value={s[0]} label={s[1]} color={active ? 'white' : 'marine'} align="left" size="md" />)}
              </div>
              <div style={{ marginTop: 26, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, color: active ? 'var(--coral-300)' : 'var(--coral-600)' }}>{p.disc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CONTACT */
const Contact = React.forwardRef(function Contact(_, ref) {
  const [sent, setSent] = React.useState(false);
  const { Input } = DS;
  return (
    <section ref={ref} style={{ background: 'var(--marine-900)', padding: '84px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>
        <div>
          <div className="soletta-eyebrow" style={{ color: 'var(--coral-300)', marginBottom: 14 }}>Hablemos hoy mismo</div>
          <h2 className="soletta-heading" style={{ color: '#fff', fontSize: 38, margin: '0 0 16px' }}>
            Elige tu ubicación ideal frente al mar.
          </h2>
          <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 17, lineHeight: 1.6 }}>
            Te contactamos en menos de 24 horas con el esquema que mejor se ajuste a tu estrategia financiera.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
            <Badge variant="outline-light" size="sm">Soletta Sisal</Badge>
            <Badge variant="outline-light" size="sm">Soletta Chicxulub</Badge>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-xl)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <FeatureBadge icon={<Ic n="Check" />} variant="marine" size={64} />
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 22, margin: '18px 0 6px' }}>¡Gracias!</h3>
              <p style={{ color: 'var(--ink-500)', fontSize: 15, margin: 0 }}>Un asesor Soletta te contactará pronto.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Nombre" placeholder="Tu nombre completo" />
              <Input label="Correo" type="email" placeholder="tu@correo.com" leftIcon={<Ic n="Mail" s={18} />} />
              <Input label="Teléfono" placeholder="999 000 0000" leftIcon={<Ic n="Phone" s={18} />} />
              <Button variant="accent" size="lg" fullWidth onClick={() => setSent(true)} style={{ marginTop: 6 }}>Quiero más información</Button>
              <p style={{ fontSize: 12, color: 'var(--ink-400)', textAlign: 'center', margin: 0 }}>Aplican restricciones · Precios sujetos a disponibilidad</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------- FOOTER */
function Footer() {
  return (
    <footer style={{ background: '#11212F', padding: '48px 48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
      <Logo variant="full" color="white" subbrand="Beach Life Residential" size={70} assetBase={LOGO} />
      <div style={{ textAlign: 'right', color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>
        <div style={{ letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: 11, marginBottom: 4 }}>Un desarrollo de LINMEX</div>
        grupolinmex.mx · Sisal &amp; Chicxulub, Yucatán
      </div>
    </footer>
  );
}

Object.assign(window, { NavBar, Hero, Features, Masterplan, Plans, Contact, Footer, KitIc: Ic });
