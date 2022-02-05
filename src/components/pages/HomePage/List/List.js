import React from "react";
import { Container } from "../../../../Auth/Containers";
import { Wrapper } from "../../../../Auth/pages/HomePage/List/List";
import Aside from "../Aside/Aside";
import pensil from "../../../../assets/icons/pensil.svg";
import calendar from "../../../../assets/icons/calendar.svg";
import clock from "../../../../assets/icons/clock.svg";
import offline from "../../../../assets/icons/offline.svg";
import online from "../../../../assets/icons/online.svg";
import { Button } from "../../../../Auth/Mixins";
import { Link } from "react-router-dom";

function List({ result, pages, setPages, setHandleId }) {
  function changePages() {
    setPages(pages + 1);
    console.log(pages);
  }
  return (
    <Wrapper>
      <Container>
        <ul>
          {result.length > 0 ? (
            result.map((item) => {
              let timeDate = item.date.split(" ");
              let date = timeDate[0];
              let time = timeDate[1];

              return (
                <li className="item" key={item.id}>
                  <Link
                    onClick={() => {
                      setHandleId([item.id, item.category_id]);
                    }}
                    to={`/card/${item.id}`}
                  >
                    <img
                      src={"https://dream-team-n1.herokuapp.com/public/master.jpg"}
                      alt={item.title}
                      role="presentation"
                    />
                  </Link>
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
            })
          ) : (
            <h1>Ma'lumotlar yo'q</h1>
          )}
        </ul>
        <Button onClick={changePages} className="btn" href="#">
          Ko'proq
        </Button>
        <Aside />
      </Container>
    </Wrapper>
  );
}

export default List;
