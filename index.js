const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
  { title: "Post Three", body: "This is Post three" },
  { title: "Post Four", body: "This is Post Four" },
];

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let userLastActivityTime = new Date().getTime();
      resolve(userLastActivityTime);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    });
  });
}
const promises = async () => {
  const [postsResolved, lastActivityTime] = await Promise.all([
    createPost({ title: "Post Five", body: "This is Post Five" }),
    updateLastUserActivityTime(),
  ]);
  console.log(postsResolved);
  console.log(lastActivityTime);
};

promises();
