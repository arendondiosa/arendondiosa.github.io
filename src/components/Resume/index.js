import React from "react";

import { Education } from "./components/Education";
import { WorkExperience } from "./components/WorkExperience";

import data from "./data.json";

export const Resume = () => {
  return (
    <div id="fh5co-resume" className="fh5co-bg-dark fh5co-bg-color">
      <div className="container">
        <div className="row justify-content-center animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>My Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <WorkExperience data={data.work_experience || []} />
            <Education data={data.education || []} />
          </div>
        </div>
      </div>
    </div>
  );
};
