import React from "react";
import "./HeaderButtonWithGradient.css";
import { Button } from "react-scroll";
const HeaderButtonWithGradient = (props) => {
  return (
    <>
      <Button
        style={{
          // background: 'linear-gradient(90deg, #1ab2ff 0%, #ffb258 100%)',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #1ab2ff 0%, #ffb258 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          backgroundColor: 'white',
          color: "#000",
          padding: "10px 20px",
          borderRadius: "48px",
          cursor: "pointer",
          fontSize: "17px",
          fontFamily: 'sequel_sans'
        }}
        className="HeaderButtonHover"
      >
        {props.text}
      </Button>
    </>
  );
};

export default HeaderButtonWithGradient;
