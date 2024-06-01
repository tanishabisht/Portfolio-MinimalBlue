import { useTheme } from '../../utilities';
import LightMeImage from '../../public/light_me.png'
import DarkMeImage from '../../public/dark_me.png'
import { name, tagline, resumeLink, linkedInLink } from '../../content/home'


const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="heroContainer">
      <div className="contentCol">
        <p className="contentCol__subheading">Who am I?</p>
        <h1 className="contentCol__name">{name}</h1>
        <p className="subContent" style={{ marginBottom: "2rem" }}>{tagline}</p>
        <p>Currently pursuing her master's in Computer Science at <b>Columbia
          University</b> in the heart of NYC!
        </p>
        <div className="contentCol__btns">
          <a target="_blank" href={resumeLink}>
            <button className="contentCol__btns__regular">My Resume</button>
          </a>
          <a target="_blank" href={linkedInLink}>
            <button className="contentCol__btns__outline">Contact Me</button>
          </a>
        </div>
      </div>
      <div className="imageCol">
        {theme === "light" ? (
          <img src={LightMeImage} width={420} height={630} />
        ) : (
          <img src={DarkMeImage} width={420} height={630} />
        )}
      </div>
    </section>
  );
};

export default Hero;
