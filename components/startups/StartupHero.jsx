import Link from "next/link"

export default function StartupHero() {
  return (
    <div className="dn__hero st__background">
    <div className="dn__hero__container">
        <div className="dn__details">
       <Link href='#'><h3>Startups</h3></Link>
        <h2> is formed by people, startups in their various stages and various types of organizations.
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
