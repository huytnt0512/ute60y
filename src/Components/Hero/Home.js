import React from "react";
import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
import Slider from "./Slider/Slider";
import Particle from "./Particle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Particle />
      <section className="hero" id="home">
        <div className="container f_flex">
          <div className="left top">
            <h1>
              <span>
                <Typewriter
                  words={["UTE Xin Chào ", "Hello!"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h2>
              Chào mừng Kỷ niệm <span>60 năm</span>
              <h2>Xây dựng và Phát triển</h2>
              <h2>Trường Đại học Sư phạm Kỹ thuật</h2>
              <h3>(1962-2022)</h3>
            </h2>

            <p>
              Năm 2022 đánh dấu quá trình 60 năm xây dựng và phát triển của
              Trường Đại học Sư phạm Kỹ thuật, tiền thân là Trường Kỹ thuật Đà
              Nẵng (1962-1975), Trường Kỹ thuật Nguyễn Văn Trỗi (1975-1994),
              Trường Cao đẳng Công nghệ (1994-2017).
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4></h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/tuyensinhdhspkt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>

                  <a
                    href="https://ute.udn.vn/default.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i class="fas fa-university"></i>
                    </button>
                  </a>
                  <a
                    href="http://60nam.ute.udn.vn/default.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i>60</i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_tv">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
