import { renderField } from "../jsek/field.js";
let app = document.getElementById('app');
let globalstate = {}

let field1 = renderField({
    state: globalstate,
    id: "text1",
    type: "text",
    label: "text",
    labelOnTop: true
})

let field2 = renderField({
    state: globalstate,
    id: "number1",
    type: "number",
    label: "number",
    labelOnTop: true
})

let field3 = renderField({
    state: globalstate,
    id: "email1",
    type: "email",
    label: "email",
    labelOnTop: true
})

let field4 = renderField({
    state: globalstate,
    id: "div",
    type: "default"
})

app.appendChild(field1)
app.appendChild(field2)
app.appendChild(field3)
app.appendChild(field4)