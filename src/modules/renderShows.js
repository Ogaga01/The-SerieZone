const mainSection = document.querySelector('.main')

const renderShows = (shows) => {
    shows.forEach((show) => {
        const html = `
            <div class="series-div" id="${show.id}" style="background: url(&quot;${show.image.medium}&quot;) center /  cover no-repeat; display: block;">
                <i class="fa-solid fa-circle-info"></i>
                <div class="about-series">
                    <h2 class="name">${show.name}</h2>
                    <div class="like-comment">
                        <div class="like-div">
                            <p class="likes">2 Likes</p>
                            <p class="likes-icon">Like <i class="fa-solid fa-thumbs-up"></i></p>
                        </div>
                        <div class="comment-div">
                            <p class="comment">Comment <i class="fa-solid fa-comment"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comments-div">
                <i class="fa-solid comment-close fa-xmark"></i>
                <h1 class="comment-header">Comments</h1>
                <ul class="comments-list">
                    
                </ul>
                <input type="text" class="comment-input" placeholder="Name">
                <textarea class="comment-text"></textarea>
                <button type="button" class="comment-btn">Add Comment</button>
            </div>
            <div class="series-info">
                <i class="fa-solid info-cancel fa-xmark"></i>
                <h1 class="info-header">INFO</h1>
                <p class="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            </div>
        `;
        mainSection.insertAdjacentHTML('beforeend', html)
    })
}

export default renderShows