const greeting = function (name) {
    return `Hi ${name}`
}

// Arrow funtion - explicit return
const newGreeting = (name) => {
    return `Hi ${name}`
}


// Arrow funtion - implicit return
const newGreetingImplicit = name =>  `Hi ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) =>  `Hi ${name} ${lastName}`

// Lexical binding
const finctionalCharacter = {
    name : 'Uncle Been',
    messageWithTradicionalFunction : function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction :  (message) => console.log(`${finctionalCharacter.name} says: ${message}`)
    
}
finctionalCharacter.messageWithTradicionalFunction(`With great power comes great responsability.`)
finctionalCharacter.messageWithArrowFunction(`Bewarer of Doctor Octopus .`)

