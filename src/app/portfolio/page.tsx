import Link from "next/link";

const projects = [
  { number: "01", title: "Higher Ground", detail: "A roots-forward set about finding your footing and keeping your people close.", year: "2025" },
  { number: "02", title: "Open Road Sessions", detail: "Stripped-back live recordings, captured in one room with the whole band.", year: "2024" },
  { number: "03", title: "One People, One Love", detail: "A community-first series of songs made for shared voices and open-air stages.", year: "2023" },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <div className="page-topline">
        <div><p className="kicker">Selected work / 2023-25</p><h1 className="page-title">The body<br />of work.</h1></div>
        <p className="intro-copy">Songs, sessions, and live projects shaped by roots reggae and a restless present.</p>
      </div>
      <div className="portfolio-list">
        {projects.map((project) => (
          <article className="work-row" key={project.number}>
            <span className="track-index">{project.number}</span><h2>{project.title}</h2>
            <p>{project.detail}</p><span className="work-year">{project.year}</span>
          </article>
        ))}
      </div>
      <p className="intro-copy">Want to bring the music to your stage? <Link className="text-link" href="mailto:booking@jahmanknjo.com">Get in touch <span aria-hidden="true">-&gt;</span></Link></p>
      <footer className="site-footer"><span className="footer-note">JAHMAN K&apos;NJO / SELECTED WORK</span><span className="footer-copy">Independent music for a brighter day.</span></footer>
    </main>
  );
}