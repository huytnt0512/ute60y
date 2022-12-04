import React from "react";
// import "../Portfolio/Portfolio.css";
import "./Program.scss";
import Card from "./Card";
import ProgramApi from "./ProgramApi";

const Program = () => {
  return (
    <>
      <section className="program mt" id="program">
        <div className="container">
          <div>
            <h2 className="section__title">CÁC HOẠT ĐỘNG GẦN ĐÂY</h2>
          </div>

          <div className="content mtop grid">
            {ProgramApi.map((value, index) => {
              return (
                <Card
                  key={index}
                  image1={value.image1}
                  date={value.date}
                  title_one={value.title_one}
                  desc_one={value.desc_one}
                  desc_two={value.desc_two}
                  desc_three={value.desc_three}
                  desc_four={value.desc_four}
                  image2={value.image2}
                  image3={value.image3}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
