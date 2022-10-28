import renderComments from "./renderComments";

const baseurl = `https://api.tvmaze.com/shows`;
const appurl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xtuKKDyNMouOiOerlUhE/comments";

const postComments = async (item_id, username, comment) => {
  fetch(appurl, {
    method: "POST",
    body: JSON.stringify({
      item_id: item_id,
      username: username,
      comment: comment,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const fetchComments = async (item_id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xtuKKDyNMouOiOerlUhE/comments?item_id=${item_id}`
  );
  const comments = await response.json();

  console.log(comments);

  comments.forEach((comment) => {
    if (comment.id === item_id) {
      renderComments(comment);
    }
  });
};

export { fetchComments, postComments };
