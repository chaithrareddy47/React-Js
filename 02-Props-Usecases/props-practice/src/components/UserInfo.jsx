


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
};
export default UserInfo
