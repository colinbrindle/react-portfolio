import React from "react";
import "../../styles/Project.css";

function Project() {
  return (
    <div>
      <a name="Portfolio"></a>
      <div className="container project-margin">
        <div className="row">
          <div className="col-lg-3 col-sm-12 text-lg-end text-sm-start">
            <h2>Portfolio</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div>First item</div>
            <div>Second item</div>
            <div>Third item</div>
            <div>Fourth item</div>
            <div>Fifth item</div>
            <div>Sixth item</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
