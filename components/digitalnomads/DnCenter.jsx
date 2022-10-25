
import React, {Component} from "react";
import RightSticky from '../latestcenter/RightSticky';
import posts from '../../database/db.json'

export default class DnCenter extends Component{


render(){
  return (
    <>
    <div className='latest-center'>
        <div className="center-container">
            <div className="left-container">
             {posts.dn.map(dn=>
                
                <div className="left-block" key={dn.id}>
                <div className="left-img">
                    <img src={dn.dnImg} alt="" />
                </div>
                <div>
                    <div className='left-category'>
                    <p>{dn.category}</p>
                </div>
                <div className='left-title'>
                    <h2>{dn.dnTitle}</h2>
                </div>
                <div className='left-desc'>
                   <p>{dn.dnDesc}</p>
                </div>
                <div className='left-span-below'> 
                    
                    <div>
                        <img  src={dn.creatorLogo} alt="" /> 
                    </div>
                    <div>
                        <span>{dn.dnCreator} </span>
                   </div>
                </div> 
             </div>        
        </div> 
   
                
                )}
        
            </div>
            <RightSticky />
         

        </div>
    </div>
    </>
    
  )
}

}