import React from "react";
import "./FIrstRouter.css";

const Profile = () => {
  return (
    <div>
      <p>Profile 페이지입니다.</p>
      <button onClick={() => navigator("/")}> 홈으로 </button>
    </div>
  );
};

export default Profile;
