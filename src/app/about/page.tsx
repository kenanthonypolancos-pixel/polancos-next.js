export default function AboutPage() {
  return (
    <main>
      <section className="page-shell about-layout">
        <div aria-label="Singer performing into a microphone" className="about-photo" role="img" />
        <div className="about-copy">
          <p className="kicker">The man behind the music</p>
          <h1 className="page-title">Keep the<br />message moving.</h1>
          <p>Jahman K&apos;Njo is an independent reggae artist drawn to songs that hold both warmth and weight. His sound follows the long line of roots music while making room for the everyday stories happening right now.</p>
          <p>Inspired by Bob Marley&apos;s fearless clarity, Rebelution&apos;s easy West Coast lift, and SOJA&apos;s communal spirit, he brings a personal point of view to a music built for everyone in the room.</p>
          <div className="bio-meta"><div>Based in<strong>California, USA</strong></div><div>Sound<strong>Roots / Reggae / Live</strong></div></div>
        </div>
      </section>
      <footer className="site-footer"><span className="footer-note">JAHMAN K&apos;NJO / THE STORY</span><span className="footer-copy">Carry the good forward.</span></footer>
    </main>
  );
}