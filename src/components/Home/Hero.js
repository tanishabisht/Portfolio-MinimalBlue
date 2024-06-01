import { name, desc, subDesc, ctaPrimaryBtn, ctaSecondaryBtn, linkedInLink, myImage } from '../../content/home'

const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="contentCol">
        <p className="contentCol__subheading">Who am I?</p>
        <h1 className="contentCol__name">{name}</h1>
        <p className="subContent" style={{ marginBottom: "2rem" }}>{desc}</p>

        {subDesc}

        <div className="contentCol__btns">
          <a href={ctaPrimaryBtn.href}>
            <button className="contentCol__btns__regular">{ctaPrimaryBtn.text}</button>
          </a>
          <a target="_blank" href={ctaSecondaryBtn.href}>
            <button className="contentCol__btns__outline">{ctaSecondaryBtn.text}</button>
          </a>
        </div>
      </div>
      <div className="imageCol">
        <img src={myImage} width={420} height={630} />
      </div>
    </section>
  );
};

export default Hero;
