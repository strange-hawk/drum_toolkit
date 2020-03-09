// document.querySelectorAll("button")[3].addEventListener("click", function (){alert('i got clicked')})
//  mouse click
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerText
        buttonAnimation(buttonInnerHTML)
        switch (buttonInnerHTML){
            case 'w':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/crash.mp3")
                audio.play()
                break
            case 'a':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/kick-bass.mp3")
                audio.play()
                break
            case 's':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/snare.mp3")
                audio.play()
                break
            case 'd':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-1.mp3")
                audio.play()
                break
            case 'j':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-2.mp3")
                audio.play()
                break
            case 'k':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-3.mp3")
                audio.play()
                break 
            case 'l':
                var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-4.mp3")
                audio.play()
                break   
        }

    })
    // console.log(this)
}


// keyboard press
document.addEventListener("keypress",function(event){console.log('key pressed')
t=event.key
buttonAnimation(t)
switch (t){
    case 'w':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/crash.mp3")
        audio.play()
        break
    case 'a':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/kick-bass.mp3")
        audio.play()
        break
    case 's':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/snare.mp3")
        audio.play()
        break
    case 'd':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-1.mp3")
        audio.play()
        break
    case 'j':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-2.mp3")
        audio.play()
        break
    case 'k':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-3.mp3")
        audio.play()
        break 
    case 'l':
        var audio = new Audio("/Users/animeshgupta/Desktop/web_development/Drum/sounds/tom-4.mp3")
        audio.play()
        break  

}


})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function(){activeButton.classList.remove("pressed")},100)
}

