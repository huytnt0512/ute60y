import React, { useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.scss";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",

    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 

	Here is my message I want to say : ${data.message}. 
	`
    );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container mt">
          <div className="heading text-center">
            <h2 className="section__title">Contact</h2>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Trường Đại học Sư Phạm Kỹ thuật -</h1>
                  <h1>Đại học Đà Nẵng</h1>
                  <br />
                  <p>Địa chỉ: 48 Cao Thắng, Thanh Bình, Hải Châu, Đà Nẵng</p>
                  <p>Điện Thoại: (0236) 3822571</p>
                  <p>Email: dhspktdn@ute.udn.vn</p> <br />
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>

                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
