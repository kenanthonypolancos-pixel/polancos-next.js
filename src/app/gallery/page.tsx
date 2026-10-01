const moments = [
  "A night under the lights",
  "Bassline in the open air",
  "One crowd, one rhythm",
  "Voice above the noise",
  "Backstage before the set",
  "The band in full flight",
];

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <div className="gallery-heading"><p className="kicker">On the road / In the moment</p><h1 className="page-title">Out there<br />with you.</h1></div>
      <section aria-label="Live music photo gallery" className="gallery-grid">
        {moments.map((moment, index) => (
          <div aria-label={moment} className="gallery-item" key={moment} role="img">
            <span className="image-caption"><span>{moment}</span><span className="photo-index">0{index + 1}</span></span>
          </div>
        ))}
      </section>
      <footer className="site-footer"><span className="footer-note">JAHMAN K&apos;NJO / LIVE PHOTOGRAPHS</span><span className="footer-copy">Every room has its own rhythm.</span></footer>
    </main>
  );
}