import React from 'react'
import { useState } from 'react'
import './home.css'
import HomeContent from './HomeContent'
import { ReceipeHome } from './ReceipeHome'

const Home = () => {

    const [page,setPage]=useState(1);
    const [activeItem,setActiveItem]=useState("Coconut Jollof Rice")
    const renderView=(view)=>{
        setPage(view)
    }

    const myRecipies=[
        {   id:"d1",
            name:"Coconut Jollof Rice",
            img:"./coconut-jollof-rice.jpeg",
            text:"If the want to surprise someone, this meal I call the surprise Jollof Rice should be your first choice. Your guests think they are about to eat the classic Jollof Rice but are pleasantly surprised when the meal hits the tongue!",
            notesTitle:"Suggestions",
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
            id:"d2",
            name:"Egg Fried Rice",
            img:"./egg-fried-rice.jpeg",
            text:"This is the recipe you want to go to when you need a quick and easy rice recipe. If you are on a keto diet, replace the rice with Cauliflower Rice and skip the Maggi sauce. The Maggi sauce and soy sauce contain MSG so if you are allergic or you don’t want to eat it, skip these completely.",
            notesTitle:"Things to Consider/Suggestions",
            notes:["Serve with Onion baked Chicken Marinated with a blend of: White onions, Thyme, Black Pepper, Suya Spice, Olive oil", "The Maggi sauce and soy sauce contain MSG so if you are allergic or you don’t want to eat it, skip these completely."],
            ingredients:["3 cups boiled white rice", "5 Eggs", "Maggi long neck seasoning or soy sauce", "1 red onion", "Olive oil", "Red Pepper", "Green Pepper", "½ teaspoon thyme","½ teaspoon onion powder", "1 teaspoon black pepper","½ teaspoon salt"  ],
            instructions:["Mix the thyme, onion powder, black pepper and salt. Divide into 5 and set aside.",
                    "Break the eggs one by one, beat and season with the mixed seasoning.",
                    "Marinate the chicken quarters with the onion blend, cover and place in the fridge for at least 30 minutes.",
                    "Bake in a preheated oven at 200 deg C (400F) or till golden and no blood is in sight.",
                    "Pour some olive oil in a frying pan.",
                    "When hot, add one fifth of the onions (diced), stir for a bit.",
                    "Add the peppers (diced), stir for a bit and add one fifth of the boiled rice. Stir for at most 1 minute.",
                    "Add a few dashes of the Maggi Sauce, and pour in one of the beaten and seasoned eggs, stir gently till egg clumps form. Watch the video below for how to do this perfectly."
                    ],
            origin:"default",
            videoAvailable:true,
            videoSrc:"https://youtu.be/2yRxWJmQXFA"
        },

    ];
    // {
    //     name:"",
    //     img:"",
    //     text:"",
    //     notes:[],
    //     ingredients:[],
    //     instructions:[],
    //     origin:"default",
    //     videoAvailable:true,
    //     videoSrc:"https://youtu.be/4W5jTCzFGrs"
    // }

    const [myRecipes,setMyReceipes]=useState([...myRecipies])

  return (
    <div className='container'>
        <div className='overlay'></div>
        <div className='content'>
            {
                page===1?
                <HomeContent nav={renderView}/>:
                page===2?
                <ReceipeHome nav={renderView} recepies={myRecipes} activeItem={activeItem}/>:
                null
            }
            
        </div>
    </div>
  )
}

export default Home


