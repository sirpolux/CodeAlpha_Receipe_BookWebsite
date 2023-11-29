import React from 'react'
import { useState } from 'react'
import './home.css'
import HomeContent from './HomeContent'
import { ReceipeHome } from './ReceipeHome'

const Home = () => {

    const [page,setPage]=useState(1);

    const [myRecipes,setMyReceipes]=useState(
        [
            {
                name:"Pounded yam and Egusi Soup",
                img:"https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpg"
            },
        ]
    )

  return (
    <div className='container'>
        <div className='overlay'></div>
        <div className='content'>
            {
                page===1?
                <HomeContent/>:
                page===2?
                <ReceipeHome/>:
                null
            }
            
        </div>
    </div>
  )
}

export default Home


