let myImage = document.querySelector('img')

myImage.onclick = function() {
    let myScr = myImage.getAttribute('src')
    if(myScr === 'images/profile-image.jpg'){
        myImage.setAttribute('src', 'images/wallpaper-image.jpg')
    } else {
        myImage.setAttribute('src', 'images/profile-image.jpg')
    }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt('Please enter your name.')
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hi ' + myName + '! This is my personal website'
        
    }
}

if(!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Hi ' + storedName + '! This is my personal website'
}

myButton.onclick = function() {
    setUserName()
}