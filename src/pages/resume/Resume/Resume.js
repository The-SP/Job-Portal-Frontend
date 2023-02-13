import React, { forwardRef, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
} from "react-feather";

import styles from "./Resume.module.css";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const activeColor=props.activeColor;
  const containerRef = useRef();

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref}>
      <div ref={containerRef} className={styles.main}>
        <section className={styles.leftsection} style={{ background: activeColor }}>
          <div className={styles.leftcontent}>
            <div className={styles.profile}>
                <h2 className={styles.name}>{info.basicInfo?.detail?.name}</h2>
                <p className={styles.career}>{info.basicInfo?.detail?.title}</p>
            </div>
            <div className={styles.contactinfo}>
                <h4 className={styles.maintitle}>Contact Info</h4>
                <ul>
                    
                    {info.basicInfo?.detail?.phone ? (
                      <li>
                      <i className="fa fa-phone"></i>
                      {info.basicInfo?.detail?.phone}
                    </li>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.email ? (
                      <li>
                      <i className="fa fa-fax"></i>
                      {info.basicInfo?.detail?.email}
                    </li>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.linkedin ? (
                      <li>
                      <i className="fa fa-linkedin"></i>
                      {info.basicInfo?.detail?.linkedin}
                    </li>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                      <li>
                      <i className="fa fa-github"></i>
                      {info.basicInfo?.detail?.github}
                    </li>
                    ) : (
                      <span />
                    )}
                </ul>
            </div>
            <section className={styles.educationsect}>
                <h4 className={styles.maintitle}>Education</h4>
                {info.education?.details?.map((item)=>(
                  <div className={styles.educontent} key={item.title}>
                      <div className={styles.educontent}>
                        {item.startDate && item.endDate ? (
                        <div className={styles.paraedu} style={{color:'#f7f7f7ec'}}>
                          {getFormattedDate(item.startDate)}-
                                {getFormattedDate(item.endDate)}
                        </div>
                        ) : (
                        <div />
                        )}
                      {item.title? (
                            <h5 className={styles.tltitle2}>{item.title}</h5>
                          ):(
                            <span/>
                          )}
                          <h6 className={styles.paraedu}>
                              {item.college}
                          </h6>
                      {item.location ? (
                      <h6 className={styles.paraedu}>
                          {item.location}
                        </h6>
                      ) : (
                        <span />
                      )}
                    </div> 
                  </div>
                ))} 
              </section>
          </div>
        </section>
        <section className={styles.rightsection}>
          <div className={styles.rightmaincontent}>
                <section className={styles.aboutsect}>
                    <h4 className={styles.righttitle}>About Me</h4>
                    {info.summary.detail?(
                      <p className={styles.para}>
                      {info.summary.detail}
                      </p>
                    ):(
                      <span />
                    )}
                </section>
              <section className={styles.experiencesect}>
                <h4 className={styles.righttitle}>Experience</h4>
                {info.workExp?.details?.map((item)=>(
                  <div className={styles.timeline} key={item.title}>
                    <div className={styles.lefttlcontent}>
                      {item.companyName ? (
                        <h5 className={styles.tltitle}>{item.companyName}</h5>
                          ) : (
                          <span />
                        )}
                      {item.location ? (
                      <p className={styles.para}>
                          <MapPin /> {item.location}
                        </p>
                      ) : (
                        <span />
                      )}
                      {item.startDate && item.endDate ? (
                        <div className={styles.para}>
                          <Calendar /> {getFormattedDate(item.startDate)}-
                                {getFormattedDate(item.endDate)}
                        </div>
                        ) : (
                        <div />
                        )}
                    </div>
                    <div className={styles.righttlcontent}>
                      <div className={styles.tlcontent}>
                          {item.title? (
                            <h5 className={styles.tltitle2}>{item.title}</h5>
                          ):(
                            <span/>
                          )}
                          <p className={styles.para}>
                              {item.description}
                          </p>
                      </div>
                    </div>
                  </div>
                ))} 
              </section>
              <section className={styles.projectsect}>
                <h4 className={styles.righttitle}>Projects</h4>
                {info.project?.details?.map((item)=>(
                  <div className={styles.timeline} key={item.title}>
                    <div className={styles.lefttlcontent}>
                      {item.title ? (
                        <h5 className={styles.tltitle}>{item.title}</h5>
                          ) : (
                          <span />
                        )}
                      {item.link ? (
                        <p className={styles.para}>
                        <i className="fa fa-globe mx-3 pt-3"></i>
                        {item.link}
                        </p>
                          ) : (
                          <span />
                        )}
                      {item.github ? (
                        <p className={styles.para}>
                        <i className="fa fa-github mx-3"></i>
                        {item.github}
                        </p>
                          ) : (
                          <span />
                        )}
                    </div>
                    <div className={styles.righttlcontent}>
                      <div className={styles.tlcontent}>
                          {item.overview? (
                            <h5 className={styles.tltitle2}>Overview of project:</h5>
                          ):(
                            <span/>
                          )}
                          <p className={styles.para}>
                              {item.overview}
                          </p>
                      </div>
                    </div>
                  </div>
                ))} 
              </section>
              <section>
              <h4 className={styles.righttitle}>Achievements</h4>
              <p className={styles.para}>
              {info.achievement?.points?.length > 0 ? (
                <ul className={styles.numbered}>
                  {info.achievement?.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
              </p>
              </section>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Resume;

