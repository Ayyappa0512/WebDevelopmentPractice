import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        {/* <img className="circle-img" src={props.imgURL} alt="avatar_img" /> */}
        <Avatar img={props.imgURL} />
      </div>
      <div className="bottom">
        <Details detailsInfo={props.phone} />
        <Details detailsInfo={props.email} />
        {/* <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
