import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';

import { SWIGGI_API } from '../constants/mockData';
import ShimmerUi from './ShimmerUi';


const Body = () => {
  const shimmerArray = Array.from({length:10})
  console.log("body rendered");

  const [allResto,setAllRestro] = useState([])
  const [listOfRestro,setListOfRestro] = useState([])

  const [value,setValue] = useState("")
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const data = await fetch(SWIGGI_API)
    const response = await data.json()
    // console.log(response);


   const findResData = response.data.cards.find(
     (data) =>
       data.card.card?.gridElements?.infoWithStyle["@type"] ===
       "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo");
    // console.log(findResData);

    const resData = findResData.card.card.gridElements.infoWithStyle.restaurants
    // console.log(resData);

    setListOfRestro(resData) 
    setAllRestro(resData)
    
  }

  const handleClick = () => {
    // console.log("button clicked ");
    // console.log(listOfRestro);
    
    const topRated = allResto.filter((data) => (
      data.info.avgRating >4.3
    ))
    // console.log(topRated);
    
    setListOfRestro(topRated)
    
  }

  const handleClear = () => {
    setListOfRestro(allResto)
  }

  const handleChange = () => {
    
  }
    
 if (listOfRestro.length === 0) {
   return (
     <div className="shimmer-container">
       {shimmerArray.map((_, index) => (
         <ShimmerUi key={index} />
       ))}
     </div>
   );
 }
  return (
    <div className="body">
      <div className="btns">
        <div className="search-btn">
          <input type="text"
            value={value}
            onChange={handleChange}

          />
          <button>search</button>
        </div>
        <button onClick={handleClick}>Top Restro</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="res-card">
        {listOfRestro.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resData={ resObj} />
        ))}
      </div>
    </div>
  );
}

export default Body
