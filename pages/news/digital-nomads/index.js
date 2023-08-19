import React from "react";
import Latest from "../../components/newsLatestNews/Latest";
import NewsHero from "../../components/latestcenter/NewsHero"
import { useState } from "react";
import RightStickyNews from "../../components/latestcenter/RightStickyNews";
import posts from '../../database/db.json'
import Link from "next/link";


const News =()=> {

 
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
         <a><Link href={"/news/entrepreneurship"}><p>Startups</p></Link></a>
         <a><Link href={"/news/technology"}><p>Individuals</p></Link></a>
         <a><Link href={"/news/design"}><p>Coworking Spaces</p></Link></a>
         <a><Link href={"/news/digital-nomads"}><p>Digital Nomads</p></Link></a>
       
        </div>
      )}
    </div>
            <div className="left-container">
            {posts.news.slice(0,load).map((news,index)=>{

          return(
              <div className="left-block" key={index} >
                  <div className="left-img">
                      <img src={news.img} alt="" />
                  </div>
                  <div className='left-category'>
                      {news.category}
                  </div>
                  <div className='left-title'>
                  {news.title}
                  </div>
                  <div className='left-desc'>
                  {news.description}
                  </div>
                  <div className='left-span-below'> 
                      
                      <div>
                          <img  src={news.spanImg} alt="" /> 
                      
                      </div>
                      <div>
                          <span>{news.spanDesc} </span>
                      </div>
                  </div>
              </div>        
              )   
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
    

export default News

