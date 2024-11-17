import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "#042743",
    backgroundColor: "white",
  });
  // eslint-disable-next-line
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  // eslint-disable-next-line
  const toggleBtn = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "#042743",
        backgroundColor: "white",
      });
      setbtnText("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "#042743",
        border: "1px solid white",
      });
      setbtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3"> About Us</h1>
      <p>
      The Text Twist is designed to transform text in various ways, making it
      easier to adapt written content for different needs. It provides a range
      of functions, including rephrasing, translating, summarizing, and changing
      the tone of text. Ideal for students, writers, and professionals, the app
      offers quick and reliable conversions, helping users communicate more
      effectively and save time. With an intuitive interface, users can easily
      upload or type their text, choose the conversion style, and see the
      results instantly.
      </p>
      <button className="btn btn-primary" onClick={toggleBtn}>
        {btnText}
      </button>
    </div>
  );
}
