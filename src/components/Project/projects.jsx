/*import React from 'react';
import projectsData from "../../data/projects.json";
import ProjectCard from './ProjectCard';
import styles from "./Project.module.css"

const Projects = () => {
  return (
    <section className={styles.container} id ="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className ={styles.projects}>
       {projectsData.map((project, id) => {
          return (
            <ProjectCard key= {id} project ={project}/>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;*/
import React from 'react';
import projectsData from "../../data/projects.json";
import ProjectCard from './ProjectCard';
import styles from "./Project.module.css"

const projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </section>
  );
};

export default projects;
