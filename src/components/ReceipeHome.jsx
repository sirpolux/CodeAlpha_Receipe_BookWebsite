import React, { useEffect, useState } from 'react'
import ReceipeItem from './ReceipeItem'
import AppName from './AppName'
import { ItemsDetails } from './ItemsDetails';

export const ReceipeHome = ({nav, recepies, activeItem}) => {

  const [itemViewState,setItemViewState]=useState("list");
  const [selectedItem,setActiveItem]=useState(
    {
      id:"",
      name:"",
      img:"",
      text:"",
      notesTitle:"",
      notes:[],
      ingredients:[],
      instructions:[],
      origin:"default",
      videoAvailable:true,
      videoSrc:""
  },
  );

  useEffect(()=>{},
  [itemViewState, selectedItem])

  const updateActiveItem=(item)=>{
    setActiveItem({...item})
    console.log(item.name);
  }
  const updateItemViewState=val=>{
    setItemViewState(val)
  }
    

  
  return (
    <div>
      <div className="nav">
        <button onClick={()=>nav(1)}>Home </button> <button>Add Receipe Item</button>
      </div>
      <hr/>
      <div className='back-btn-cont'>
        <AppName/>
        {

        }
        {itemViewState=="details"&&<i className='fas fa-arrow-circle-left' onClick={()=>updateItemViewState("list")}></i>}
      </div>
      <hr className="divider" />
      {
        itemViewState=="list"?
      
        <div className="item-list-view">
          {
            recepies.map(item=> <ReceipeItem  key={item.id} itemDetails={item}  updateItem={updateActiveItem}  handleViewState={updateItemViewState}/>  )
          }
        </div>:
        <div className='recipie-details'>
          <ItemsDetails item={selectedItem}/>
        </div>
      }
      
      
    </div>
  )
}
