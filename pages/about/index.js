import Support from "../../components/support/Support";


export default function About() {
  return (
    <div className="aboutUs">
        <div className="about__container">
            <div className="about__section__one">
                 <h1>Startup Ohrid</h1>
                 <p>We are the first formal association of Startup Ohrid community which includes companies, associations, institutions, meetups, and individuals.</p>
                 <img src="https://i0.wp.com/en.split-techcity.com/wp-content/uploads/sites/2/2021/05/DAMI5734-scaled.jpg?resize=1000%2C667&ssl=1"></img>
                <h3>Short history of Startup Ohrid</h3>
                <p>Since 2010 this initiative, from which Startup association and Split Tech City brand generated from, gathers and connects,
                     in Split and its surrounding region, IT experts and those who wish to become one.
More than 150 meetups, lectures, and other educational events that were held so far have connected over 1000 individual members and companies.
Split Tech City is not just a crown jewel of the Startup Association’s work,
 but also a tangible move towards further development of Split’s tech scene, enhancement of acquired knowledge, 
 and necessary step out of the local frameworks.</p>
            </div>

            <div className="about__section__two">
                    <h3>Startup Ohrid where technology and tourism come together</h3>
                    <h4>Mission</h4>
                    <p>To connect members of the local tech community and those who wish to become one</p>
                    <p>Continuously promote Split’s tech companies and experts in local and national offline and online media</p>
                    <p>Encourage the development of innovative tech projects that have global ambitions and potential</p>
                    <p>Guide young people towards highly paid technological professions, that are in great demand in our country and abroad, through educational events, conferences, and lectures</p>
                    <p>Create conditions and opportunities for young people to stay in Split through active collaboration between the academic community and companies</p>
            </div>
            <h4 className="team__h4">Team</h4>
            <div className="team__section">
                
           <a href="https://www.linkedin.com/in/onur-ago-4157611b6/" target="blank">
           <div className="team__member">
                    <img src="https://media.licdn.com/dms/image/C4E03AQEcr-4wzaNlRQ/profile-displayphoto-shrink_400_400/0/1642820503815?e=1689206400&v=beta&t=-vdeGe27Pw9MZHcdrpXN9gdR-oxYOm4YPtfDwGvt2P4"></img>
                    <p>Onur Ago</p>
                    <p>Front-end Developer</p>
                </div>
           </a>
           <a href="https://www.linkedin.com/in/ersin-hasanovski-b845501b9/">
           <div className="team__member">
                    <img src="https://media.licdn.com/dms/image/C4E03AQFj3XaycZcIvQ/profile-displayphoto-shrink_400_400/0/1614331044461?e=1689206400&v=beta&t=-aejMn0vIKJqfUQRvT4IVDEMSb3jDWIg7ucIVuGPzAg"></img>
                    <p>Ersin Hasanovski</p>
                    <p>Front-end Developer</p>
                </div>
           </a>
            </div>

            <Support />
        </div>
    </div>
  )
}
