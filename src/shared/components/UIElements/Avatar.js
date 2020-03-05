import React from "react";

import "./Avatar.scss";

const Avatar = ({ className, style, image, alt, width, height }) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width, height }} />
    </div>
  );
};

export default Avatar;
