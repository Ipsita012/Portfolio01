document.querySelector(".cross").style.display ='none';
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector('.sidebarGo').classList.toggle('sidebar');
    if(document.querySelector('.sidebarGo').classList.contains('sidebar')){
        
        document.querySelector('.cross').style.display = 'inline'
        document.querySelector('.ham').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        
    }
})