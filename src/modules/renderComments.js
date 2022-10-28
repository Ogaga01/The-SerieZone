const renderComments = (comment) => {
    const commentList = document.querySelectorAll('.comments-list')
    console.log(commentList)
    const html = `
        <li class="comment-item">
            <h3 class="person">${comment.username}</h3>
            <p class="comm">${comment.comment}</p>
        </li>
    `;
    commentList.forEach((list) => {
        list.insertAdjacentHTML("afterbegin", html);
    })
}
export default renderComments   
    