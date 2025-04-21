import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" className={styles.projectCard}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <div className={styles.projectInfo}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
