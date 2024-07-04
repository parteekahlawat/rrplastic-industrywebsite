import React from "react";
import viewData from "./viewImage";
import { useParams } from "react-router-dom";
const ViewComp = () => {
  const { id } = useParams();
  const idData  = id;
  console.log(id)
  return (
    <div>
      <div>
        <a href="/" className="btn btn-primary">
          Close
        </a>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {viewData.map((data, index) => {
            const chk = (data.id === id);
          return chk ? data.photos.map((photo, idx) => (
                <div className="product-photos" key={idx}>
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="300px"
                    height="300px"
                    src={photo}
                    alt="Image"
                    style={{borderRadius: "20px", width:"fit", height:"auto"}}
                  />
                </div>
              ))
            : null;
        })}
      </div>
      {/* <p>Hiiiiiii</p> */}
    </div>
  );
};

export default ViewComp;
