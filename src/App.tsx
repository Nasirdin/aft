import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

export type Football = {
  _id: Number;
  champ: {
    name: String;
  };
  tourNumber: Number;
  teamHome: {
    name: String;
    logo: String;
    logoId: Number;
  };
  teamAway: {
    name: String;
    logo: String;
    logoId: Number;
  };
  scoreFtHome: Number;
  scoreFtAway: Number;
  stadium: String;
  date: String;
};

function App() {
  const [info, setInfo] = useState<Football[] | null>();
  const [totalCard, setTotalCard] = useState(8);

  useEffect(() => {
    const url = `https://footballista.ru/api/seasons/5099/calendar_paginated?limit=${totalCard}&offset=0`;
    axios.get(url).then((res) => {
      setInfo(res.data.items);
    });
  }, [totalCard, info]);

  return (
    <div className="App">
      <div className="container">
        <div className="cards">
          {info ? (
            info.map((el) => {
              return (
                <Card
                  key={el._id}
                  teamHome={el.teamHome}
                  teamAway={el.teamAway}
                  date={el.date}
                  scoreFtHome={el.scoreFtHome}
                  scoreFtAway={el.scoreFtAway}
                  tourNumber={el.tourNumber}
                />
              );
            })
          ) : (
            <img
              src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
              alt="Loading"
            />
          )}
        </div>
        {info ? (
          <button
            className="load-more"
            onClick={() => {
              setTotalCard(totalCard + 8);
            }}
          >
            Загрузить ещё
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
