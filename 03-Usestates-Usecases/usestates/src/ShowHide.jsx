
const ShowHide = () => {
  const handleClick = (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
  
  }

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
 
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <input onChange={handleChange}

        type="text"
        placeholder="SearchFood"
      />
    </div>
  )
}

export default ShowHide
