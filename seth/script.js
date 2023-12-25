let menu= document.getElementById('menu')
let close=document.getElementById('close')
let navlist= document.getElementById('navlist')
menu.addEventListener('click',function(){
  
    navlist.classList.add('nav-show')
})

close.addEventListener('click',function(){
    navlist.classList.remove('nav-show')
})