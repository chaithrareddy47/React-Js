import ProductItems from "./ProductItems";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

const ProductList = () => {
  return (
    <div>
          {
              products.map((product) => (
                  <ProductItems key={product.id} product={ product} />
              ))
      }
    </div>
  )
}

export default ProductList
