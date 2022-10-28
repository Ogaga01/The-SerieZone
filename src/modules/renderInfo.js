const renderInfo = () => {
    const infoBtn = document.querySelectorAll(".fa-circle-info");
    const infoDiv = document.querySelectorAll(".series-info");

    infoBtn.forEach((button) => {
        button.addEventListener('click', () => {
            infoDiv.forEach((div) => {
              if (div.id === button.id) {
                div.classList.remove("none");
                div.classList.add("flex");
              }
            });
        })
        
    })
    
}
export default renderInfo
