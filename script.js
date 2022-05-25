var imgarr = [
    "images/New folder/client-1.png",
    "images/New folder/client-2.png",
    "images/New folder/client-3.png",
    "images/New folder/client-4.png",
    "images/New folder/client-4.png",
    "images/New folder/client-6.png",
    "images/New folder/client-7.png",
    "images/New folder/client-8.png",
    "images/New folder/client-9.png",

]
var imgarr1 = [
    "images/New folder/client-9.png",
    "images/New folder/client-8.png",
    "images/New folder/client-7.png",
    "images/New folder/client-6.png",
    "images/New folder/client-5.png",
    "images/New folder/client-4.png",
    "images/New folder/client-3.png",
    "images/New folder/client-2.png",
    "images/New folder/client-1.png",

]

// ===============================
document.body.setAttribute('class', 'd-flex justify-content-center align-items-center vh-100')
var div = document.createElement('div')
document.body.appendChild(div)
div.style.border = '2px solid green'
div.style.borderRadius = '10px '
div.style.paddingRight = '110px'
div.style.paddingTop = '100px'
div.style.paddingBottom = '100px'

//======================
var img1 = document.createElement('img')
div.appendChild(img1)
img1.style.borderRadius = "50%"
img1.style.marginLeft = '100px'
    //=======================
var btn = document.createElement("button")
div.appendChild(btn)
btn.setAttribute('class', 'btn btn-outline-success')
btn.style.width = "60px"
btn.style.height = "60px"
btn.style.borderRadius = "50%"

//================================
var img = document.createElement('img')
div.appendChild(img)
img.style.borderRadius = "50%"

//=================================
btn.addEventListener(('click'), () => {
    var random = Math.floor(Math.random() * imgarr.length)
    img1.setAttribute('src', imgarr[random])
    img.setAttribute('src', imgarr1[random])

})