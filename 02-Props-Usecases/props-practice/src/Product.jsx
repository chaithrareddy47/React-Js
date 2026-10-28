

const Product = ({ productObj }) => {
    console.log(productObj);
    const { name, price, isStock } = productObj;
    
  return (
    <div>
          <p>{name }</p>
          <p>{price ?? "Price is not defined"}</p>
          {/* {
              price === undefined ? <p style={{color:"yellow"}}>Price is not defined</p> : <p>{price }</p>
          } */}
          {
              isStock === true ? <p style={{color:"green"}}>In Stock</p> : <p style={{color:"red" , fontSize:"20px"} }>Out of stock</p>
          }
    </div>
  )
}

export default Product
