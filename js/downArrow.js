function downArrow(){
    const arrow = document.querySelector('.arrow');
    
    const scrool = document.addEventListener('scroll', ({path}) => { 
        if(path[1].scrollY >=170) arrow.innerHTML = '';
    })
    
        
}
    



export default downArrow;
