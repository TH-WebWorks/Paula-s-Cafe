import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paula’s Cafe | Valley Junction",
  description:
    "A neighborhood lunch counter at 524 Elm Street in Valley Junction, West Des Moines.",
};

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=524+Elm+Street+West+Des+Moines+IA+50265";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Paula’s Cafe home">
          <span>Paula’s</span>
          <small>Cafe</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">Our place</a>
          <a href="#lunch">Lunch</a>
          <a className="nav-visit" href="#visit">Visit us</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Valley Junction · West Des Moines</p>
          <h1>
            Good food.
            <br />
            <em>Good people.</em>
          </h1>
          <p className="hero-intro">
            Pull up a stool, settle into a red booth, and enjoy a simple,
            satisfying lunch in the heart of Valley Junction.
          </p>
          <a className="button" href="#visit">
            Come see us <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-photo">
          <img
            src="/counter.webp"
            alt="The classic lunch counter and red stools inside Paula’s Cafe"
          />
          <div className="open-note" aria-hidden="true">
            <span>THE</span>
            PLACE
            <small>for lunch</small>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <span>Sandwiches</span><i>◆</i><span>Homemade comfort</span><i>◆</i><span>Friendly service</span><i>◆</i><span>Valley Junction</span>
        </div>
      </section>

      <section className="story" id="about">
        <div className="story-image photo-frame">
          <img
            src="/dining-room.webp"
            alt="Red booths, café tables, and checkered tablecloths at Paula’s Cafe"
          />
          <span className="photo-label">Stay awhile</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">A real neighborhood café</p>
          <h2>Lunch just the way you remember it.</h2>
          <p className="lead">
            No fuss. No pretense. Just a welcoming table, a satisfying plate,
            and the kind of place where lunch feels like a proper break in your
            day.
          </p>
          <p>
            Paula’s is tucked into Valley Junction, with classic diner details,
            plenty of local character, and a seat waiting for you.
          </p>
          <a className="text-link" href="#lunch">See what’s for lunch <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <section className="lunch" id="lunch">
        <div className="lunch-copy">
          <p className="eyebrow light">Made for the midday</p>
          <h2>Come hungry.<br />Leave happy.</h2>
          <p>
            Think stacked sandwiches, crisp sides, homemade soups, and the
            familiar favorites that always hit the spot.
          </p>
          <ul className="menu-notes" aria-label="Lunch favorites">
            <li><span>01</span> Sandwiches &amp; sides</li>
            <li><span>02</span> Soups &amp; daily specials</li>
            <li><span>03</span> Something sweet</li>
          </ul>
          <p className="menu-caveat">Selections and specials may change—stop in to see what’s cooking.</p>
        </div>
        <div className="lunch-image photo-frame">
          <img
            src="/sandwich.webp"
            alt="A fresh sandwich with a pickle and fruit at Paula’s Cafe"
          />
          <span className="photo-label">Made with care</span>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-photo">
          <img
            src="/storefront.webp"
            alt="The Paula’s Cafe storefront at 524 Elm Street"
          />
        </div>
        <div className="visit-card">
          <p className="eyebrow">Find your way to Paula’s</p>
          <h2>Meet us on Elm Street.</h2>
          <address>
            <strong>Paula’s Cafe</strong><br />
            524 Elm Street<br />
            West Des Moines, IA 50265
          </address>
          <a className="button button-dark" href={mapUrl} target="_blank" rel="noreferrer">
            Get directions <span aria-hidden="true">↗</span>
          </a>
          <p className="visit-note">In historic Valley Junction</p>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span>Paula’s</span> Cafe
        </div>
        <p>Good food &amp; friendly service in Valley Junction.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
