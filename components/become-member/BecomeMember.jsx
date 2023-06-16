import Link from "next/link"

export default function BecomeMember() {
  return (
    <div className="become__member">
        <div className="become__member__container">
            <div className="become__member__left">
           <div className="general__info">
           <h1>Join Us</h1>
            <p>GOT A QUESTION?</p>
<p>It can take some time to get back to you. Check out our FAQs for a fast answer</p>
<Link href='#'><p>Go to the FAQs page</p></Link>
           </div>

<div className="general__communication">
<h4>General Communication</h4>
<p>integrit@email.com</p>
<p>+389 77 777 777</p>
</div>
            </div>
            <div className="become__member__right">
                <Link href="/register"><button>Join Us!</button></Link>
            </div>
        </div>
    </div>
  )
}
