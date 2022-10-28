const closeInfoDiv = () => {
    const closeBtn = document.querySelectorAll(".info-cancel");
    const seriesDiv = document.querySelectorAll(".series-info");

    closeBtn.forEach((button) => {
        button.addEventListener('click', () => {
            seriesDiv.forEach((div) => {
                div.classList.add('none')
            })
        })
    })
}
export default closeInfoDiv