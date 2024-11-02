import styles from "./ProjectsStyles.module.css";
import logoCE from "../../assets/logo-ce.png";
import reservation from "../../assets/fresh-burger.png";
import digitalStore from "../../assets/digital-store.png";
import inOrbit from "../../assets/in-orbit.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logoCE}
          link="https://github.com/eoivo/ce-digital-finances"
          h3="CE Digital Finances"
          p="Financial Control"
        />
        <ProjectCard
          src={reservation}
          link="https://github.com/eoivo/reservation-system"
          h3="Reservation System"
          p="Restaurant reservation system"
        />
        <ProjectCard
          src={digitalStore}
          link="https://github.com/eoivo/projeto-front-end"
          h3="Digital Store"
          p="E-commerce"
        />
        <ProjectCard
          src={inOrbit}
          link="https://github.com/eoivo/in.orbit-"
          h3="InOrbit"
          p="Goal Manager"
        />
      </div>
    </section>
  );
}

export default Projects;
