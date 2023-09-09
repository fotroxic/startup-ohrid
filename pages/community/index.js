import React, { useEffect, useState } from "react";
import Item from "../../components/community/Item";
import Link from "next/link";
import RightSticky from "../../components/latestcenter/RightSticky"
import posts from '../../database/db.json'
import fs from 'fs'
import matter from 'gray-matter'


const App = ({users}) => {

  const [load, setLoad] = useState(6);
  const [isOpen, setIsOpen] = useState(false);
 

  const loadData = () => {
    setLoad((prev) => prev + 4);
  };

    const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="community__page">
      <div className="community__page__container">
        <div className="community__hero">
          <div className="hero__left">
            <h1>Community</h1>
            <p>
              Split Tech City is a community composed of well-intentioned and
              progressive companies, startups, associations, initiatives,
              institutions, and individuals. Together we encourage and develop
              the IT sector of Split and the surrounding region.
            </p>

          </div>
          
          <div className="hero__right">
            <img
              className="logo"
              src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="community__dropdown">
      <button className="dropdown-btn" onClick={handleDropdownClick}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
        <a><Link href={"/community/"}><p>All</p></Link></a>
         <a><Link href={"/community/companies"}><p>Companies</p></Link></a>
         <a><Link href={"/community/startup"}><p>Startups</p></Link></a>
         <a><Link href={"/community/individual"}><p>Individuals</p></Link></a>
         <a><Link href={"/community/digital-nomad"}><p>Digital Nomads</p></Link></a>
         <a><Link href={"/community/coworking-spaces"}><p>Coworking Spaces</p></Link></a>
         <a><Link href={"/community/institutions"}><p>institutions</p></Link></a>
         <a><Link href={"/community/organizations"}><p>Organizations</p></Link></a>
        </div>
      )}
    </div>
 

        <div className="comunity__content">
          <div className="load__button__container">
          <div className="community__items__container">
            {users.map(user=> {
             
                return (
                  <div key={user.slug}>
                    <Link  href={`/community/${user.category}/${user.slug}`}>
                      <Item
                        className="community__items"
                        key={user.slug}
                        style={{ backgroundColor: "rgb(238,238,238)" }}
                      >
                        <div className="community__logo__container">
                          <img
                            className="community__logo"
                            key={user.slug}
                            src={user.logo}
                          />
                        <div className="community__info__container">
                        <h3 key={user.slug}>{user.title}</h3>
                          <p key={user.slug}>{user.category}</p>
                        </div>
                        </div>
                      </Item>
                    </Link>
                  </div>
                );
              
            })}
       
       

        </div>
        
        {
             <button className="load" onClick={loadData}>Load more</button>
           }
 </div>
        <RightSticky/>

      </div>
     
    </div>
</div>

  );
};

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/users')

  // Get the front matter and slug (the filename without .md) of all files
  const users = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/users/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      users
    }
  }

}

export default App;