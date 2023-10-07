import React, { useState } from "react";
import "./Recomanded.css";

import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2-night trip",
      images: [
        Destination1,
        Destination2,
        Destination3,
        Destination4,
        Destination5,
        Destination6,
      ],
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2-night trip",
      images: [
        Destination2,
        Destination3,
        Destination4,
        Destination5,
        Destination6,
      ],
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2-night trip",
      images: [
        Destination3,
        Destination4,
        Destination5,
        Destination6,
      ],
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1-night trip",
      images: [
        Destination4,
        Destination5,
        Destination6,
      ],
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2-night, 2-day trip",
      images: [
        Destination5,
        Destination6,
      ],
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3-night, 2-day trip",
      images: [
        Destination6,
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (page) => {
    if (page >= 0 && page < data.length) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="recommend">
      <h2 className="title">Packages</h2>
      <div className="packages">
        <ul>
          {data.map((destination, index) => (
            <li
              key={index}
              className={currentPage === index ? "active" : ""}
              onClick={() => setPage(index)}
            >
              Package {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {data[currentPage].images.map((image, index) => (
          <div key={index} className="destination">
            <img src={image} alt="" />
            <h3>{data[currentPage].title}</h3>
            <p>{data[currentPage].subTitle}</p>
            <div className="info">
              <h4>{data[currentPage].cost}</h4>
            </div>
            <div className="distance">
              <span>1000 Kms</span>
              <span>{data[currentPage].duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
