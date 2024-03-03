import { BlogTemplate } from "../../components";

const dummyData = {
  number: "01",
  topic: "Prevent Scroll Chaining With Overscroll Behavior",
  credits: {
    postedOn: "Aug 15, 2021",
    editedBy: "Yuvika Bisht",
    illustrationsBy: "Sudhanshu Singh",
  },
  summary:
    "There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients.",
  content: [
    {
      tag: "para",
      data: "There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients and color functions and in combination with CSS custom properties. We'll learn the syntax for each, view basic demos of their functionality, and explore practical use cases.",
    },
    { tag: "img", data: "/light_me.png" },
    {
      tag: "para",
      data: "There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients and color functions and in combination with CSS custom properties. We'll learn the syntax for each, view basic demos of their functionality, and explore practical use cases.",
    },
    {
      tag: "para",
      data: "There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients and color functions and in combination with CSS custom properties. We'll learn the syntax for each, view basic demos of their functionality, and explore practical use cases.",
    },
    { tag: "img", data: "/light_me.png" },
    {
      tag: "para",
      data: "There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients and color functions and in combination with CSS custom properties. We'll learn the syntax for each, view basic demos of their functionality, and explore practical use cases.",
    },
  ],
};

const css001 = () => {
  return (
    <>
      <BlogTemplate blogContent={dummyData} />
    </>
  );
};

export default css001;
