import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Container } from "../../../Auth/Containers";
import TextField from "./TextField";
import { Button } from "../../../Auth/Mixins";
import * as Yup from "yup";
import { Wrapper } from "../../../Auth/pages/Post/Post";
import { Checkbox } from "../../../Auth/pages/Dropdowns/Dropdowns";
import upload from "./../../../assets/icons/upload.svg";

function Post() {
  const [radioValue, setRadioValue] = useState(true);
  async function formSubmit(e) {
    e.preventDefault();
    let fd = new FormData();

    e.target.childNodes.forEach((item) => {
      if (item.childNodes[1] && item.childNodes[1].name) {
        if (item.childNodes[1].name === "file") {
          console.log(item.childNodes[1].name, item.childNodes[1]);
          fd.append(item.childNodes[1].name, item.childNodes[1].files[0]);
        } else {
          fd.append(item.childNodes[1].name, item.childNodes[1].value);
        }
      }
    });

    fd.append("status", radioValue);

    let response = await fetch(`https://dream-team-n1.herokuapp.com/api/upload`, {
      method: "POST",
      body: fd,
    });
    response = await response.json();
  }
    const validate = Yup.object({
      fullname: Yup.string().required("Ism va familiyangizni to'liq kiriting"),
      tellNumber: Yup.number().required("Telefon raqamingizni kiriting"),
      fullname: Yup.string().required("Ism va familiyangizni to'liq kiriting"),
      professia: Yup.string().required("Proffesiyani kiriting"),
      email: Yup.string().required("Emailingizni kiriting"),
      data: Yup.string().required("Ma'lumot kiritish sanasini belgilang"),
      time: Yup.string().required("Ma'lumot kiritish vaqtini belgilang"),
      watchType: Yup.string().required("Onlayn yoki oflaynligini tanlang"),
      category: Yup.string().required("Kategoriyani kiriting"),
      sub_category: Yup.string().required("Yo'nalishni kiriting"),
      link: Yup.string().required("Linkni kiriting"),
      post_desc: Yup.string().required("Post sarlavhasini to'ldiring"),
      description: Yup.string().required("Ma'lumot kiriting"),
      image: Yup.string().required("Rasm tanlang"),
      text_subject: Yup.string().required("To'liq ma'lumotni kiriting"),
    });

  const [fetchData, setFetchData] = useState([]);
  const [categoyId, setCategoyId] = useState([]);
  const [checkbox, setCheckbox] = useState("Online");

  function categoryHandler(category) {
    setCategoyId(category);
  }

  async function fetchFunc() {
    let fetchRes = await fetch("https://dream-team-n1.herokuapp.com/api/categories");
    fetchRes = await fetchRes.json();
    setFetchData(fetchRes);
  }

  function changeCheckbox(e) {
    if (!e.target.checked) {
      setCheckbox("Online");
    } else if (e.target.checked) {
      setCheckbox("Offline");
    }
  }

  function changeRadio(e) {
    e.target.value = e.target.checked ? false : true;
    setRadioValue(e.target.value);
  }

  return (
    <Container>
      <Formik
        initialValues={{
          personType: "jismoniy_shaxs",
          fullname: "",
          phone: "",
          professia: "",
          email: "",
          date: "",
          time: "",
          status: "",
          category: "",
          sub_category: "",
          location: "",
          title: "",
          short_info: "",
          file: "",
          long_info: "",
        }}
      >
        {(formik) => (
          <Wrapper>
            <Form onSubmit={formSubmit}>
              <div className="user-info">
                <div className="row">
                  <TextField
                    label="Jismoniy shaxs"
                    selected
                    name="person-type"
                    id="yurdik_shaxs"
                    type="radio"
                    value="yurdik_shaxs"
                    checked
                  />
                  <TextField
                    label="Yuridik shaxs"
                    name="person-type"
                    id="jismoniy_shaxs"
                    type="radio"
                    value="jismoniy_shaxs"
                  />
                </div>
                <div className="info">
                  <div>
                    <TextField
                      label="Ism Familiya"
                      name="fullname"
                      type="text"
                    />
                    <TextField label="Tel raqam" name="phone" type="number" />
                  </div>
                  <div>
                    <TextField
                      label="Professiya"
                      name="proffesia"
                      type="text"
                    />
                    <TextField label="Email" name="email" type="email" />
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="date">
                  <TextField name="date" type="date" />
                  <TextField name="time" type="time" />
                  <Checkbox onClick={changeCheckbox}>
                    <input
                      name="status"
                      className="checkbox"
                      value={radioValue}
                      type="checkbox"
                      id="radio"
                      onClick={changeRadio}
                    />
                    <label
                      name="status"
                      className="checkbox-label"
                      htmlFor="radio"
                    >
                      {checkbox}
                    </label>
                  </Checkbox>
                </div>
                <div className="select">
                  <div>
                    <label>Kategoriya</label>
                    <select
                      name="category"
                      onClick={async () => await fetchFunc()}
                      value="IT"
                      id="data-list">
                      {fetchData.map((item) => {
                        return (
                          <option
                            key={item.id}
                            onClick={categoryHandler(item.sap_categories)}
                            value={item.id}>
                            {item.category}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label>Yo'nalish</label>
                    <select
                      name="sub_category"
                      id="data-list">
                        
                    </select>
                  </div>
                </div>

                <div className="link">
                  <TextField label="Manzil" name="location" type="url" />
                </div>
              </div>
              <div>
                <div className="desc">
                  <div className="contex">
                    <div className="wrapper">
                      <div>
                        <label>Post sarlavhasi</label>
                        <textarea rows="5"></textarea>
                      </div>
                      <div>
                        <label>Tavsifi</label>
                        <textarea rows="5"></textarea>
                      </div>
                      <div className="file">
                        <span></span>
                        <img src={upload} alt="upload" />
                        <TextField label="Rasm" name="file" type="file" />
                      </div>
                    </div>
                    <div className="long_desc">
                      <label>Mavzu matni</label>
                      <textarea rows="26"></textarea>
                    </div>
                  </div>
                  <div>
                    <Button className="outline" type="submit">
                      Bekor qilish
                    </Button>
                    <Button type="reset"> E'lon berish </Button>
                  </div>
                </div>
              </div>
            </Form>
          </Wrapper>
        )}
      </Formik>
    </Container>
  );
}

export default Post;
