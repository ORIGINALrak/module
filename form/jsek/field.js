export function renderField(config) {

    switch (config.type) {
        case 'text':
            return renderText(config)
        case 'number':
            return renderNumber(config)
        case 'email':
            return renderEmail(config)
        case 'default':
            return renderDefault(config)
    }
}

export function renderForm(config){
    let formdiv = document.body.appendChild(document.createElement("div"))
    formdiv.id = "formid"
    
}

function renderText(config){
    let field = document.body.appendChild(document.createElement("div"))
    field.id = "asd1"

    let mizu = field.appendChild(document.createElement("label"))
    mizu.innerText = config.label

    if(config.labelOnTop == true){
        field.appendChild(document.createElement("br"))
    }

    let input = field.appendChild(document.createElement("input"))
    input.id = config.id
    input.type = config.type

    field.addEventListener('input', () => {
        config.state[config.id] = field.value
        console.log(config.state)
    })
    return field
}
function renderNumber(config){

    let field = document.body.appendChild(document.createElement("div"))
    field.id = "asd2"

    let mizu = field.appendChild(document.createElement("label"))
    mizu.innerText = config.label

    if(config.labelOnTop == true){
        field.appendChild(document.createElement("br"))
    }

    let input = field.appendChild(document.createElement("input"))
    input.id = config.id
    input.type = config.type

    field.addEventListener('input', () => {
        config.state[config.id] = field.value
        console.log(config.state)
    })
    return field
}
function renderEmail(config){

    let field = document.body.appendChild(document.createElement("div"))
    field.id = "asd3"
    
    let mizu = field.appendChild(document.createElement("label"))
    mizu.innerText = config.label

    if(config.labelOnTop == true){
        field.appendChild(document.createElement("br"))
        document.getElementById('asd3').style.display = "";
    }

    document.getElementById('asd3').style.display = "flex";
    document.getElementById('asd3').style.height = "20px";

    let emailFirstHalf = field.appendChild(document.createElement('input'))
    emailFirstHalf.id = config.id
    emailFirstHalf.type = config.type

    let emailAt = field.appendChild(document.createElement('p'))
    emailAt.id = "at"
    emailAt.innerText = "@";
    document.getElementById('at').style.margin = "0px";

    let emailSecondHalf = field.appendChild(document.createElement('input'))
    emailSecondHalf.id = config.id
    emailSecondHalf.type = config.type

    field.addEventListener('input', () => {
        config.state[config.id] = field.value
        console.log(config.state)
    })
    return field

}
function renderDefault(config){
    let field = document.createElement('div')

    field.id = config.id
    field.type = config.type

    return field
}