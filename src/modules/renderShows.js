import addComments from './addComments';
import closeCommentDiv from './closeCommenDiv';
import closeInfoDiv from './closeInfoDiv';

import renderInfo from './renderInfo';
import showComments from './showComments';

const mainSection = document.querySelector('.main');

const renderShows = (shows) => {
  mainSection.innerHTML = '';
  shows.forEach((show) => {
    const newSummary = show.summary.slice(3, -4);
    const html = `
            <div class="series-div" id="${show.id}" style="background: url(&quot;${show.image.original}&quot;) center /  cover no-repeat; display: block;">
                <i class="fa-solid fa-circle-info" id='${show.id}'></i>
                <div class="about-series">
                    <h2 class="name">${show.name}</h2>
                    <div class="like-comment">
                        <div class="like-div">
                            <p class="likes">2 Likes</p>
                            <p class="likes-icon">Like <i class="fa-solid fa-thumbs-up"></i></p>
                        </div>
                        <div class="comment-div" id='${show.id}'>
                            <p class="comment" id='${show.id}'>Comment <i class="fa-solid fa-comment"></i></p>
                        </div>
                    </div>
                </div>
                    <div class="comments-div none" id='${show.id}'>
                    <i class="fa-solid comment-close fa-xmark"></i>
                    <h1 class="comment-header">Comments</h1>
                    <ul class="comments-list" id='${show.id}'>
                        
                    </ul>
                    <input type="text" class="comment-input" placeholder="Name" id='${show.id}'>
                    <textarea class="comment-text" id='${show.id}' placeholder='Your Comment'></textarea>
                    <button type="button" class="comment-btn" id='${show.id}'>Add Comment</button>
                </div>
                <div class="series-info none" id='${show.id}'>
                    <i class="fa-solid info-cancel fa-xmark"></i>
                    <h1 class="info-header">INFO</h1>
                    <p class="info">${newSummary}</p>
                </div>
            </div>
        `;
    mainSection.insertAdjacentHTML('beforeend', html);
  });

  showComments();
  renderInfo();
  addComments();
  closeCommentDiv();
  closeInfoDiv();
};

export default renderShows;