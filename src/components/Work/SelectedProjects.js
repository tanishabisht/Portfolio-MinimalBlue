import { selectedProjects } from '../../content/projects'

const SelectedProjects = () => {
  return (
    <div className="container">
      <h1 className="header selHeader">Selected from collection</h1>
      {selectedProjects.map((proj, k) => (
        <div className={`selCard ${proj.className}`} key={k}>
          <p className="selCard__number">{proj.number}</p>
          <div className="selCard__content">
            <h1 className="selCard__heading">{proj.name}</h1>
            <div className="selCard__content__links">
              {proj.ghLink && <a href={proj.ghLink} target="_blank">Github</a>}
              {proj.vidLink && <a href={proj.vidLink} target="_blank">Video</a>}
              {proj.siteLink && <a href={proj.siteLink} target="_blank">Website</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedProjects;