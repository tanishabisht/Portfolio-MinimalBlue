const experience = [
  {
    company: "InSynchro",
    role: "Associate Software Developer",
    duration: "Jun. 2020 - Jun. 2023",
  },
  {
    company: "CIGS Technology",
    role: "Intern",
    duration: "Dec. 2022 - May. 2023",
  },
  {
    company: "Biocom",
    role: "Technical Domain Head",
    duration: "Sep. 2021 - Jan. 2023",
  },
  { company: "ClayStack", role: "Intern", duration: "Dec. 2021 - Jan. 2022" },
  {
    company: "IncubateIND",
    role: "GitHub Extern 2021",
    duration: "Jul. 2021 - Oct. 2021",
  },
  { company: "TNAU", role: "Project Intern", duration: "10 - 16 Sep. 2021" },
  {
    company: "InSynchro",
    role: "Internr",
    duration: "Mar. 2020 - May 2020",
  },
];

const Experience = () => {
  return (
    <section className="container">
      <h1 className="header">My work experience</h1>
      <p className="subContent">
        From Campus Clubs to Startups and Open Source Communities
      </p>
      <div className="expGrid">
        {experience.map((e, k) => (
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
