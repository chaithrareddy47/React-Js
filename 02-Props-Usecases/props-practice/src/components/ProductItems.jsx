

const ProductItems = ({ product }) => {
    console.log(product);
    const { name, price } = product;
    
  return (
    <div>
          <p>product name: {name}</p>
          <p>product price: {price}</p>
          
    </div>
  )
}

export default ProductItems
