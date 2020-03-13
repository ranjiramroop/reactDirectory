import React from "react";
import UserList from "../data/users.json";
import img from "../components/img/profile-pic.png";
import "./style/style.css";

function UserInfo(props) {

  const results = UserList.filter(user => user.firstname.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group text-center">
          <h2>Users</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
            <img className="img" src={img} alt='profile' />
            <span className="name"><b>{result.firstname} {result.lastname}</b></span>
            <span className="badge badge-dark badge-pill">{result.email}</span>
          </li>
          ))}
        </ul >
      ) : (
          <h2>No user by this first or last name</h2>
        )}
    </div>
  );
}

export default UserInfo;