import React from "react";
import ReactDOM from "react-dom/client";

const resObj = [
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
      parentId: "22",
      avgRatingString: "4.3",
      totalRatingsString: "5.1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.1,
      },
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
      parentId: "294288",
      avgRatingString: "4.4",
      totalRatingsString: "612",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-08 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "5.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1396994",
      name: "The Rameshwaram Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/1ead77ad-1436-4bc5-b05f-9c7b11e6c6ef_1396994.jpg",
      locality: "Attibele",
      areaName: "Bommasandra",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "384316",
      avgRatingString: "4.4",
      totalRatingsString: "685",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-09 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
        commsStyling: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
  },
  
];

const Header = () => {
  return (
    <div className="main-header">
      <div className="nav-logo">
        <img src="https://plus.unsplash.com/premium_photo-1675344317761-3ace7cf2362a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="res-container">
        <ReaturantCard resData={resObj } />
      </div>
    </div>
  );
};

const ReaturantCard = (resData) => {
  // console.log(props);


  return (
    <div className="res-card">
      <div className="res-img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/9/7/471f6df4-6fa8-464c-a583-d4f5468f3c9f_173815.JPG" />
      </div>
      <div className="res-items">
        <p>{ resData.info.name}</p>
      </div>
    </div>
  );
};
const Footer = () => {
  return <div></div>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
