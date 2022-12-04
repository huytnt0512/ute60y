import React, { useState } from "react";
import TestimonialApi from "./ActivitiesApi";
import "./Activities.scss";

const Slide = ({
  id,
  image,
  title,
  post,
  date,
  desc,
  valueIndex,
  index,
  content1,
  content2,
}) => {
  let position = "nextSlider";
  if (valueIndex === index) {
    position = "activeSlider";
  }
  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === TestimonialApi.length - 1)
  ) {
    position = "lastSlider";
  }
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        <div className="left box_shodow btn_shadow" onClick={toggleModal}>
          <div className="img">
            <img src={image} alt="" onClick={toggleModal} />
          </div>
          <div className="details">
            <h2 className="primary_color" onClick={toggleModal}>
              {title}
            </h2>
          </div>
        </div>

        <div className="right ">
          <div className="icon">
            <div className="quote">
              <i
                // style={{ width: "200px", height: "170px" }}
                class="far fa-bell"
              ></i>
            </div>
          </div>

          <div
            className="content box_shodow mtop btn_shadow"
            onClick={toggleModal}
          >
            <h3 className="primary_color">{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>

      {modal && (
        <div className="modal modal-blog">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-text right">
              <img style={{ width: "100%" }} src={content1} alt="" />
              <img style={{ width: "100%" }} src={content2} alt="" />

              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
            <button className="close-modal btn_shadow" onClick={toggleModal}>
              Quay lại
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Slide;
