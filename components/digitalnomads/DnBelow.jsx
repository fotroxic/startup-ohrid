import axios from 'axios'
import React, {Component} from "react";
import Link from "next/link";
import posts from '../../database/db.json'



  export default class DnBelow extends Component{

    render(){
  return (
    <div className='lb-container'> 
  
  
    <div className="lb-box">
    {posts.dn.map(dn=>
    <div className="lb-block" key={dn.id}>
                <div className="lb-img">
                    <img src={dn.dnImg} alt="" />
                </div>
                <div className='lb-category'>
                    <p>{dn.category}</p>
                </div>
                <div className='lb-title'>
                     <h2>{dn.dnTitle}</h2>
                </div>
                <div className='lb-desc'>
                    <p>{dn.dnDesc}</p>
                </div>
                <div className='lb-span-below'> 
                    
                    <div>
                        <img  src={dn.creatorLogo} alt="" /> 
                    </div>
                    <div>
                        <span>{dn.dnCreator} </span>
                    </div>
                </div>
        </div>
    )}
      </div>
   </div>
  )
}
}

