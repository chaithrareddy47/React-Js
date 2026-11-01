import React from 'react'
import { CDN_URL } from '../constants/mockData';

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId,name,cuisines,avgRating,locality } = resData.info;
  return (
    <div className="res">
      <div className="res-image">
        <img src={`${CDN_URL}${cloudinaryImageId}`} />
      </div>
      <div className="res-desc">
        <h2>{name}</h2>
        <p>{avgRating}</p>
        <p>{cuisines.join(",")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
}

export default RestaurantCard
