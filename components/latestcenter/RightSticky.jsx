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
        <h4>MOST READ</h4>
        <div className="most-block">
            <h5> General </h5>
            <p> Split Tech City eBook: summing up the growth of our tech community! </p>
        </div>
        <div className="most-block">
            <h5> Internationals </h5>
            <p> Split Tech City podcast: ten stories about choosing to live in Croatia! </p>
        </div>
        <div className="most-block">
            <h5> Startups </h5>
            <p> MetaBelly: Split’s startup that follows the gut feeling! </p>
        </div>
        <div className="most-block">
            <h5> General </h5>
            <p> The eventful second quarter of 2022! </p>
        </div>
        <div className="most-block">
            <h5> Startups </h5>
            <p> STup! was a combination of youth, innovation, learning, and lots of fun! </p>
        </div>
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
