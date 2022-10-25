
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import posts from '../../database/db.json'

export default function SearchBar() {
    const [users,setUsers] = useState ([])
    const [text,setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect (() => {
        const loadUsers =()=>
        {
          
            setUsers(posts.jobs.data)
        
        }
            loadUsers();
            
    },[])

    

    const onSuggestHandler =(text) =>  {
      setText(text);
      setSuggestions([]);
    }

    const onChangeHandler = (text) =>{
      let matches = []
      if (text.length>0)
      {
       matches = users.filter(user => {
        const regex = new RegExp(`${text}`,"gi");
        return user.role.match(regex);
       })
     
      }
      console.log("matches",matches)
      setSuggestions(matches)
      setText(text)
    }


 

    

  return (
    <div className='search'>
      <div className='search__container'>
        <h1>Search Bar</h1>
    <input type="text" 
    onChange={e=>onChangeHandler(e.target.value)} 
  
    value={text}
    onKeyDown={e=>console.log(e)}
    />

    {suggestions && suggestions.map ((suggestions,i) =>
    <div className='suggestions' key={i}
    onClick = {()=>onSuggestHandler(suggestions.role)}
    ><Link href="#"><div className='suggestions__block'>
      <img src={suggestions.logo} alt="" />
      <p>{suggestions.role}</p>
      <p>{suggestions.category}</p>
      </div></Link>
    </div>
    )}

      </div>
    </div>
  )
}
