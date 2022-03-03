import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const Api = "https://api.tvmaze.com/shows";
  const [data, setData] = useState([]);
  const [visibile, setVisbile] = useState(false);

  const fetchAPI = async () => {
    await axios
      .get(`${Api}/${localStorage.getItem("Name")}`)
      .then((r) => r.data)
      .then((d) => {
        setData(d);
      });
  };

  const handleClick = () => {
    setVisbile(!visibile);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <div className="movieSummary">
        <h3>Movie Synopsis</h3>
        <p>
          {data.summary
            ? data.summary.replace(/(<([^>]+)>)/gi, "")
            : data.summary}
        </p>
        <button className="mybtn" onClick={handleClick}>
          Book Movie
        </button>
      </div>

      {visibile && (
        <div className="myForm">
          <h3>Please fill the Details to Confirm the Booking...</h3>
          <form>
            <label>Movie Name</label>
            <input
              value={data.name}
              onChange={(e) => {
                setData(e.target.value);
              }}
            ></input>
            <label>Movie Language</label>
            <input
              value={data.language}
              onChange={(e) => {
                setData(e.target.value);
              }}
            ></input>

            <label>RunTime</label>
            <input
              value={data.runtime + "mins"}
              onChange={(e) => {
                setData(e.target.value);
              }}
            ></input>
            <button
              className="btn"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Summary;
