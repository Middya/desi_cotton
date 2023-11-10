import React from "react";
import Image from "next/image";
import Link from "next/link";
let catagories = [
  "New",
  "Women",
  "Lehengas",
  "Anarkalis/Dresses",
  "Indo-western wedding",
  "Ready to wear",
  "Plus size",
];
const Header = () => {
  return (
    <div className="header">
      <Link className="discount" href="/">
        Check upcoming discount %%
      </Link>
      <div className="main">
        <div className="hamburger-container">
          <Image
            src={"/hamburger.png"}
            fill={true}
            className={"image"}
            sizes=" "
            alt="hamburger icon"
          ></Image>
        </div>
        <Link className={"logo-container"} href={"/"}>
          <Image
            src={"/logo.png"}
            fill={true}
            alt="ALT_TEXT"
            className={"image"}
            sizes=" "
          />
        </Link>

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search your passion"
            style={{ border: "none", height: "100%", width: "90%" }}
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#828282"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0004 21.0004L16.6504 16.6504"
              stroke="#828282"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="action">
          <p>Log in</p>
          <p>|</p>
          <p>Register</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987Z"
              stroke="#8E7AC0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
              stroke="#8E7AC0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#8E7AC0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
              stroke="#8E7AC0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="catagories">
        {catagories.map((catagory) => {
          return (
            <Link key={catagory} href={`/${catagory}`}>
              {catagory}
            </Link>
          );
        })}
      </div>
      <div className="tags">
        <p>50% Discount Offer</p>
        <p>We have strong delivery network</p>
        <p>Trending dress</p>
      </div>
    </div>
  );
};

export default Header;
