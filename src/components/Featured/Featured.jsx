import React, { useEffect, useState } from "react";
import "./Featrued.css";
import "../../pages/Properties/Properties.css";
import { PropertiesServices } from "../../services/properties/PropertiesServices";
import { LoadingOutlined } from "@ant-design/icons";
import PropsCard from "../PropsCard/PropsCard";

const Featured = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const propertyInstance = new PropertiesServices();
  const getAllProperties = async () => {
    try {
      const response = await propertyInstance.getProperties();
      const data = await response.data.data;
      setLoading(false);

      setData(data);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProperties();
  }, []);
  return (
    <section className="features">
      <div className="container">
        <h3 className="container cityLabel">Featured Properties</h3>

        <div className="featured-content">
          {loading && <LoadingOutlined className="loadingIndicator" />}
          <div className="content-cards">
            {!loading &&
              data?.length > 0 &&
              data?.slice(0, 3).map((item) => (
                <div key={item._id} className="props-card">
                  <PropsCard item={item} />
                </div>
              ))}
          </div>
          {/* <div className="feat">
            <div className="feat_property">
              <div className="thumb">
                <img
                  className="img-whp w-100 h-100 cover"
                  src={F4}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <Link className="fp_price" to="/listing-details-v1/1">
                    $13000<small>/mo</small>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">Apartment</p>
                  <h4>
                    <Link to="/listing-details-v1/1">Luxury Family Home</Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    1421 San Pedro St, Los Angeles, CA 900015
                  </p>
                  <ul className="prop_details mb0">
                    <li className="list-inline-item">
                      <Link to="#">Beds: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Baths: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">SqFt: 8280</Link>
                    </li>
                  </ul>
                </div>
                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <Link to="/agent-v2">
                        <img src={Person} alt="pposter1.png" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/agent-v2">Mo Hani</Link>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">1 year ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat">
            <div className="feat_property">
              <div className="thumb">
                <img
                  className="img-whp w-100 h-100 cover"
                  src={F1}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <Link className="fp_price" to="/listing-details-v1/1">
                    $13000<small>/mo</small>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">Apartment</p>
                  <h4>
                    <Link to="/listing-details-v1/1">Luxury Family Home</Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    1421 San Pedro St, Los Angeles, CA 900015
                  </p>
                  <ul className="prop_details mb0">
                    <li className="list-inline-item">
                      <Link to="#">Beds: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Baths: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">SqFt: 8280</Link>
                    </li>
                  </ul>
                </div>
                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <Link to="/agent-v2">
                        <img src={Person} alt="pposter1.png" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/agent-v2">Mo Hani</Link>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">1 year ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat">
            <div className="feat_property">
              <div className="thumb">
                <img
                  className="img-whp w-100 h-100 cover"
                  src={F2}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <Link className="fp_price" to="/listing-details-v1/1">
                    $13000<small>/mo</small>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">Apartment</p>
                  <h4>
                    <Link to="/listing-details-v1/1">Luxury Family Home</Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    1421 San Pedro St, Los Angeles, CA 900015
                  </p>
                  <ul className="prop_details mb0">
                    <li className="list-inline-item">
                      <Link to="#">Beds: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Baths: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">SqFt: 8280</Link>
                    </li>
                  </ul>
                </div>
                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <Link to="/agent-v2">
                        <img src={Person} alt="pposter1.png" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/agent-v2">Mo Hani</Link>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">1 year ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="feat">
            <div className="feat_property">
              <div className="thumb">
                <img
                  className="img-whp w-100 h-100 cover"
                  src={F3}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <Link className="fp_price" to="/listing-details-v1/1">
                    $13000<small>/mo</small>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">Apartment</p>
                  <h4>
                    <Link to="/listing-details-v1/1">Luxury Family Home</Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    1421 San Pedro St, Los Angeles, CA 900015
                  </p>
                  <ul className="prop_details mb0">
                    <li className="list-inline-item">
                      <Link to="#">Beds: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Baths: 1</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">SqFt: 8280</Link>
                    </li>
                  </ul>
                </div>
                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <Link to="/agent-v2">
                        <img src={Person} alt="pposter1.png" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/agent-v2">Mo Hani</Link>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">1 year ago</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Featured;
