const appurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vop8n5T54ESGQQ1oDMGd/comments';

const postComments = (item_id, username, comment) => {
  fetch(appurl, {
    method: "POST",
    body: JSON.stringify({
      item_id: show.id,
      username: username,
      comment: comment,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getComments = async (item_id) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vop8n5T54ESGQQ1oDMGd/comments/${item_id}`
    );
    const comments = await response.json()

    comments.forEach((comment) => {
        renderComments(comment)
    })
}
