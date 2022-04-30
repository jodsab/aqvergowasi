const USERNAME = "AQVusername"
const ID = "AQVid"
const PASSWORD = "AQVpassword"
const EMAIL = "AQVemail"

export function setCurrentUser(user){
    localStorage.setItem(USERNAME, user)
}

export function setPasswordUser(pass){
    localStorage.setItem(PASSWORD, pass)
}

export function setIdUser(id){
    localStorage.setItem(ID, id)
}

export function setEmailUser(email){
    localStorage.setItem(EMAIL, email)
}

export function getUserName(){
    return localStorage.getItem(USERNAME)
}

export function getPasswordUser(){
    return localStorage.getItem(PASSWORD)
}

export function getUserId(){
    return localStorage.getItem(ID)
}

export function getUserEmail(){
    return localStorage.getItem(EMAIL)
}

export function delenteUserName(){
    localStorage.removeItem(USERNAME)
}

export function delentePassword(){
    localStorage.removeItem(PASSWORD)
}

export function delenteId(){
    localStorage.removeItem(ID)
}

export function delenteEmail(){
    localStorage.removeItem(EMAIL)
}