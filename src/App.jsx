import { useEffect, useRef } from 'react'
import personnelImg from './assets/personnel-umbrella.jpg'
import vehicleImg from './assets/armored-vehicle.jpg'
import gearImg from './assets/protective-gear.jpg'
import contactIcon from './assets/communication.svg'
import './App.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll('[data-reveal]')
    if (!targets.length) return
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

const TESTIMONIALS = [
  {
    quote:
      'Westminster handled a sensitive corporate transfer end-to-end — personnel, armored transport, and on-site detail. One point of contact, zero noise. Exactly what discretion looks like.',
    author: 'M. R.',
    role: 'Chief of Staff, private office',
  },
  {
    quote:
      "Their integrated approach saved us months of vendor coordination. Drivers, guards and equipment all under one license — and the standard never wavered.",
    author: 'J. L.',
    role: 'Director of Operations, Toronto',
  },
  {
    quote:
      "We white-labelled their armored fleet for a high-profile client engagement. The kit, the people, the paperwork — it all just worked.",
    author: 'A. K.',
    role: 'Founder, partner security firm',
  },
]

const WHATSAPP_NUMBER = '6134834356'
const WHATSAPP_DISPLAY = '613-483-4356'
const WHATSAPP_LINK = `https://wa.me/1${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Westminster Security, I'd like to discuss your services."
)}`

