
const AppleWatch = document.querySelector('#apple-watch-card')








// nav link opacity
const NavLinks = document.querySelectorAll('#links')
const NavBar = document.querySelector('.nav-links')
NavLinks.forEach(l=>{
  l.addEventListener('mouseenter',(e)=>{
    const Hover = e.target.closest('li')
    if(!Hover) return;
    NavLinks.forEach(l=>{
        l.style.opacity = 0.5
    })
    Hover.style.opacity = 1
    
  })
})

NavBar.addEventListener('mouseleave' ,()=>{
    NavLinks.forEach(l=>{
        l.style.opacity = 1
    })
})

const ShowBox = document.querySelector('.shop-box')

NavLinks[0].addEventListener('click',()=>{
    title.scrollIntoView({
        behavior:'smooth'
    })
})

NavLinks[1].addEventListener('click',()=>{
    Heading[0].scrollIntoView({
        behavior:'smooth'
    })
})
NavLinks[3].addEventListener('click',()=>{
    Heading[2].scrollIntoView({
        behavior:'smooth'
    })
})
NavLinks[2].addEventListener('click',()=>{
  document.querySelector('#apple-watch-text').scrollIntoView({
      behavior:'smooth'
  })
})


const ImageBox = document.querySelector('.image')
const Pics = document.querySelector('#image')
const ProductName = document.querySelector('#prdname')

function ImageChange(){
  if(window.matchMedia("(max-width: 500px)").matches){
    AppleWatch.src = "pics/logo/S11-2.jpg"
    Pics.src =  "pics/image/apple_pay.jpg"
    Pics.style.height = '20vh'
    Pics.style.margin = '40px'
    ImageBox.style.width = '70%'
    ImageBox.style.height = '70%'
    ProductName.innerHTML = 'MacBook Pro'
    document.querySelector('.image2').style.display = 'block';
    document.querySelector('#iphone-case-img').src = "pics/logo/iphone-14-pro-gold3.jpg"
   
  }else{
    Pics.src =  "pics/image/apple_pay.jpg"
    Pics.style.height = '70%'
    Pics.style.margin = '40px'
    ImageBox.style.width = '70%'
    ImageBox.style.height = '70%'
    ProductName.innerHTML = 'MacBook Pro'
  }
}

ImageAppear = setTimeout(function(){
    ImageChange()
},7000)

const title = document.querySelector('#main-h4')

const Main = document.querySelector('.main')

const reveal = function(entries,observer){
   const[entry] = entries
   if(!entry.isIntersecting) return;
   title.style.opacity = 1
   title.style.transform = "translateY(-26px)"
}
const ObsOption = {
    root: null,
    threshold: 0.1,
};
const observer = new IntersectionObserver
(reveal,ObsOption);
observer.observe(Main);




const allImg = document.querySelectorAll('img')
const card = document.querySelector('#m-max')
const card2 = document.querySelector('#m-pro')
function Card2Reveal (){
    var On = card.style.filter = 'blur(0px)'
    if(On =true){
        card2.style.filter = 'blur(0px)'
       } return;
}

const loading= function(entries,observer){
   const[entry] = entries
   if(!entry.isIntersecting) return;
   const Appear = entry.target
   Appear.style.filter = 'blur(0px)'
   Card2Reveal()
}
const imgObserve = {
    root: null,
    threshold: 0.3
};

const ImageReveal = new IntersectionObserver
(loading,imgObserve);

allImg.forEach(img=>{
    ImageReveal.observe(img)
})

const Info = document.querySelector('.desciption')
const ObserverInfo = document.querySelector('.desciption')

const reveal2 = function(entries,observer){
   const[entry] = entries
   if(!entry.isIntersecting) return;
  const Target = entry.target
  Target.style.opacity = 1
  Target.style.transform = "translateY(-30px)"
}
const ObsOption2 = {
    root: null,
    threshold: 0.1,
};
const observer2 = new IntersectionObserver
(reveal2,ObsOption2);

observer2.observe(ObserverInfo);

const Heading = document.querySelectorAll('.text')
 
const ShowHeading = function(entries,observer){
    const[entry] = entries
    if(!entry.isIntersecting) return;
    Appear = entry.target
    Appear.style.opacity = 1
    Appear.style.transform = 'translateY(-20px)'
}
const OptionHeading = {
    root: null,
    threshold: 0.1,
};

const Show = new IntersectionObserver
 (ShowHeading,OptionHeading);
Heading.forEach(t=>{
    Show.observe(t)
})



const Container = [...document.querySelectorAll('.store-card-box')];
const nxtBtn = [...document.querySelectorAll('#nxtBtn')];
const preBtn = [...document.querySelectorAll('#preBtn')];

