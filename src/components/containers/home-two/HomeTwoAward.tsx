import React from "react";
import Image from "next/image";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} height={750} width={750} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                 Our <span>Progress</span>
              </h2>
              <div className="paragraph">
                <p>
                  Over the past three years, our web development agency has successfully completed over 50 projects. Each year, our business has more than doubled in growth. Additionally, we are continuously expanding our development toolkit to better serve our clients' needs.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2022</h4>
                  <h4>5</h4>
                  <p>Projects</p>
                </div>
                <div className="single">
                  <h4>2023</h4>
                  <h4>13</h4>
                  <p>Projects</p>
                </div>
                <div className="single">
                  <h4>2024</h4>
                  <h4>30+</h4>
                  <p>Projects</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
