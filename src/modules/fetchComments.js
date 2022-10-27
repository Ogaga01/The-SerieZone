import renderComments from "./renderComments";

const baseurl = `https://api.tvmaze.com/shows`;
const appurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vop8n5T54ESGQQ1oDMGd/comments';

const postComments = async (item_id, username, comment) => {
  const response = await fetch(baseurl)
  const shows = await response.json()

  shows.forEach((show) => {
    item_id = show.id

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
  })
};

const fetchComments = async (item_id) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vop8n5T54ESGQQ1oDMGd/comments?item_id=${item_id}`
    );
    const comments = await response.json()

    comments.forEach((comment) => {
        renderComments(comment)
    })
}

export {fetchComments, postComments}
