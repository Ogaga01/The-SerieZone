
const mainDiv = document.querySelector('.main')
// const commentDiv = document.querySelector('.comments-div')

const showComments = () => {
    let commentBtn;

    mainDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("comment")) {
        commentBtn = e.target;        
      }
      
        commentBtn.addEventListener("click", () => {;
          commentBtn.closest(".series-div").querySelector(".comments-div").classList.add("flex");
        });
    });
}

export default showComments
