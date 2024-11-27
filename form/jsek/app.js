import { renderField } from "../jsek/field.js";
let app = document.getElementById('app');
let globalstate = {}



let field1 = renderField({
    state: globalstate,
    id: "text1",
    type: "text"
})

let field2 = renderField({
    state: globalstate,
    id: "text2",
    type: "text"
})

app.appendChild(field1)
app.appendChild(field2)