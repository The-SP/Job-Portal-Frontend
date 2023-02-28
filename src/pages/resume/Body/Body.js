import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
// import { ArrowDown } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const sections = {
    basicInfo: "Basic Info",
    summary: "About Me",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState("#00324A");
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    }
  });

  return (
    <div className={styles.container}>
      <p className={`${styles.heading} page-title`}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div>
          <label>Color picker</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={activeColor}
            onChange={(e) => setActiveColor(e.target.value)}
            title="Choose your color"
          />
        </div>
        <div>
        <ReactToPrint
          trigger={() => {
            return (
              <button style={{ background: activeColor }}>
                Download{" "}
                <i
                  className="bi bi-file-earmark-arrow-down-fill fa-lg"
                  role="button"
                ></i>
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        </div>
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
