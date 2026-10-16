import React from 'react'



const RestaurantCrad = ({ resData }) => {
  console.log(resData);

  const { name, avgRating, areaName, cloudinaryImageId } = resData;

  return (
    <div className="res-card">
      <img
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          cloudinaryImageId
        }
        alt=""
      />
      <h1>{name}</h1>
      <p>{avgRating}</p>
      <p>South Indian, noeth indian</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCrad
