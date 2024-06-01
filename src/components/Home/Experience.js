import { allExperiences } from '../../content/home'

const Experience = () => {
  return (
    <section className="container">
      <h1 className="header">My work experience</h1>
      <p className="subContent">
        From Campus Clubs to Startups and Open Source Communities
      </p>
      <div className="expGrid">
        {allExperiences.map((e, k) => (
          <div className="expGrid__card" key={k}>
            <h2 className="expGrid__card__company">{e.company}</h2>
            <h3 className="expGrid__card__role">{e.role}</h3>
            <p className="expGrid__card__duration">{e.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
