import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import whatsappLight from "../../assets/whatsapp-light.svg";
import whatsappDark from "../../assets/whatsapp-dark.svg";
import CV from "../../assets/Ivo Martins Fernandes Dev.pdf.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const whatsappIcon = theme === "light" ? whatsappLight : whatsappDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ivo Fernandes"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ivo
          <br />
          Fernandes
        </h1>
        <h2>Full Stack Web Developer</h2>
        <span>
          <a href="https://wa.me/5511999999999" target="_blank">
            <img src={whatsappIcon} alt="WhatsApp icon" />
          </a>
          <a href="https://github.com/eoivo" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://linkedin.com/in/ivo-dev" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Sou um desenvolvedor Web Full Stack apaixonado por criar sites e
          aplicativos fáceis de usar e visualmente atraentes.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
