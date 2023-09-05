import React from "react";
import Latest from "../../../components/newsLatestNews/Latest";
import NewsHero from "../../../components/latestcenter/NewsHero"
import { useState } from "react";
import RightStickyNews from "../../../components/latestcenter/RightStickyNews";
import Link from "next/link";
import fs from 'fs'
import matter from 'gray-matter'


const News =({news})=> {

 
  const [load, setLoad] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  const loadData = () => {
    setLoad((prev) => prev + 3)
    
  }

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div>
        <NewsHero />
        <Latest/>
     
        <div className='latest-center'>
        <div className="center-container">
               <div className="dropdown" >
      <button className="dropdown-btn" onClick={handleDropdownClick}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
        <a><Link href={"/news/"}><p>All</p></Link></a>
         <a><Link href={"/news/general"}><p>General</p></Link></a>
         <a><Link href={"/news/entrepreneurship"}><p>Entrepreneurship</p></Link></a>
         <a><Link href={"/news/technology"}><p>Technology</p></Link></a>
         <a><Link href={"/news/design"}><p>Design</p></Link></a>
         <a><Link href={"/news/digital-nomads"}><p>Digital Nomads</p></Link></a>
       
        </div>
      )}
    </div>
            <div className="left-container">
            {news.map(usernew=> {
              if(usernew.category== "general"){
          return(
         <Link href={`/news/${usernew.category}/${usernew.slug}`}>
              <div className="left-block" key={usernew.slug} >
                  <div className="left-img">
                      <img src={usernew.thumbnail} alt="" />
                  </div>
                  <div className='left-category'>
                      {usernew.category}
                  </div>
                  <div className='left-title'>
                  {usernew.title}
                  </div>
                  <div className='left-desc line-clamp'>
                  {usernew.secondtext}
                  </div>
                  <div className='left-span-below'> 
                      
                      <div>
                          <img  src={usernew.userlogo} alt="" /> 
                      
                      </div>
                      <div>
                          <span>{usernew.username} </span>
                      </div>
                  </div>
              </div>  
         </Link>      
              );
            }
              })}
        
        <button 
                className='load' 
                onClick={loadData}
            >
                Load More
            </button>
                </div>
                <RightStickyNews/>
            </div>
        </div>
        </div>
      )
    }
    

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/news')

  // Get the front matter and slug (the filename without .md) of all files
  const news = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/news/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      news
    }
  }

}

export default News

