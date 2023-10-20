/* eslint-disable react/prop-types */

const SingleCardH = ({brand}) => {
  const {brand_image,brandN} = brand || {}
  return (
    <div>
     <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{brandN}</h2>
   
  </div>
  <figure><img src={brand_image} /></figure>
</div>
    </div>
  );
};

export default SingleCardH;
