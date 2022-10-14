import Link from "next/link"

export default function SecondHeader() {
  return (
    <div className="second__header">
        <div className="s__header__container">
            <div className="header__links">
            <Link href="#"><p>Partners</p></Link>
            <Link href="#"><p>Postings</p></Link>
            </div>
            <div className="header__buttons">
                <Link href="/become-member"><button>Become a Member</button></Link>
                <Link href="/become-partner"><button>Become a Partner</button></Link>
            </div>
        </div>
    </div>
  )
}