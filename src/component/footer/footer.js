import React from "react";
import "./footer.css";
import Image from "next/image";
const Footer = () => {
  const fotterContents = [
    {
      title: "Shopping",
      conttents: [
        "Most",
        "collection",
        "sale",
        "ready to wear",
        "sharara",
        "weeding",
      ],
    },
    {
      title: "Collection",
      conttents: [
        "Most",
        "collection",
        "sale",
        "ready to wear",
        "sharara",
        "weeding",
      ],
    },
    {
      title: "Information",
      conttents: [
        "Most",
        "collection",
        "sale",
        "ready to wear",
        "sharara",
        "weeding",
      ],
    },
    {
      title: "Plices",
      conttents: [
        "Most",
        "collection",
        "sale",
        "ready to wear",
        "sharara",
        "weeding",
      ],
    },
    {
      title: "Like a desi cotton",
      conttents: [
        "Most",
        "collection",
        "sale",
        "ready to wear",
        "sharara",
        "weeding",
      ],
    },
  ];
  return (
    <div className="footer">
      <div className="footer_header">
        <div className="footer_logo">
          <Image
            src={"/instagram_footer.png"}
            width={"38"}
            height={"38"}
          ></Image>
          <Image
            src={"/facebook_footer.png"}
            width={"35"}
            height={"35"}
          ></Image>
          <Image
            src={"/twitterX_footer.png"}
            width={"38"}
            height={"38"}
          ></Image>
        </div>
        <div className="footer_subcribe">
          <input placeholder="Enter your email"></input>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer_body">
        {fotterContents.map((item) => {
          return (
            <div className="footer_row">
              <p>{item.title}</p>
              {item.conttents.map((i) => {
                return <p>{i}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
