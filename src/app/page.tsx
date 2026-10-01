import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Independent reggae / sound for the people</p>
          <h1>Roots.<span>Rhythm.</span>Rebel.</h1>
          <p className="hero-copy">
            Jahman K&apos;Njo makes music with a steady pulse, an open heart, and
            something real to say.
          </p>
          <div className="button-row">
            <Link className="button-primary" href="/portfolio">Explore the sound</Link>
            <Link className="text-link" href="/about">Meet Jahman <span aria-hidden="true">-&gt;</span></Link>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="color-bar"><span /><span /><span /></div>
      <section className="intro-section">
        <div className="intro-grid">
          <div>
            <p className="kicker">A living tradition</p>
            <h2 className="section-heading">Old roots.<br />New fire.</h2>
          </div>
          <div>
            <p className="intro-copy">
              From the conscious songwriting of Bob Marley to the modern
              California pulse of Rebelution and SOJA, Jahman carries the
              music forward in his own voice: warm, direct, and built to bring
              people together.
            </p>
            <div className="influence-strip">
              <div className="influence"><strong>Bob Marley</strong><span>The roots of a message</span></div>
              <div className="influence"><strong>Rebelution</strong><span>West coast energy</span></div>
              <div className="influence"><strong>SOJA</strong><span>Rhythm with purpose</span></div>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <span className="footer-note">JAHMAN K&apos;NJO / ROOTS, RHYTHM & RESISTANCE</span>
        <span className="footer-copy">Independent music for a brighter day.</span>
      </footer>
    </main>
  );
}
