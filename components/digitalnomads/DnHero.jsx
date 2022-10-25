import Link from "next/link"

export default function DnHero() {
  return (
   
    <div className="dn__hero">
        <div className="dn__hero__container">
            <div className="dn__details">
           <Link href='#'><h3>Digital Nomads</h3></Link>
            <h2>Keeping the atmosphere lively with another
                LocalsnNomads!
            </h2>
            <div className="dn__creator">
                <img src="#" alt="" />
                <p>Nikolina Kukoc</p>
            </div>
            </div>
        </div>
    </div>
   
  )
}
