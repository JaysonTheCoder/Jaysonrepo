let Left = document.querySelector('.toLeft')
let Right = document.querySelector('.toRight')
let banner = document.querySelector('.bannerDiv')
let width = 387
let action;
Right.addEventListener('click', ()=>{
   banner.scrollBy({left: width, behavior: 'smooth'})
})
   
Left.addEventListener('click', ()=>{
   banner.scrollTo({left: banner.scrollLeft - width, behavior: 'smooth'})
})

action = {
   countMove: [],
   funcAction: function(x){
      for(this.x = 1; this.x < 4; this.x++){
         countMove.push(this.x)
      }
   }
}