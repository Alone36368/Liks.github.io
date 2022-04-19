let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.jpg'){
        myImage.setAttribute('src','images/light.jpg');
    }else{
        myImage.setAttribute('src','images/dog.jpg');
    }
    
}
function setUserName(){
    let myName = prompt('请输入用户名：');
    if(!myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'huihui ,酷毙了' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storageName = localStorage.getItem('name');
    myHeading.textContent = 'huihui ,酷毙了' + storageName;
}
myButton.onclick = function(){
    setUserName();
}