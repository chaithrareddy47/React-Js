
/*
* USE CASES
1. User Profile
Parent Component (UserProfile):


const UserProfile = () => {
  const user = {
    name: "John",
    age: 30,
    email:"john@example.com"
  }
  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo user={ user} />

    </div>
  )
}

const UserInfo = ({ user }) => {
  const { name, age } = user; //({ user }) directly extracts user from props.
  // console.log(props);

  // const { name, age } = props.user; //Without destructuring → access properties using the object and dot notation.
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
*/

// * 2-PRODUCT LISTING


const App = () => {
  return (
    <div>
      <h1>PROPS PRACTICE</h1>
      
    </div>
  )
}

export default App
