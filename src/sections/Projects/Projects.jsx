import styles from "./ProjectsStyles.module.css";
import logoCE from "../../assets/logo-ce.png";
import reservation from "../../assets/fresh-burger.png";
import digitalStore from "../../assets/digital-store.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logoCE}
          link="https://github.com/eoivo/ce-digital-finances"
          h3="CE Digital Finanças"
          p="Gestão Financeira"
        />
        <ProjectCard
          src={reservation}
          link="https://github.com/eoivo/sistema-de-reservas"
          h3="Sistema de Reservas"
          p="Sistema prático para reservas de mesas."
        />
        <ProjectCard
          src={digitalStore}
          link="https://github.com/eoivo/digital-store"
          h3="Digital Store"
          p="E-commerce"
        />
      </div>
    </section>
  );
}

export default Projects;
