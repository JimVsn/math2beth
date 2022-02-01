const popupMath = document.querySelector('.popup_type_math');
const openButtonMath = document.querySelector('.container__math-button_mod');
const popupMathCloseButton = popupMath.querySelector('.popup__close');

//Формула расчета среднего значения

// const homeGoal = document.querySelector('.popup__input_mod_home-scored');
// const homeMissed = popupMath.querySelector('.popup__input_mod_away-scored');
const popupMathRun = popupMath.querySelector('.popup__math-run');
const popupResultHome = document.querySelector('.popup__result-home');
const popupResultAway = document.querySelector('.popup__result-away');
// const homeGoal=1*document.formMath.homeScored.value;
// const homeMissed=1*document.formMath.homeMissed.value;


function areaRectangle(){
  var a=1*document.formMath.homeScored.value;
  var b=1*document.formMath.awayScored.value;
  var e=1*document.formMath.homeMissed.value;
  var o=b=1*document.formMath.awayMissed.value;
  var p=1*document.formMath.selectAttackHome.value;
  var q=1*document.formMath.selectAttackAway.value;
  var d=1*document.formMath.selectDefHome.value;
  var f=1*document.formMath.selectDefAway.value;
  var j=1*document.formMath.teamClassHome.value;
  var k=1*document.formMath.teamClassAway.value;



  var l=(a/8+o/8)-1.2;

  var r=(b/8+e/8)-1.2;

  var u=p-f;

  var i=q-d;

  var w=j-k;

  var m=l;

  var y=r;



 var m=m+(0);
 var y=y-(0);

  
if(u===1)
  m=m*0.8;

  if(u===2)
   m=m*0.5;

  if(u===3) 
   m=m*0.1;

  if(u===-1)
  m=m*1.1;

  if(u===-2)
   m=m*1.5;
 
  if(u===-3) 
   m=m*1.8;

  
   if(i===1) 
   y=y*0.8;
   
   if(i===2) 
   y=y*0.5;
   
   if(i===3) 
   y=y*0.1;
   
   if(i===-1) 
   y=y*1.1;
   
   if(i===-2) 
   y=y*1.5;
   
   if(i===-3) 
   y=y*1.8;
  
  
  //  if (w===4) m=m+(1*2); y=y-(1*2);
  
  //  if (w===3) m=m+(1*1.5); y=y-(1*1.5);
   
  //  if (w===2) m=m+(1*1); y=y-(1*1);
   
  //  if (w===1) m=m+(1*0.8); y=y-(1*0.8);
   
  //  if (w===-1) m=m-(1*0.8); y=y+(1*0.8);
   
  //  if (w===-2) m=m-(1*1); y=y+(1*1);
  
  //  if (w===-3) m=m-(1*1.5); y=y+(1*1.5);
 
  //  if (w===-4) m=m-(1*2); y=y+(1*2);
  
 
  // if (w===4) y=y-(1*2);
 
  // if (w===3) y=y-(1*1.5);
  
  // if (w===2) y=y-(1*1);
 
  // if (w===1) y=y-(1*0.8);
 
  // if (w===-1) y=y+(1*0.8);
 
  // if (w===-2) y=y+(1*1);
 
  // if (w===-3) y=y+(1*1.5);
 
  // if (w===-4) y=y+(1*2);
  



  if (m<0.11) m=0.01;
 
  if (y<0.11) y=0.01;

  popupResultHome.textContent = m;
  popupResultAway.textContent = y;
}

function openPopup(popup){
  popup.classList.add('popup_opened');
//   document.addEventListener('keydown', popupCloseEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

openButtonMath.addEventListener('click', () => openPopup(popupMath));
popupMathCloseButton.addEventListener('click', () => closePopup(popupMath));
popupMathRun.addEventListener('click', () => {
  areaRectangle()
})






// {/* <script type="text/javascript">


// <script type="text/javascript">


// function areaRectangle(){
//   var a=1*document.forma1.t1.value;

//   var b=1*document.forma1.t2.value;

//   var e=1*document.forma1.t3.value;

//   var o=1*document.forma1.t4.value;

//   var p=1*document.forma1.t5.value;

//   var q=1*document.forma1.t6.value;

//   var d=1*document.forma1.t7.value;

//   var f=1*document.forma1.t8.value;

//   var j=1*document.forma1.t9.value;

//   var k=1*document.forma1.t10.value;



//   var l=(a/3+o/3)-1.2;

//   var r=(b/3+e/3)-1.2;

//   var u=p-f;

//   var i=q-d;

//   var w=j-k;

//   var m=l;

//   var y=r;



//  var m=m+(0);
//  var y=y-(0);

  
// if(u===1)
//   m=m*0.8;

//   if(u===2)
//    m=m*0.5;

//   if(u===3) 
//    m=m*0.1;

//   if(u===-1)
//   m=m*1.1;

//   if(u===-2)
//    m=m*1.5;
 
//   if(u===-3) 
//    m=m*1.8;

  
//   if(i===1) 
//   y=y*0.8;
  
//   if(i===2) 
//   y=y*0.5;
  
//   if(i===3) 
//   y=y*0.1;
  
//   if(i===-1) 
//   y=y*1.1;
  
//   if(i===-2) 
//   y=y*1.5;
  
//   if(i===-3) 
//   y=y*1.8;
  
  
//   if (w===4) m=m+(1*2); y=y-(1*2);
  
//   if (w===3) m=m+(1*1.5); y=y-(1*1.5);
  
//   if (w===2) m=m+(1*1); y=y-(1*1);
  
//   if (w===1) m=m+(1*0.8); y=y-(1*0.8);
  
//   if (w===-1) m=m-(1*0.8); y=y+(1*0.8);
  
//   if (w===-2) m=m-(1*1); y=y+(1*1);
 
//   if (w===-3) m=m-(1*1.5); y=y+(1*1.5);

//   if (w===-4) m=m-(1*2); y=y+(1*2);
  
 
//   if (w===4) y=y-(1*2);
 
//   if (w===3) y=y-(1*1.5);
  
//   if (w===2) y=y-(1*1);
 
//   if (w===1) y=y-(1*0.8);
 
//   if (w===-1) y=y+(1*0.8);
 
//   if (w===-2) y=y+(1*1);
 
//   if (w===-3) y=y+(1*1.5);
 
//   if (w===-4) y=y+(1*2);
  



//   if (m<0.11) m=0.01;
 
//   if (y<0.11) y=0.01;

//   document.forma1.res.value=m;
//   document.forma1.res2.value=y;
// }

//  </script> */}