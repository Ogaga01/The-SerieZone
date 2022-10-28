import { fetchComments, postComments } from "./fetchComments";

const addComments = () => {
    const nameInput = document.querySelectorAll(".comment-input");
    const textInput = document.querySelectorAll(".comment-text");

    const addBtn = document.querySelectorAll(".comment-btn");
    addBtn.forEach((button) => {
        button.addEventListener('click', () => {
            let person;
            let text
            nameInput.forEach((name) => {
                if (name.id === button.id) {
                   person = name
               }
            })
            textInput.forEach((input) => {
                if (input.id === button.id) {
                    text = input
                }
            })

            if(!person.value || !text.value) return

            postComments(button.id, person.value, text.value)
            person.value = ''
            text.value = ''
        })
    })
}
export default addComments
