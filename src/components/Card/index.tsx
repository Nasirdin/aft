import "./index.scss";

function Card({
  teamHome,
  teamAway,
  date,
  scoreFtHome,
  scoreFtAway,
  tourNumber,
}: any) {
  const allDate = date.split("T");
  const calendar = allDate[0];
  const time = allDate[1].split(".")[0];
  const logoFunc = (logo: String, logoId: String) => {
    return `https://footballista.ru/api/img/logos/${logo}-middle.png?logoId=${logoId}scoreFtHome/scoreFtAway$`;
  };
  return (
    <div className="card">
      <p className="card__date">
        {calendar} <span className="card__time-line">|</span> {time}
      </p>
      <p className="card__tour-number">{tourNumber}</p>

      <h2 className="card__title">{teamHome.name}</h2>
      <div className="card__team-info">
        <div className="card__team team">
          <img
            className="team__img"
            src={logoFunc(teamHome.logo, teamHome.logoId)}
            alt="#"
          />
          <h3 className="team__name">{teamHome.name}</h3>
        </div>
        <span className="card__vs">
          [ {scoreFtHome} : {scoreFtAway} ]
        </span>
        <div className="card__team card__team_second team ">
          <h3 className="team__name">{teamAway.name}</h3>
          <img
            className="team__img"
            src={logoFunc(teamAway.logo, teamAway.logoId)}
            alt="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
