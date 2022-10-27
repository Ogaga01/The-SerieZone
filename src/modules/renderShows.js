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
        `;
        mainSection.insertAdjacentHTML('beforeend', html)
    })
}

export default renderShows