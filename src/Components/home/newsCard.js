import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.date}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default NewsCard;
