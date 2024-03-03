const SelectedProjects = () => {
  return (
    <div className="container">
      <h1 className="header selHeader">Selected from collection</h1>

      <div className="selCard selCard--one">
        <p className="selCard__number">01</p>
        <div className="selCard__content">
          <h1 className="selCard__heading">LunarOps</h1>
          <div className="selCard__content__links">
            <a href="https://github.com/tanishabisht/LunarOps" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=DtDYor2o5R8&feature=youtu.be"
              target="_blank"
            >
              Video
            </a>
          </div>
        </div>
      </div>

      <div className="selCard selCard--two">
        <p className="selCard__number">02</p>
        <div className="selCard__content">
          <h1 className="selCard__heading">Eureka</h1>
          <div className="selCard__content__links">
            <a
              href="https://github.com/tanishabisht/CaffeineOverflow-FrontEnd"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=llKI-qmbowA&t=6s"
              target="_blank"
            >
              Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
