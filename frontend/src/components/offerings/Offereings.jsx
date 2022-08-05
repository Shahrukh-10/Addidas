import React from "react";
import OfferingCards from "./offeringCards/OfferingCards";
import "./offerings.css";
import support from "../../assets/support.png";
import discount from "../../assets/discount.png";
import refund from "../../assets/refund.png";
import fee from "../../assets/fee.png";
import { logRoles } from "@testing-library/react";

// Dummy data to be passed to every card for offering using props
const cardData = [
  {
    logo: support,
    heading: "24*7 Support",
    content:
      "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    logo: discount,
    heading: "Monthly Offer",
    content:
      "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    logo: refund,
    heading: "Earn Cashback",
    content:
      "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    logo: fee,
    heading: "Become a member",
    content:
      "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function Offereings() {
  return (
    <div className="offerings">
      <div className="offerings-details">
        <p><span>20k+ </span> Orders Completed</p>
        <p><span>5k+ </span> Regular Visits</p>
        <p><span>15k+ </span> Happy Customers</p>
      </div>
      <div className="offering-heading">
        <h1>
          What we <span> offer</span>
        </h1>
      </div>
      <div className="offering-cards">
        {/* Mapping the data for each Offering cards using map function of the array */}

        {cardData.map((element) => {
          return (
            <OfferingCards
              logo={element.logo}
              heading={element.heading}
              content={element.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Offereings;
