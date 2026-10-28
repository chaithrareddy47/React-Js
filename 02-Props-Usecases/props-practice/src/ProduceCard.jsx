import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Nike",
    price: 2000,
    isStock: true,
  },
  {
    id: 2,
    name: "Watch",
   
    isStock: false,
  },
];

const ProduceCard = () => {
  return (
    <div>
          {
              products.map((data) => (
                  <Product key={data.id} productObj={data}/>
              ))
     }
    </div>
  );
}

export default ProduceCard
