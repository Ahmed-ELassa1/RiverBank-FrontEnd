import React from "react";
import "./OurServices.css";
import Icon from "../../assets/house.png";
import { HomeFilled } from "@ant-design/icons";

const OurServices = () => {
  return (
    <section className="ourServices">
      <div className="container">
        <div className="sections-header-container">
          <h3 className="services-section-header">Our Services</h3>
          <h3 className="services-section-subheader">Find your dream home with us today.</h3>
        </div>
        <div className="services">
          <div className="serviceCard">
            <div className="serviceLabel">
              <HomeFilled style={{ fontSize: "25px", color: "#fff" }} />
            </div>
            <div className="service-content">
              <h4 className="serviceTitle">Houses</h4>
              <p>
                Nonec pede justo fringilla vel aliquet nec vulputate eget arcu
                in enim justo rhoncus ut imperdiet venenatis vitae justo.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceLabel">
              <HomeFilled style={{ fontSize: "25px", color: "#fff" }} />
            </div>
            <div className="service-content">
              <h4 className="serviceTitle">Houses</h4>
              <p>
                Nonec pede justo fringilla vel aliquet nec vulputate eget arcu
                in enim justo rhoncus ut imperdiet venenatis vitae justo.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceLabel">
              <HomeFilled style={{ fontSize: "25px", color: "#fff" }} />
            </div>
            <div className="service-content">
              <h4 className="serviceTitle">Houses</h4>
              <p>
                Nonec pede justo fringilla vel aliquet nec vulputate eget arcu
                in enim justo rhoncus ut imperdiet venenatis vitae justo.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceLabel">
              <HomeFilled style={{ fontSize: "25px", color: "#fff" }} />
            </div>
            <div className="service-content">
              <h4 className="serviceTitle">Houses</h4>
              <p>
                Nonec pede justo fringilla vel aliquet nec vulputate eget arcu
                in enim justo rhoncus ut imperdiet venenatis vitae justo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
