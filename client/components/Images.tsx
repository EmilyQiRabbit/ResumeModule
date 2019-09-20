import React from "react";

const Images = props => {
  const { imageFileName } = props;
  const Image = require(`@images/${imageFileName}`);
  return <Image />;
};

export default Images;
