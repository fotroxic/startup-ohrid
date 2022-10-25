import Link from "next/link"

export default function JobsHero() {
  return (
   
    <div className="jobs__hero">
        <div className="jobs__hero__container">
            <div className="jobs__details">
           <Link href='#'><h3>Jobs</h3></Link>
            <h2>Here you can check all the open job positions from Split Tech City community companies in one place.
            </h2>
            </div>
        </div>
    </div>
   
  )
}
