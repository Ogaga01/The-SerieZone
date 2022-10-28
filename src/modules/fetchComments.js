import renderComments from './renderComments';

const appurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xtuKKDyNMouOiOerlUhE/comments';

// eslint-disable-next-line
const postComments = async (item_id, username, comment) => {
  fetch(appurl, {
    method: 'POST',
    body: JSON.stringify({
      // eslint-disable-next-line
      item_id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

// eslint-disable-next-line
const fetchComments = async (item_id) => {
  const response = await fetch(
    // eslint-disable-next-line
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xtuKKDyNMouOiOerlUhE/comments?item_id=${item_id}`
  );
  const comments = await response.json();

  comments.forEach((comment) => {
    renderComments(comment);
  });
};

export { fetchComments, postComments };
