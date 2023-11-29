import React from 'react'
import { useState } from 'react'
import './home.css'
import HomeContent from './HomeContent'
import { ReceipeHome } from './ReceipeHome'

const Home = () => {

    const [page,setPage]=useState(1);

    const myRecipies=[
        {
            name:"Coconut Jollof Rice",
            img:"https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpgpoundes",
            text:"If the want to surprise someone, this meal I call the surprise Jollof Rice should be your first choice. Your guests think they are about to eat the classic Jollof Rice but are pleasantly surprised when the meal hits the tongue!",
            notes:["For the tastiest Coconut Jollof Rice, make your own Coconut Milk if you can buy coconuts where you live.",
                    "Prepare the Tomato Stew base if you don’t already have some. You should always have this in your freezer. 🙂",
                    "Precook or parboil the rice",
                    "Clean the chicken, dice the red and white onions, carrots and clean the shrimps."

                ],
            ingredients:["3 cups long grain parboiled rice", "1 coconut (1 tin coconut milk)","500 mls (2 cups) tomato stew base",  "1.2kg hard chicken",
                  "1 red onion",  "½ white onion", "1 cup shrimps (optional)", "2 small carrots", "½ cup green peas",
                  "2 big seasoning cubes", "½ tablespoon curry powder", "1 teaspoon thyme", "1 tablespoon black pepper (or to your taste)",
                  "Salt (to taste)"
                ],
            instructions:["Steam the chicken with the white onions, seasoning cubes, thyme and some of the coconut milk. Once it gets a good overall steam, add the rest of the coconut milk and start cooking till done. Top it up with water from time to time when necessary.",
                   "When the chicken is done, separate the chicken from the stock and set aside.",
                   "Decant the chicken stock into a different pot. Add the curry powder, black pepper and about half of the tomato stew base.",
                    "Cover and once it boils, add the precooked rice, stir and make sure the liquid is at the same level as the rice. Taste for salt at this time and add some if necessary.",
                    "Add the remaining tomato stew base on top. Cover with a sheet of foil followed by the pot cover and start cooking.",
                    "Once you can no longer see the water (but the rice is not yet dry), add the carrots, red onions and green peas. Stir the top, cover with the foil and pot cover and continue cooking. See the video below for how to do all these.",
                    "When all the water dries up, mix with a spatula till everything is well combined. Transfer to a cool container immediately so the Coconut Jollof Rice will not continue to cook and get mushy",
                    "While the rice is cooking the second time, grill (at 200 deg C or 400F) or deepfry the chicken to get a golden look. Turn them around while grilling for an overall golden look.",
                    "Serve with the grilled chicken, I added some avocado too. You can add fried plantains and/or sauteed leafy vegetables."
        ],
            origin:"default",
            videoAvailable:true,
            videoSrc:"https://youtu.be/4W5jTCzFGrs"

        },
        {
            name:"",
            img:"",
            text:"",
            notes:[],
            ingredients:[],
            instructions:[],
            origin:"default",
            videoAvailable:true,
            videoSrc:"https://youtu.be/4W5jTCzFGrs"
        }

    ];

    const [myRecipes,setMyReceipes]=useState(
        [
            {
                name:"Pounded yam and Egusi Soup",
                img:"https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpgpoundes"
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


