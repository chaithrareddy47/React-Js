
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
  



const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "330272",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/18/188178d2-5dfc-4528-8c76-e04c89229de8_330272.jpg",
      locality: "Guddahatti Road",
      areaName: "Attibele",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets", "Chinese"],
      avgRating: 4.3,
      veg: true,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "754180",
      name: "Srinidhi Vaibhava",
      cloudinaryImageId: "b573f6a00571c79f8d92ff855351dc01",
      locality: "Attibele",
      areaName: "Attibele",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Chinese", "Juices"],
      avgRating: 4.4,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1405804",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/e085e3a4-d19b-4b14-b05c-17e6d4a69210_1405804.JPG",
      locality: "Avalapalli Road, Hosur, Hosur block, Krishnagiri",
      areaName: "Indira Nagar Main Road, Basthi",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.2,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1417748",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/11/a9f39bc7-3086-432a-9d97-dcbeaad11cc4_1417748.jpg",
      locality: "Iggaluru Village",
      areaName: "Attibele",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "771967",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/ae6f3ff7-fabb-4c2a-ba67-040f5057d89c_771967.JPG",
      locality: "Atibele Road",
      areaName: "Electronic City",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "874183",
      name: "Kanti Sweets",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/4/6f2dedbc-71cb-44b9-abe1-1a44743d31e2_874183.JPG",
      locality: "Attibele",
      areaName: "BLR_Attibele",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets"],
      avgRating: 4.4,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1285974",
      name: "Asha Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/c517406f-cc80-4961-8696-975babcb1f9d_1285974.jpg",
      locality: "Anekal",
      areaName: "Sarjapur",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "Desserts",
        "South Indian",
        "Beverages",
        "North Indian",
      ],
      avgRating: 4.4,
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "742587",
      name: "New Nellai Mess",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/3/b99147f6-1a02-4f0c-bd10-d5aaf464e6e5_742587 (1).jpg",
      locality: "Taluk office road",
      areaName: "Nethaji road",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Chinese", "Biryani", "Snacks"],
      avgRating: 4.2,
    },
  },
];





const Body = () => {
  return (
    <div className="res-body">
      <div className="search-btn">
        <input type="text" />
        <button>search</button>
      </div>
      <div className="res">
        {
          resList.map((resData) => (
            <Restaurant key={resData.info.id} resData={ resData.info} />
          ))
        }
      </div>
    </div>
  )
}

const Restaurant = ({resData}) => {
  console.log(resData);
  
  const { name, avgRating, areaName, cloudinaryImageId } = resData;
  
  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+cloudinaryImageId}
        alt=""
      />
      <h1>{name}</h1>
      <p>{avgRating}</p>
      <p>South Indian, noeth indian</p>
      <p>{areaName}</p>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <div className="footer">
//       <p>copyright</p>
//     </div>
//   )
// }

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {/* <Footer/> */}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)