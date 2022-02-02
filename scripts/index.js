const popupMath = document.querySelector('.popup_type_math');
const openButtonMath = document.querySelector('.container__math-button_mod');
const popupMathCloseButton = popupMath.querySelector('.popup__close');

//Формула расчета среднего значения

const popupMathRun = popupMath.querySelector('.popup__math-run');
const popupResultHome = document.querySelector('.popup__result-home');
const popupResultAway = document.querySelector('.popup__result-away');
const popupRunResult = document.querySelector('.popup__math-run_mod');
const popupWinText = document.querySelector('.popup__win-text');


function areaRectangle(){
  var a=1*document.formMath.homeScored.value;
  var b=1*document.formMath.awayScored.value;
  var e=1*document.formMath.homeMissed.value;
  var o=1*document.formMath.awayMissed.value;
  var p=1*document.formMath.selectAttackHome.value;
  var q=1*document.formMath.selectAttackAway.value;
  var d=1*document.formMath.selectDefHome.value;
  var f=1*document.formMath.selectDefAway.value;
  var j=1*document.formMath.teamClassHome.value;
  var k=1*document.formMath.teamClassAway.value;

  var l=(a/5+o/5);
  var r=(b/5+e/5);
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
  
   if (w===4) m=m+(1*2); y=y-(1*2);
   if (w===3) m=m+(1*1.5); y=y-(1*1.5); 
   if (w===2) m=m+(1*1); y=y-(1*1); 
   if (w===1) m=m+(1*0.8); y=y-(1*0.8); 
   if (w===-1) m=m-(1*0.8); y=y+(1*0.8); 
   if (w===-2) m=m-(1*1); y=y+(1*1);
   if (w===-3) m=m-(1*1.5); y=y+(1*1.5);
   if (w===-4) m=m-(1*2); y=y+(1*2);
  
  if (w===4) y=y-(1*2);
  if (w===3) y=y-(1*1.5);
  if (w===2) y=y-(1*1);
  if (w===1) y=y-(1*0.8);
  if (w===-1) y=y+(1*0.8);
  if (w===-2) y=y+(1*1);
  if (w===-3) y=y+(1*1.5);
  if (w===-4) y=y+(1*2);
  
  if (m<0.11) m=0.01;
  if (y<0.11) y=0.01;

  popupResultHome.textContent = m.toFixed(1);
  popupResultAway.textContent = y.toFixed(1);
}


function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

openButtonMath.addEventListener('click', () => openPopup(popupMath));
popupMathCloseButton.addEventListener('click', () => closePopup(popupMath));
popupMathRun.addEventListener('click', () => {
  areaRectangle()
})


//   for (let b = 0.1; b<7; b+=0.1) {
//     let c = 8.67;
//     persent = (c/100)*0.909
//     perem = b+((c-b)-(persent))
//     console.log(perem)
// }
  // function puison 
// const a = 0.1
// let b = 0.1
// let  c = 8.67
// if (a===0.1) {
//     while (c>1) {
//         b=b+0.1
//         c=c*0.909
//         console.log(c)
//     }
    
// }


//Формула Пуассона


// var k_total = 2; // ожидаемые голы
// var landa = 3;  // Средние голы
// var exponential = 2.718281828;
// var total = 0;
// var varnumerator, denominator;

// // Суммирование k терминов с использованием формулы Пуассона

// function poisson(k, landa) {
//     exponentialPower = Math.pow(exponential, -landa); // отрицательная мощность k
//     landaPowerK = Math.pow(landa, k); // Ланда повышенный к
//     numerator = exponentialPower * landaPowerK;
//     denominator = fact(k); // факториал k.
    
//     return (numerator / denominator);
// }

// for (var i = 0; i < k_total; i++) {
//     total += poisson(i, landa);
// }

// console.log("вероятность " + total.toFixed(5));

//  function fact (x) {
//    if(x==0) {
//       return 1;
//    }
//    return x * fact(x-1);
// }


//Функция Пуассона
function PoissonDistrib(key_var , lambda_var){
  const resultHome = document.querySelector('.popup__result-home');
  const resultAwayTeam = document.querySelector('.popup__result-away');
   
  var u = popupResultHome.textContent ; //сюда вводим среднее значение голов
  var k = 1; //сюда вводить ожидаемое кол-во голов 
  var awaygoal = popupResultAway.textContent;
  var awayK = 1;
  
  var result = Fixed(PoissonTerm( u, k ),8,4);
  var resultAway = (Fixed(PoissonTerm( awaygoal,awayK ),8,4))*100;
  return 'вероятность счета 1:1 равна ' + (result*resultAway.toFixed(2)).toFixed(2) + ' %'
  }



function Fixed( s, wid, dec ) {
  var z = 1
  if (dec > 0) {
     z /= Math.pow( 10, dec );
     if (s < -z)  s -= 0.5 * z;
     else
        if (s > z)  s += 0.5 * z;
        else
           s = 0;
     }

  s = "" + s;

  var neg = 0;
  if (s.charAt(0) == "-") {
     neg = 2;
     s = s.substring( 1, s.length );
     }

  var exp = "";
  var e = s.lastIndexOf( "E" );
  if (e < 0)  e = s.lastIndexOf( "e" );
  if (e > -1) {
     exp = s.substring( e, s.length );
     s = s.substring( 0, e );
     }

  var dp = s.indexOf( ".", 0 );
  if (dp == -1) {
     dp = s.length;
     if (dec > 0) {
        s += ".";
        dp = s.length - 1;
        }
     }

  if (dp == 0) {
     s = '0' + s;
     dp = 1;
     }

  while ((dec > 0) && ((s.length - dp - 1) < dec))
     s += "0";

  var places = s.length - dp - 1;
  if (places > dec)
     if (dec == 0)
        s = s.substring( 0, dp );
     else
        s = s.substring( 0, dp + dec + 1 );

  s += exp;

  if (neg > 0)
     s = "-" + s;

  while (s.length < wid)
     s = " " + s;

  return s
  }

  
  
  
  function DoPoi( aform ) {
  var u = PosV(parseFloat(aform.u.value));
  aform.u.value = Fixed(u,10,4);
  var k = PosV(parseInt(aform.k.value));
  aform.k.value = Fixed(k,8,0);
  aform.tnk.value = Fixed(PoissonTerm( u, k ),8,4);
  var t = PoissonP( u, k );
  aform.puk.value = Fixed(t,8,4);
  aform.quk.value = Fixed(1-t,8,4);
  }

  
function PoissonTerm( u, k ) {
 
  return  Math.exp( (k * Math.log(u)) - u - LnFact(k) );
  }

  
  function LnFact( x ) {

  if (x <= 1)  x = 1;

  if (x < 12)
     return Math.log( Fact(Math.round(x)) );
  else {
     var invx = 1 / x;
     var invx2 = invx * invx;
     var invx3 = invx2 * invx;
     var invx5 = invx3 * invx2;
     var invx7 = invx5 * invx2;

     var sum = ((x + 0.5) * Math.log(x)) - x;
     sum += Math.log(2*Math.PI) / 2;
     sum += (invx / 12) - (invx3 / 360);
     sum += (invx5 / 1260) - (invx7 / 1680);

     return sum;
     }
  }

function Fact( x ) {
  var  t=1;
  while (x > 1)
     t *= x--;
  return t;
  }

  
function PosV( x ) {
  if (x < 0)  x = -x;
  return x;
  }

  popupRunResult.addEventListener('click', () => {
    popupWinText.textContent = PoissonDistrib()
  })