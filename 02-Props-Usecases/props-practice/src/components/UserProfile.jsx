/*
* USE CASES
1. User Profile
Parent Component (UserProfile):



*/


import UserInfo from "./UserInfo";

const UserProfile = () => {
  const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };
  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo user={user} />
    </div>
  );
};

export default UserProfile
