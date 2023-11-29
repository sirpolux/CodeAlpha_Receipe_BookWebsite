import React from 'react'

export const ItemsDetails = ({item}) => {
  return (
    <div className='item-details'>
        <span className='food-item-name'>{item.name}</span>
        <span className="food-item-description">{item.text} </span>
        <div className="food-item-img-cont">
            <img src={`${item.img}`} alt="" className="food-item-img" />
        </div>
        <span className='section-title'>Ingredients: </span>
        <ul>
            {
                item.ingredients.map((ingredientItem,index)=>
                <li key={index}>{ingredientItem}</li>
                )
            }
        </ul>
         <span className="section-title">
            {item.notesTitle} :
         </span>
         <ul>
            {
                item.notes.map((noteItem,index)=>
                    <li key={index}>{noteItem}</li>
                )
            }
         </ul>
         <span className="section-title">Procedures</span>
         {
            <ul>
                {item.instructions.map((ingredient,index)=>
                    <li key={index}>{ingredient}</li>
                    )
                }
            </ul>
         }

         {
            item.videoAvailable==true?
            <div className="video-cont">
                <iframe width="560" height="315" src={`${item.videoSrc}`} frameborder="0" allowfullscreen></iframe>
            </div>:
            <span className="video-info">No video available</span>
         }

    </div>
  )
}