function App() {
  const stageRef = useReveal()

  return (
    <div className="ws-site" ref={stageRef}>
      <nav className="ws-nav">
        <div className="ws-wordmark">
          WESTMINSTER<span>.</span>
        </div>
        <ul className="ws-navlinks">
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#why">Why Westminster</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="ws-hero">
        <p className="ws-eyebrow ws-rise" style={{ '--delay': '0ms' }}>Waterloo Region &amp; beyond</p>
        <h1 className="ws-headline ws-rise" style={{ '--delay': '120ms' }}>
          Security, fully<br />under one roof.
        </h1>
        <p className="ws-lede ws-rise" style={{ '--delay': '260ms' }}>
          Westminster Security is a premium, full-spectrum security provider —
          professional personnel, armored vehicles and protective gear,
          delivered under one licensed umbrella.
        </p>
        <div className="ws-cta-row ws-rise" style={{ '--delay': '400ms' }}>
          <a className="ws-btn ws-btn--solid" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <img className="ws-wa-icon" src={contactIcon} alt="" /> Contact via WhatsApp
          </a>
          <a className="ws-btn" href="#capabilities">Our capabilities</a>
        </div>
      </header>

      <div className="ws-trust">
        <span className="ws-kicker">Fully licensed · Integrated ecosystem</span>
        <div className="ws-trust-marks">
          <span>Personnel</span>
          <span>Vehicles</span>
          <span>Equipment</span>
        </div>
      </div>

      <section id="capabilities" className="ws-services">
        <article className="ws-service" data-reveal>
          <div className="ws-service__copy">
            <p className="ws-kicker">01 — Personnel</p>
            <h2>Security personnel services</h2>
            <p>
              Licensed security guards and close-protection officers for
              high-net-worth individuals, corporate executives and sensitive
              operations. Vetted, trained and led by senior operators.
            </p>
            <a className="ws-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Enquire about personnel
            </a>
          </div>
          <div className="ws-service__media">
            <img src={personnelImg} alt="Westminster Security personnel detail" />
          </div>
        </article>

        <article className="ws-service ws-service--reverse" data-reveal>
          <div className="ws-service__media">
            <img src={vehicleImg} alt="Armored vehicle" />
          </div>
          <div className="ws-service__copy">
            <p className="ws-kicker">02 — Hardware</p>
            <h2>Armored vehicle solutions</h2>
            <p>
              Access to bulletproof and armored vehicles — from luxury
              Mercedes and BMW models to practical consumer platforms.
              Available for personal use, or for security firms looking to
              differentiate their service offering.
            </p>
            <a className="ws-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Request the fleet brief
            </a>
          </div>
        </article>

        <article className="ws-service" data-reveal>
          <div className="ws-service__copy">
            <p className="ws-kicker">03 — Equipment</p>
            <h2>Protective gear &amp; equipment</h2>
            <p>
              Bulletproof vests and professional-grade security equipment —
              sourced, fitted and supplied to our own teams and to qualified
              partners across the region.
            </p>
            <a className="ws-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Discuss equipment
            </a>
          </div>
          <div className="ws-service__media">
            <img src={gearImg} alt="Protective gear and equipment" />
          </div>
        </article>
      </section>

      <section id="why" className="ws-why">
        <p className="ws-eyebrow">Why Westminster</p>
        <h2 className="ws-headline ws-headline--md">
          An integrated ecosystem others can't replicate.
        </h2>
        <p className="ws-lede ws-lede--center">
          We're not a standard security company. We're fully licensed to
          provide an integrated security ecosystem — personnel expertise,
          premium hardware and cutting-edge protective solutions, from a
          single point of accountability.
        </p>
        <ul className="ws-why-pillars">
          <li data-reveal>
            <span className="ws-kicker">For</span>
            <p>High-net-worth individuals requiring comprehensive security.</p>
          </li>
          <li data-reveal>
            <span className="ws-kicker">For</span>
            <p>Corporate clients with sensitive operations.</p>
          </li>
          <li data-reveal>
            <span className="ws-kicker">For</span>
            <p>Security firms upgrading their service tier and differentiation.</p>
          </li>
        </ul>
      </section>

      <section className="ws-testimonials">
        <p className="ws-kicker ws-kicker--center">In confidence</p>
        <h2 className="ws-headline ws-headline--md ws-testimonials__title">
          Trusted where it matters.
        </h2>
        <p className="ws-testimonials__note">
          Names are withheld at our clients' request. Verification available on
          serious enquiries.
        </p>
        <ul className="ws-testimonials__list">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.author}
              className="ws-quote"
              data-reveal
              style={{ '--delay': `${i * 120}ms` }}
            >
              <span className="ws-quote__mark" aria-hidden="true">&ldquo;</span>
              <p className="ws-quote__body">{t.quote}</p>
              <div className="ws-quote__attribution">
                <span className="ws-quote__author">{t.author}</span>
                <span className="ws-quote__role">{t.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="ws-contact">
        <div className="ws-contact__grid">
          <div data-reveal>
            <p className="ws-eyebrow">Discreet enquiries</p>
            <h2 className="ws-headline ws-headline--sm">Let's talk security.</h2>
            <p className="ws-contact__intro">
              WhatsApp is the fastest way to reach us. All enquiries are
              handled in confidence.
            </p>
            <div className="ws-contact__actions">
              <dl className="ws-contact__meta">
                <div>
                  <dt>Phone</dt>
                  <dd><a href={`tel:+1${WHATSAPP_NUMBER}`}>+1 {WHATSAPP_DISPLAY}</a></dd>
                </div>
                <div>
                  <dt>Headquarters</dt>
                  <dd>Waterloo Region, Ontario</dd>
                </div>
              </dl>
            </div>
          </div>

          <form
            className="ws-contact__form"
            data-reveal
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              const name = data.get('name')
              const message = data.get('message')
              const text = `Hello Westminster Security, this is ${name}. ${message}`
              window.open(
                `https://wa.me/1${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
                '_blank',
                'noreferrer'
              )
            }}
          >
            <label>
              <span>Name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              <span>Email or phone</span>
              <input name="contact" type="text" required autoComplete="email" />
            </label>
            <label>
              <span>How can we help?</span>
              <textarea name="message" rows="4" required />
            </label>
            <button type="submit" className="ws-btn ws-btn--solid ws-contact__submit">
              <img className="ws-wa-icon" src={contactIcon} alt="" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="ws-footer">
        <span>© {new Date().getFullYear()} Westminster Security</span>
        <span>Waterloo Region, ON · WhatsApp {WHATSAPP_DISPLAY}</span>
      </footer>

      <a
        className="ws-fab"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label={`Message Westminster Security on WhatsApp at ${WHATSAPP_DISPLAY}`}
      >
        <img className="ws-wa-icon" src={contactIcon} alt="" />
        WhatsApp us
      </a>
    </div>
  )
}

export default App
