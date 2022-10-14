import Link from "next/link"

export default function HeroBanner() {
  return (
    <div className="hero">
        <div className="hero__container">
            <div className="main__banner">
                <div className="text__info">
                        <h2>
                        The community that always looks ahead!
                        </h2>
                        <p>We are dedicated to connecting and promoting Split’s tech community and encouraging its development.</p>
                        <Link href='/community'><button>See More</button></Link>
                        
                </div>
                <div className="banner__img">
                    <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2021/05/frontpage-en.png?resize=500%2C476&ssl=1" alt="" />
                </div>
            </div>
            <div className="hero__catergories">
                <h2>We are bringing you interesting content about our community!</h2>
                <ul className="categories">
                   <li>
                   <Link href='/news'>
                        <button>News</button>
                    </Link>
                   </li>
                   <li>
                   <Link href='/companies'>
                        <button>Companies</button>
                    </Link>
                   </li>
                   <li>
                   <Link href='/startups'>
                        <button>Startups</button>
                    </Link>
                   </li>
                   <li>
                   <Link href='/jobs'>
                        <button>Jobs</button>
                    </Link>
                   </li>
                </ul>
            </div>
        </div>
    </div>
  )
}