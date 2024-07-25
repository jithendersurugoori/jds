import React from "react";
import { FaUserCircle } from "react-icons/fa";


const Profile = () => {
  return (
    <div class="profile-details">
  <h1 style={{backgroundColor:'gray',color:'white',textAlign:'center'}}>Profile</h1>
  <FaUserCircle size={150} color="black " />
  <div  class="row">
    <span>Name:</span>
    <span>John Doe</span>
  </div>
  <div class="row">
    <span>Email:</span>
    <span>john.doe@example.com</span>
  </div>
  <div class="row">
    <span>Phone:</span>
    <span>123-456-7890</span>
  </div>
  <div class="row">
    <span>Address:</span>
    <span>1234 Elm Street</span>
  </div>
</div>
  );
};

export default Profile;
