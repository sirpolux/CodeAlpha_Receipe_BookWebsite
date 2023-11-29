import React from 'react'

const ReceipeItem = ({itemDetails,updateItem,handleViewState}) => {

    const handleSelectedItem=(itemDetails)=>{
        updateItem(itemDetails);
        handleViewState("details")
    }
  return (
    <div className='recipe-item mt-1' onClick={()=>handleSelectedItem(itemDetails)}>
        <span>{itemDetails.name}</span>
    </div>
  )
}

export default ReceipeItem;
