
import RestaurantCrad from './RestaurantCrad'
import { resList } from '../utils/mockData'
import { useState , useEffect} from 'react';


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])

  console.log("body rendered");

  useEffect(() => {
    console.log("useeffect called");
    fetchData();
    
  })
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.778963&lng=77.7702029&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  setRestaurantList(
    json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
  );
    
    
  }
  
  return (
    <div className="res-body">
      <div className="search-btn">
        <input type="text" />
        <button>search</button>
        <button className='filter-btn'
          onClick={() => {
            const filetrBtn = restaurantList.filter((res) => (
            res?.info?.avgRating > 4.2
            ))
            setRestaurantList(filetrBtn)
        }}
        >Top rated Restro</button>
      </div>
      <div className="res">
        {
          restaurantList.map((resData) => (
            <RestaurantCrad key={resData.info.id} resData={ resData.info} />
          ))
        }
      </div>
    </div>
  )
}

export default Body
