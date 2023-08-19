import Link from 'next/link'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaYoutube} from 'react-icons/fa'
export default function RightSticky() {
  return (
    <div className="right-container">
    <div className="right-block">
        <h2> Follow us on social media ! </h2>
        <div className="right-desc">
        We gather and empower our community online, as well as offline. Join us in lectures, workshops, and meetups we are organizing!
        </div>
        <div className="social-container">
    <div className="social-icon">
    <FaFacebook className='icons' />
    </div>
    <div className="social-icon">
    <FaTwitter  className='icons'/>
    </div>
    <div className="social-icon">
    <FaInstagram className='icons' />
    </div>
    <div className="social-icon">
    <FaLinkedin  className='icons' />
    </div>
    <div className="social-icon">
    <FaYoutube  className='icons' />
    </div>
    </div>
    </div>


    <div className="right-block">
        <h2> Volunteer </h2>
        <div className="right-desc">
        Become a part of our volunteer team and invest your skills in building this positive story and developing our entire community.
        </div>
        <button type='button'> Apply </button>
    </div>

    <div className="most-read">
        <h4>Explore</h4>
       <Link href={"/community/companies"}>
       <div className="most-block">
            <h5> Company </h5>
            <p> Expore More </p>
        </div></Link>
       <Link href={"/community/startup"}>
       <div className="most-block">
            <h5> Startups </h5>
            <p> Expore More </p>
        </div></Link>
       <Link href={"/community/individual"}>
       <div className="most-block">
            <h5> Individual </h5>
            <p> Expore More </p>
        </div></Link>
       <Link href={"/community/digital-nomad"}>
       <div className="most-block">
            <h5> Digital Nomads </h5>
            <p> Expore More </p>
        </div></Link>
       <Link href={"/community/coworking-spaces"}>
       <div className="most-block">
            <h5> Coworking Spaces </h5>
            <p> Expore More </p>
        </div></Link>
       <Link href={"/community/institutions"}>
       <div className="most-block">
            <h5> Institutions </h5>
            <p> Expore More </p>
        </div></Link>
       <Link href={"/community/organizations"}>
       <div className="most-block">
            <h5> Organizations </h5>
            <p> Expore More </p>
        </div></Link>
    </div>
    <div className='membership'>
    <div className="header__buttons right__sticky__buttons">
                <Link href="#"><button>Become a Member</button></Link>
                <Link href="#"><button>Become a Partner</button></Link>
            </div>
    </div>


</div>
  )
}
