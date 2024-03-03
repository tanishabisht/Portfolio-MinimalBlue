import { useState } from "react";
import { writingContent } from "../../content/writings";

const Writing = () => {
  const [category, setCategory] = useState("css");
  const onSelectCategory = (e) => setCategory(e.target.textContent);
  console.log(writingContent[category]);

  return (
    <>
      <div className="container">
        <h1 className="header">Some of my writings</h1>
        <p className="writingContent">
          I like writing and recording my experiences with technologies that
          interest me. Everything is written down based on how I would have
          approached the problem or topic if I could go back in time. This is my
          attempt to write down a roadmap I wish I had along my journey.
        </p>

        {/* <div className="categories">
          {Object.keys(writingContent).map((e, k) => (
            <span
              className={`categories__category ${
                category === e ? "categories__category--active" : null
              }`}
              onClick={onSelectCategory}
              key={k}
            >
              {e}
            </span>
          ))}
        </div> */}

        {writingContent[category].map((e, k) => (
          <div className="writingBlog" key={k}>
            <a href={`/writings/${e.id}`}>
              <h1 className="writingBlog__name">{e.name}</h1>
              <p className="writingBlog__date">{e.postedOn}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Writing;
