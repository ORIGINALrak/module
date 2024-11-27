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

function renderText(config){
    let field = document.createElement('input')

    field.id = config.id
    field.type = config.type
    field.addEventListener('input', () => {
        config.state[config.id] = field.value
        console.log(config.state)
    })
    return field
}
function renderNumber(config){
    let field = document.createElement('input')

    field.id = config.id
    field.type = config.type
    field.addEventListener('input', () => {
        config.state[config.id] = field.value
        console.log(config.state)
    })
    return field
}
function renderEmail(config){
    let field = document.body.appendChild(document.createElement("div"));
    field.id = "asd"
    let email = field.appendChild(document.createElement('input'))
    email.id = config.id
    email.type = config.type
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