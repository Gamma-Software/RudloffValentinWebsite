import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Timeline, Event } from "react-timeline-scribble";

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills <span>& </span>Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ scale : [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.25 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp scroll-item">
          <Fragment>
            <Timeline>
              {experiences.sort((a, b) => a.from < b.from ? 1 : -1).map((experience, index) => (
                <div
                  className="app__skills-exp-item"
                  key={experience.from+experience.to+index}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Event interval={experience.from + ' - ' + (experience.to ? experience.to: 'Today')} title={experience.position} subtitle={experience.company}>
                    {experience.desc}
                  </Event>
                </div>
              ))}
            </Timeline>
          </Fragment> 
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
