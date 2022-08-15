import { React, useState, useEffect } from "react";
import ShoeDisplay from "../collection/shoeDisplay/ShoeDisplay";
import shoes from "../../assets/thumbnail/NikeZoomXInvincible.webp";
import "./fullcollection.css";

const FullCollection = () => {
  const [shoeList, setShoeList] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/shoe/getAll`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token"),
          },
        });
        const newData = await response.json();
        const arr = newData.shoeList;
        setShoeList(newData.shoeList);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  return (
    <div className="fullCollection">
      <div className="heading">
        <h1>Collections</h1>
      </div>
      {shoeList.length === 0 ? (
        <div className="center">
          <p>Loading</p>
        </div>
      ) : (
        <div className="listCollection">
          {shoeList.map((shoe, i) => {
            return (
              <ShoeDisplay
                id={shoe._id}
                key={i}
                shoeImage={shoes}
                name={shoe.shoeName}
                price={100}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FullCollection;
