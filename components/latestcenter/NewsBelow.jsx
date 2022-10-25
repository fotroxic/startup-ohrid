import axios from 'axios'
import React, {Component} from "react";
import Link from "next/link";
import posts from '../../database/db.json'



  export default class NewsBelow extends Component{

    render(){
  return (
    <div className='lb-container'> 
  
  
    <div className="lb-box">
    {posts.news.map(news=>
    <div className="lb-block" key={news.id}>
                <div className="lb-img">
                    <img src={news.newsImg} alt="" />
                </div>
                <div className='lb-category'>
                    <p>{news.category}</p>
                </div>
                <div className='lb-title'>
                     <h2>{news.newsTitle}</h2>
                </div>
                <div className='lb-desc'>
                    <p>{news.newsDesc}</p>
                </div>
                <div className='lb-span-below'> 
                    
                    <div>
                        <img  src={news.creatorLogo} alt="" /> 
                    </div>
                    <div>
                        <span>{news.newsCreator} </span>
                    </div>
                </div>
        </div>
    )}
      </div>
   </div>
  )
}
}

