import React from "react";
import { Asides } from "../../../../Auth/pages/HomePage/Aside/Aside";
import students from "../../../../assets/icons/students.svg";
import teachers from "../../../../assets/icons/teachers.svg";

function Aside() {
  return (
    <Asides>
      <ul>
        <li>
          <img src={students} alt="students" />
          <span></span>
          <h4>Students</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </li>
        <li>
          <img src={teachers} alt="teachers" />
          <span></span>
          <h4>Teachers</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </li>
      </ul>
    </Asides>
  );
}

export default Aside;
