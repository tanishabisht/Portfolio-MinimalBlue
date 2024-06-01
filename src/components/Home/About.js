import { aboutGridContent } from '../../content/home'

const About = () => {
  return (
    <section className="aboutContainer">
      {aboutGridContent.map((abt, abtIdx) => (
        <div className="aboutContainer__row" key={abtIdx}>
          <div className="aboutContainer__col">
            <p className="aboutContainer__col__subHeading">{abt.left.heading}</p>
            {abt.left.text}
          </div>
          <div className="aboutContainer__col">
            <p className="aboutContainer__col__subHeading">{abt.right.heading}</p>
            {abt.right.text}
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
