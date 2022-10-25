import Link from "next/link"

export default function DnHero() {
  return (
   
    <div className="news__hero">
        <div className="news__hero__container">
            <div className="news__details">
           <Link href='#'><h3>WorldWide</h3></Link>
            <h2>Tilde loop is a new member of the Split tech city community!
            </h2>
            <div className="news__creator">
                <img src="#" alt="" />
                <p>Split Tech City</p>
            </div>
            </div>
        </div>
    </div>
   
  )
}
