import React, { useState, useEffect } from "react";
import "./Activities.scss";
import Slide from "./Slide";
import TestimonialApi from "./ActivitiesApi";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

const Activities = () => {
  const [data, setdata] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <section className="activities mt" id="activities">
        <div className="container">
          <div className="">
            <h2 className="section__title mb">CHƯƠNG TRÌNH KỶ NIỆM</h2>
          </div>
          <CountdownTimer countdownTimestampMs={1668790800000} />
          <div className="slider mtop">
            {data.map((value, valueIndex) => {
              return (
                <Slide
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}

            <div className="slider_button">
              <button
                className="btn_shadow prev_btn"
                onClick={() => setIndex(index - 1)}
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <button
                className="btn_shadow next_btn"
                onClick={() => setIndex(index + 1)}
              >
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
