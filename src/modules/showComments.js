const mainDiv = document.querySelector(".main");
// const commentDiv = document.querySelector('.comments-div')

const showComments = () => {
  let commentBtn;
  let seriesDiv;

  mainDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("comment")) {
      commentBtn = e.target;
      seriesDiv = commentBtn.closest(".series-div");
      
      commentBtn.addEventListener("click", () => {
        const html = `
        <div class="comments-div none">
            <i class="fa-solid comment-close fa-xmark"></i>
            <h1 class="comment-header">Comments</h1>
            <ul class="comments-list">
                
            </ul>
            <input type="text" class="comment-input" placeholder="Name">
            <textarea class="comment-text"></textarea>
            <button type="button" class="comment-btn">Add Comment</button>
        </div>
    `;
        seriesDiv.insertAdjacentHTML("afterend", html);

        const commentDiv = commentBtn
          .closest(".main")
          .querySelector(".comments-div");
        commentDiv.classList.remove("none");
        commentDiv.classList.add("flex");
      });
    }

    
  });
};

export default showComments;
