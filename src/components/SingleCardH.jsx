/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleCardH = ({ brandN }) => {
  const { brand_image, brand } = brandN || {};
  return (
    <Link to={brand}>
      <div className="transition-transform transform hover:scale-105 hover:shadow-lg" data-aos="zoom-in"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="card h-64 bg-orange-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{brand}</h2>
          </div>
          <figure>
            <img className="w-full" src={brand_image} alt={brand} />
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default SingleCardH;

