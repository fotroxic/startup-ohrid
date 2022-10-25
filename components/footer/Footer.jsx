import Link from "next/link"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__container">
            <ul className="footer__menu">
                <h4>news</h4>
                <Link href='/general'><li>General</li></Link>
                <Link href='/entrepreneurship'><li>Entrepreneurship</li></Link>
                <Link href='/technology'><li>Technology</li></Link>
                <Link href='/startups'><li>Startup</li></Link>
                <Link href='/digital-nomads'><li>Digital Nomads</li></Link>
            </ul>
            <ul className="footer__menu">
                <h4>community</h4>
                <Link href='/companies'><li>Companies</li></Link>
                <Link href='/individuals'><li>Individuals</li></Link>
                <Link href='/coworking-spaces'><li>Coworking spaces</li></Link>
                <Link href='/institutions'><li>Institutions</li></Link>
                <Link href='/meetups'><li>Meetups</li></Link>
                <Link href='/organizations'><li>Organizations</li></Link>
            </ul>
            <ul className="footer__menu">
                <h4>Other</h4>
                <Link href='/events'><li>Events</li></Link>
                <Link href='/jobs'><li>Jobs</li></Link>
                <Link href='/about'><li>About Us</li></Link>
                <Link href='/support-our-community'><li>Support our Community!</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
            </ul>

            <div className="newsletter">
    <h4>subscribe to our newsletter</h4>
    <p>It’s not a Hogwarts owl, but you can still feel a bit of magic once our letter arrives in your inbox! Subscribe to Split Tech City newsletter!</p>
            <button>Subscribe</button>
            <div className="socials"></div>
            </div>
        </div>
    </div>
  )
}
