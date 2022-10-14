import Link from "next/link"


export default function MidBanner() {
  return (
    <div className="midbanner">
        <div className="midbanner__container">
            <div className="banner__left">
                <div className="banner__text">
                    <Link href='/catergory/general'><h4>General</h4></Link>
                    <Link href='/fevtival-of-technology'><h2>Festival of Technology and Entrepreneurship Speaker: Prashant Vaz</h2></Link>
                    <Link href='/author/integrit'><h4>Integrit</h4></Link>
                    </div>
            </div>
            <div className="banner__right">


            </div>
        </div>
    </div>
  )
}