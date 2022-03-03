import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const Api = "https://api.tvmaze.com/search/shows?q=all";

  let navigate = useNavigate();
  const fetchAPI = async () => {
    await axios
      .get(Api)
      .then((r) => r.data)
      .then((d) => {
        return setData(d);
      });
  };
  const handleClick = (id) => {
    localStorage.setItem("Name", id);
    navigate("/about");
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h3 className="heading">Movies List</h3>
      <div className="mainContainer">
        {data.map((item, index) => {
          const {
            show: {
              id,
              name,
              language,
              image: { medium },
              genres,
              runtime,
              rating: { average },
            },
          } = item;
          return (
            <div key={id} className="movieContainer">
              <img src={medium} alt={name} />

              <h3>Movie Name: {<span>{name}</span>}</h3>
              <h3>Language: {<span>{language}</span>}</h3>
              <h3>
                Genre:{" "}
                {
                  <span>
                    {" "}
                    {genres[0]} {genres[1]}
                  </span>
                }
              </h3>
              <h3>
                Runtime: {<span>{runtime ? runtime + " mins" : "Null"}</span>}
              </h3>
              <h3>Ratings: {<span>{average ? average : "Null"}</span>}</h3>

              <button className="btn" onClick={() => handleClick(id)}>
                Movie Synopsis
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
