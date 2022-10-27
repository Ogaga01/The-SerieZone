const commentList = document.querySelector('.comment-list')

const renderComments = (comment) => {
    const html = `
        <li class="comment-item" id='show.id'>
            <h3 class="person">${comment.username}</h3>
            <p class="comm">${comment.comment}</p>
        </li>
    `;
    commentList.insertAdjacentHTML('afterbegin', html)
}
export default renderComments