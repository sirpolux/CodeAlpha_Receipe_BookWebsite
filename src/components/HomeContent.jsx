import React, { useState } from 'react'
import './home.css'

const HomeContent = () => {

    
  return (
    <>
        <div className="home-intro p-2">
            <h2 className="app-name">
                FlavorFiesta
            </h2>
            <span className="catchy-text">
            Unleash your inner chef and embark on a culinary adventure with our recipe wonderland! Whether you're a seasoned pro or a kitchen newbie, FlavorFiesta is your passport to gastronomic bliss.
            </span>
            <span className="catchy-text mt-1">
            Have a family favorite or a secret recipe you're dying to share? Add your own flair to FlavorFiesta! Contribute your culinary masterpieces and let the world savor your genius.
            </span>
        </div>
        <div className="option-nav">
            <button>Recipies</button>
            <button>Add Recipe</button>
        </div>
    </>
  )
}

export default HomeContent;