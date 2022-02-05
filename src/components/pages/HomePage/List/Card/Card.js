import React, { useEffect, useState } from "react";
import { Container, ContainerFluid } from "../../../../../Auth/Containers";
import {
  Cards,
  Slider,
} from "../../../../../Auth/pages/HomePage/List/Card/Card";
import pensil from "../../../../../assets/icons/pensil.svg";
import calendar from "../../../../../assets/icons/calendar.svg";
import clock from "../../../../../assets/icons/clock.svg";
import offline from "../../../../../assets/icons/offline.svg";
import online from "../../../../../assets/icons/online.svg";
import eye from "../../../../../assets/icons/eye.svg";
import comment from "../../../../../assets/icons/comment.svg";

function Card({ id }) {
  const [cardInfo, setCardInfo] = useState([]);
  const [recomendedInfo, setRecomendedInfo] = useState([]);

  useEffect(async () => {
    let [card_, recomended_] = await Promise.all([
      fetch(`https://dream-team-n1.herokuapp.com/api/cards?id=${id[0]}`),
      fetch(`https://dream-team-n1.herokuapp.com/api/recomendet?id=${id[1]}`),
    ]);
    var [card, recomended] = await Promise.all([
      card_.json(),
      recomended_.json(),
    ]);
    setCardInfo(card);
    setRecomendedInfo(recomended);
  }, []);

  return (
    <>
      <ContainerFluid>
        <Cards>
          <Container>
            {cardInfo.map((item) => {
              let dataTime = item.date.split(" ");
              let date = dataTime[0];
              let time = dataTime[1];
              return (
                <div className="wrapper">
                  <div className="info">
                    <h1>{item.fullname}</h1>
                    <ul className="content">
                      <li>
                        <img src={pensil} alt="pensil" />
                        <p>{item.category_name}</p>
                      </li>
                      <li>
                        <img src={calendar} alt="pensil" />
                        <p>{date}</p>
                      </li>
                      <li>
                        <img src={clock} alt="pensil" />
                        <p>{time}</p>
                      </li>
                      <li>
                        <img
                          src={item.status === "Online" ? online : offline}
                          alt="pensil"
                        />
                        <p>{item.status}</p>
                      </li>
                    </ul>
                    <h4>Bo'lishing:</h4>
                    <ul className="socials">
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-telegram-plane"></i>
                        </a>
                      </li>
                    </ul>
                    <img src="" alt="" />
                  </div>
                  <div className="desc">
                    <h3>{item.title}</h3>
                    <p className="info-text">{item.short_info}</p>
                    <img
                      className="info-img"
                      src="https://dream-team-n1.herokuapp.com/public/master.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text">{item.long_info}</p>
                    </div>
                    <ul>
                      <li>
                        <img src={eye} alt="" />
                        <p>{item.views}</p>
                      </li>
                      <li>
                        <img src={comment} alt="" />
                        <p>izohlar</p>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </Container>
        </Cards>
      </ContainerFluid>
      <Slider>
        <ul>
          {recomendedInfo.map((item) => {
            let dataTime = item.date.split(" ");
            console.log(dataTime);
            let date = dataTime[0];
            let time = dataTime[1];
            return (
              <li>
                <img
                  src="https://dream-team-n1.herokuapp.com/public/master.jpg"
                  alt=""
                  role="presentation"
                />
                <div className="inner">
                  <h2>{item.title}</h2>
                  <h3>{item.fullname}</h3>
                  <div className="wrapper">
                    <div>
                      <span>
                        <img src={pensil} alt="" />
                        <p>{item.category_name}</p>
                      </span>
                      <span>
                        <img src={calendar} alt="" />
                        <p>{date}</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <img src={clock} alt="" />
                        <p>{time}</p>
                      </span>
                      <span>
                        <img
                          src={item.status === "Online" ? online : offline}
                          alt=""
                        />
                        <p>{item.status}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Slider>
    </>
  );
}

export default Card;
