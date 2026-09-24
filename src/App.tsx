import { useState } from 'react'
import './App.css'

const ArrowUpRight = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" />
  </svg>
)

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" />
  </svg>
)

function App() {
  const [showDemo, setShowDemo] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Nexora home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>NEXORA</span>
        </button>
        <div className="nav-links">
          <button onClick={() => scrollTo('platform')}>Platform</button>
          <button onClick={() => scrollTo('impact')}>Impact</button>
          <button onClick={() => scrollTo('about')}>About us</button>
        </div>
        <button className="nav-cta" onClick={() => setShowDemo(true)}>Request a demo <ArrowUpRight /></button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Intelligent data. Better care.</div>
          <h1>See the full<br /><em>picture</em> of health.</h1>
          <p className="hero-lede">Nexora turns complex medical data into clear, actionable intelligence — helping teams make better decisions for every patient.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setShowDemo(true)}>Explore the platform <ArrowUpRight /></button>
            <button className="text-btn" onClick={() => scrollTo('impact')}>Our impact <span>↓</span></button>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract visualization of connected medical data">
          <div className="visual-ring ring-a" /><div className="visual-ring ring-b" /><div className="visual-ring ring-c" />
          <div className="visual-core"><SparkIcon /><span>LIVE<br /><b>INSIGHT</b></span></div>
          <span className="data-tag tag-a">PATIENT DATA <b>98.4%</b></span>
          <span className="data-tag tag-b">12.8m <small>records</small></span>
          <span className="data-tag tag-c">◈  SECURE / ENCRYPTED</span>
          <span className="visual-line line-a" /><span className="visual-line line-b" />
        </div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section className="trusted">
        <span>Trusted by teams building the future of care</span>
        <div className="logo-row"><b>ARCWELL</b><b>northstar<span>+</span></b><b>VITALIS</b><b className="mono">M•D / LABS</b><b>HELIX<span>®</span></b></div>
      </section>

      <section className="section platform" id="platform">
        <div className="section-heading">
          <div><span className="section-number">01 — THE PLATFORM</span><h2>From fragmented<br /><em>to unified.</em></h2></div>
          <p>Healthcare data is powerful when it connects. Our infrastructure brings every signal into focus, so your team can move with confidence.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-large">
            <div className="card-icon"><span className="bars"><i /><i /><i /><i /></span></div>
            <span className="card-label">01 / CONNECT</span>
            <h3>One source<br />of truth.</h3>
            <p>Securely unify clinical, genomic, and operational data in one living view.</p>
            <span className="card-arrow"><ArrowUpRight /></span>
          </article>
          <article className="feature-card dark-card">
            <div className="waveform"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <span className="card-label">02 / UNDERSTAND</span>
            <h3>Patterns<br />made visible.</h3>
            <p>Surface the signal in the noise with intelligence that learns as you do.</p>
            <span className="card-arrow"><ArrowUpRight /></span>
          </article>
          <article className="feature-card feature-wide">
            <div className="mini-chart"><span /><span /><span /><span /><span /><span /></div>
            <div><span className="card-label">03 / ACT</span><h3>Decisions at<br /><em>the speed of care.</em></h3><p>Turn insight into impact, with workflows designed around real people.</p></div>
            <span className="card-arrow"><ArrowUpRight /></span>
          </article>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="section-heading impact-heading">
          <div><span className="section-number">02 — THE DIFFERENCE</span><h2>Good data<br /><em>changes everything.</em></h2></div>
          <p>When information moves freely, breakthroughs follow. Nexora gives the world's most ambitious care teams a clearer way forward.</p>
        </div>
        <div className="metrics">
          <div><strong>42<span>%</span></strong><p>faster clinical<br />decision-making</p></div>
          <div><strong>3.2<span>x</span></strong><p>more actionable<br />patient insights</p></div>
          <div><strong>99<span>.9%</span></strong><p>data security<br />uptime</p></div>
        </div>
      </section>

      <section className="closing" id="about">
        <div className="closing-pattern" />
        <span className="section-number">03 — LET'S BUILD WHAT'S NEXT</span>
        <h2>Better data.<br /><em>Better care.</em></h2>
        <button className="primary-btn light-btn" onClick={() => setShowDemo(true)}>Start a conversation <ArrowUpRight /></button>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-mark"><span /><span /><span /></span><span>NEXORA</span></div><span>© 2025 Nexora Health, Inc.</span><span>Built for better outcomes.</span></footer>

      {showDemo && <div className="modal-backdrop" onClick={() => setShowDemo(false)}>
        <div className="demo-modal" onClick={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowDemo(false)} aria-label="Close dialog">×</button>
          <span className="section-number">LET'S CONNECT</span>
          <h2>Bring your data<br /><em>to life.</em></h2>
          <p>Tell us a little about your team and we'll be in touch within one business day.</p>
          <form onSubmit={(event) => { event.preventDefault(); setShowDemo(false) }}>
            <input aria-label="Work email" type="email" placeholder="Work email" required />
            <button className="primary-btn" type="submit">Request a demo <ArrowUpRight /></button>
          </form>
        </div>
      </div>}
    </main>
  )
}

export default App
