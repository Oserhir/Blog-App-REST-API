const express = require("express");
const app = express();

const Posts = [
  {
    id: "1581461442206",
    title: "This is a New Blog Post",
    content: "This is the content! ",
    post_image: "uploads/post-image-1581461442199.jpg",
    added_date: "1581461442206",
  },
  {
    id: "1581377760891",
    title: "My first job as a developer",
    content:
      "In college, I met a friend at a computer club who was showing a really cool application where you can swipe between different types of clothing!\nBeing very intrigued, I asked my friend if there is any way I can help out and join the team! After some thinking, he told me to finish an assignment, and then they will consider me. Over the weekend, I finished the assignment and was right away told I can join the team, though I would be working for free. That was completely fine for me! ",
    post_image: "uploads/post-image-1581377760883.jpg",
    added_date: "1581377760891",
  },
  {
    id: "1581376324100",
    title: "I LOVE JavaScript",
    content:
      "I have been using JavaScript since the beginning of my coding career!\nI used it to build simple websites and I used it to build large scale applications!  \nNow I use it to teach others, as well as create large applications. The possibilities of this language are endless, and the use cases keep increasing every single day! ",
    post_image: "uploads/post-image-1581376324096.png",
    added_date: "1581376324100",
  },
  {
    id: "1581375207401",
    title: "Why learning coding is important?",
    content:
      "Nowadays with everything being electronic, everything needs to be programmed! \n\nFrom computers, to cars, machines, or anything else it most likely requires programming!\n\nSo as a result, demand for coders keeps increasing year by year, due to all these technological advances!",
    post_image: "uploads/post-image-1581375207393.jpg",
    added_date: "1581375207401",
  },
];

//  return list of posts
app.get("/api/post", (req, res) => {
  res.status(200).send(Posts);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
