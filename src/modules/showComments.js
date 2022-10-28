const showComments = () => {
    const commentDiv = document.querySelectorAll('.comments-div')
    const commentBtn = document.querySelectorAll(".comment");
    commentBtn.forEach((button) => {
            button.addEventListener('click', () => {
                commentDiv.forEach((div) => {
                    if (div.id === button.id) {
                    div.classList.remove('none')
                    div.classList.add('flex')
                }
            })
        })
    })
};

export default showComments;