Container.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
});

// IPhone 14 Pro colors 
function IPhone14_Pro_Color (){
    const  PhoneColor = document.querySelector('#phone14pro')
const gold = "pics/logo/iphone-14-pro-gold-3.jfif"
const black =  "pics/logo/iphone-14-pro-black.jfif"
const white =  "pics/logo/iphone-14-pro-white.jfif"
const Color = document.querySelectorAll('.color-box')
Color.forEach(C=>{
    C.addEventListener('click',(e)=>{
      let TargetColor = e.target.id
      if(TargetColor === 'gold'){
        PhoneColor.src = gold
      }else if(TargetColor === 'white'){
        PhoneColor.src = white
      }else{
        PhoneColor.src = black
      }
      
    })
})
}
IPhone14_Pro_Color()

//Iphone 14  colors

function IPhone14_Color (){

    const PhoneColor =  document.querySelector('#phone14')
    const red = "pics/logo/iphone-14-red2.jfif";
    const purple = "pics/logo/iphone-14-purple-2.jfif" ;
    const yellow = "pics/logo/iphone-14-yellow-2.jfif" ;
    const black =  "pics/logo/iphone-14-black-2.jfif";
    const white =  "pics/logo/iphone-14-white-2.jfif";
    const Color = document.querySelectorAll('.color-box2')
    Color.forEach(C=>{
        C.addEventListener('click',(e)=>{
          let TargetColor = e.target.id
          console.log(TargetColor)
          if(TargetColor === 'red'){
            PhoneColor.src = red
          }else if(TargetColor === 'white'){
            PhoneColor.src = white
          }else if(TargetColor === 'black'){
            PhoneColor.src = black
          }else if(TargetColor ==='yellow'){
            PhoneColor.src = yellow
          }else{
            PhoneColor.src = purple
          }
          
        })
    })
}
IPhone14_Color()


// Iphone 13 color

function IPhone13_Color (){

    const PhoneColor =  document.querySelector('#iphone13')
    const red = "pics/logo/iphone13-red2.jfif";
    const pink = "pics/logo/iphone13-pink.jfif" ;
    const blue = "pics/logo/iphone13-blue.jfif" ;
    const black =  "pics/logo/iphone-14-black-2.jfif";
    const white =  "pics/logo/iphone-13-white-2.jfif";
    const green =  "pics/logo/iphone-13-green2.jfif";
    const Color = document.querySelectorAll('.color-box3')
    Color.forEach(C=>{
        C.addEventListener('click',(e)=>{
          let TargetColor = e.target.id
          console.log(TargetColor)
          if(TargetColor === 'red'){
            PhoneColor.src = red
          }else if(TargetColor === 'white'){
            PhoneColor.src = white
          }else if(TargetColor === 'black'){
            PhoneColor.src = black
          }else if(TargetColor ==='pink'){
            PhoneColor.src = pink
          }else if(TargetColor === 'blue'){
            PhoneColor.src = blue
          }else{
            PhoneColor.src = green
          }
          
        })
    })
}


IPhone13_Color()
const MiniBox = document.querySelector('#mini-box2')
MiniBox.style.height = '230px'



function IPhone12_Color (){

  const PhoneColor =  document.querySelector('#iphone12')
  const red = "pics/logo/iphone-12-red2.jfif";
  const purple = "pics/logo/iphone-12-purple2.jfif" ;
  const blue = "pics/logo/iphone-12-blue-2.jfif" ;
  const white =  "pics/logo/iphone-12-white2.jfif";
  const Color = document.querySelectorAll('.color-box4')
  Color.forEach(C=>{
      C.addEventListener('click',(e)=>{
        let TargetColor = e.target.id
        console.log(TargetColor)
        if(TargetColor === 'red'){
          PhoneColor.src = red
        }else if(TargetColor === 'white'){
          PhoneColor.src = white
        }else if(TargetColor ==='purple'){
          PhoneColor.src = purple
        }else{
          PhoneColor.src = blue
        }
      })
  })
}
IPhone12_Color()

const Container2 =  [...document.querySelectorAll('.apple-watch-card-box')]
const nxtBtn2 = [...document.querySelectorAll('#nxtBtn2')]
const preBtn2 = [...document.querySelectorAll('#preBtn2')]

Container2.forEach((item,i)=>{
  let containerDimensions = item.getBoundingClientRect()
  let containerWidth = containerDimensions.width
  nxtBtn2[i].addEventListener('click',()=>{
    item.scrollLeft += containerWidth;
})
preBtn2[i].addEventListener('click',()=>{
    item.scrollLeft -= containerWidth;
})
})



