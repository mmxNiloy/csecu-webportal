import React from "react";

function LabInfo() {
  return (
    <>
      <h2 className="section-title">Lab Facilities</h2>
      <hr />
      <div className="grid grid-cols-3 gap-4 container my-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format"
              className="card-img-top"
              alt="Research Highlight"
            />
            <div className="card-body">
              <h5 className="card-title">CU ACM</h5>
              <p className="card-text">
                We have students exchange and research collaboration program
                with a number of universities abroad and also academia-industry
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://www.shutterstock.com/image-photo/empty-playing-gaming-chair-game-600nw-2273361459.jpg"
              className="card-img-top"
              alt="Media Lab"
            />
            <div className="card-body">
              <h5 className="card-title">Programming Club</h5>
              <p className="card-text">
                The media lab ensures the opportunity for the students to foster
                the advancement of convergence media and highlights the
                university achievements.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-custom">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtppiwlQ3WKUnC8j3_57ron1LSZAfXZBcng&s"
              className="card-img-top"
              alt="Experimental Labs"
            />
            <div className="card-body">
              <h5 className="card-title">Simulation Lab</h5>
              <p className="card-text">
                A good number of world-class research and experimental
                laboratories enrich our teaching and learning methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabInfo;
