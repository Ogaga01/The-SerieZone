const closeCommentDiv = () => {
    const closeBtn = document.querySelectorAll(".comment-close");
    const commentDiv = document.querySelectorAll(".comments-div");
    closeBtn.forEach((button) => {
        button.addEventListener('click', () => {
            commentDiv.forEach((div) => {
                div.classList.add('none')
            })
        })
    })
}
export default closeCommentDiv