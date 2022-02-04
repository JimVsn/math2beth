const popupMath = document.querySelector('.popup_type_math');

//Формула расчета среднего значения

const popupMathRun = document.querySelector('.popup__math-run');
const popupResultHome = document.querySelector('.popup__result-home');
const popupResultAway = document.querySelector('.popup__result-away');
const popupRunResult = document.querySelector('.popup__math-run_mod');
const popupWinText = document.querySelector('.popup__win-text');

const winPersent = document.querySelector('.result-container__subtitle_win');
const drawPersent = document.querySelector('.result-container__subtitle_draw');
const lossPersent = document.querySelector('.result-container__subtitle_loss');
const oneNotLoss = document.querySelector('.result-container__subtitle_oneX');
const notDraw = document.querySelector('.result-container__subtitle_notdraw');
const twoNotLoss = document.querySelector('.result-container__subtitle_twoX');
const oneNullHomeTeam = document.querySelector('.result-container__subtitle_oneNull');
const twoNullAwayTeam = document.querySelector('.result-container__subtitle_twoNull');

const minusOneTeam = document.querySelector('.result-container__subtitle_minusOneFirst');
const minusOneTeamTwo = document.querySelector('.result-container__subtitle_minusOneSecond');

const profitTitle = document.querySelector('.profit__title');
const profitKef = document.querySelector('.profit__kef');
const profitTitleA = document.querySelector('.profit__title_mod_a');
const profitKefA = document.querySelector('.profit__kef_mod_a');
const profitTitleB = document.querySelector('.profit__title_mod_b');
const profitKefB = document.querySelector('.profit__kef_mod_b');
const profitTitleC = document.querySelector('.profit__title_mod_c');
const profitKefC = document.querySelector('.profit__kef_mod_c');

const profitTitleD = document.querySelector('.profit__title_mod_d');
const profitKefD = document.querySelector('.profit__kef_mod_d');
const profitTitleE = document.querySelector('.profit__title_mod_e');
const profitKefE = document.querySelector('.profit__kef_mod_e');

const profitTitleF = document.querySelector('.profit__title_mod_f');
const profitKefF = document.querySelector('.profit__kef_mod_f');
const profitTitleG = document.querySelector('.profit__title_mod_g');
const profitKefG = document.querySelector('.profit__kef_mod_g');

const profitTitleH = document.querySelector('.profit__title_mod_h');
const profitKefH = document.querySelector('.profit__kef_mod_h');
const profitTitleI = document.querySelector('.profit__title_mod_i');
const profitKefI = document.querySelector('.profit__kef_mod_i');



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
  
  if (m<0.1) m=0.1;
  if (y<0.1) y=0.1;

  popupResultHome.textContent = m.toFixed(1);
  popupResultAway.textContent = y.toFixed(1);
}




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
  
   
  var u = popupResultHome.textContent ; //Полученное среднее значение голов домашней команды из предыдущей формулы
  var awaygoal = popupResultAway.textContent; //Полученное среднее значение голов команды гостей из предыдущей формулы
  const k = [0, 1, 2, 3, 4, 5, 6, 7];  //массив 0т 0 до 7 для хозяев
  var awayK = [0, 1, 2, 3, 4, 5, 6, 7];  //массив для гостей

  var result = k.map(i=>(Fixed(PoissonTerm( u, [i] ),8,4)*100).toFixed(2),) 
  var resultAway =awayK.map(i=>Fixed(PoissonTerm( awaygoal,[i] ),8,4),);


//цикл для получения процентов для каждого счета
  var finalResult = []
  for (var i=0; i<result.length; i++) {
   for (var j=0; j<resultAway.length; j++) {
      finalResult.push(result[i]*resultAway[j]);
     }
    }


    //Победа хозяев

  const oneNull = finalResult[8]; //1-0  
  const twoNull = finalResult[16]; //2-0
  const twoOne = finalResult[17]; //2-1
  const threeNull = finalResult[24]; //3-0
  const threeOne = finalResult[25]; //3-1
  const threeTwo = finalResult[26]; //3-2
  const fourNull = finalResult[32]; //4-0
  const fourOne = finalResult[33]; //4-1
  const fourTwo = finalResult[34];//4-2
  const fourThree = finalResult[35]; //4-3
  const fiveNull = finalResult[40]; //5-0
  const fiveOne = finalResult[41]; //5-1
  const fiveTwo = finalResult[42];//5-2
  const fiveThree = finalResult[43]; //5-3
  const fiveFour = finalResult[44]; //5-4
  const sixNull = finalResult[48]; //6-0
  const sixOne = finalResult[49]; //6-1
  const sixTwo = finalResult[50];//6-2
  const sixThree = finalResult[51]; //6-3
  const sixFour = finalResult[52]; //6-4
  const sixFive = finalResult[53]; //6-5
  const sevenNull = finalResult[56]; //7-0
  const sevenOne = finalResult[57]; //7-1
  const sevenTwo = finalResult[58];//7-2
  const sevenThree = finalResult[59]; //7-3
  const sevenFour = finalResult[60]; //7-4
  const sevenFive = finalResult[61]; //7-5
  const sevenSix = finalResult[62]; //7-6

  //Ничьи


  const nullNull = finalResult[0]; //0-0
  const oneOne = finalResult[9]; //1-1
  const twoTwo = finalResult[18]; //2-2
  const threeThree = finalResult[27]; //3-3
  const fourFour = finalResult[36]; //4-4
  const fiveFive = finalResult[45]; //5-5
  const sixSix = finalResult[54]; //6-6
  const sevenSeven = finalResult[63]; //7-7

  //Победа гостей

  

  const nullOne = finalResult[1];  //0-1
  const nullTwo = finalResult[2]; //0-2
  const nullThree = finalResult[3]; //0-3
  const nullFour = finalResult[4]; //0-4
  const nullFive = finalResult[5];//0-5
  const nullSix = finalResult[6]; //0-6
  const nullSeven = finalResult[7]; //0-7 
  const oneTwo = finalResult[10]; //1-2
  const oneThree = finalResult[11]; //1-3
  const oneFour = finalResult[12]; //1-4
  const oneFive = finalResult[13]; //1-5
  const oneSix = finalResult[14]; //1-6
  const oneSeven = finalResult[15]; //1-7
  const twoThree = finalResult[19]; //2-3
  const twoFour = finalResult[20]; //2-4
  const twoFive = finalResult[21]; //2-5
  const twoSix = finalResult[22]; //2-6
  const twoSeven = finalResult[23]; //2-7
  const threeFour = finalResult[28]; //3-4
  const threeFive = finalResult[29]; //3-5
  const threeSix = finalResult[30]; //3-6
  const threeSeven = finalResult[31]; //3-7
  const fourFive = finalResult[37]; //4-5
  const fourSix = finalResult[38]; //4-6
  const fourSeven = finalResult[39]; //4-7
  const fiveSix = finalResult[46]; //5-6
  const fiveSeven = finalResult[47]; //5-7
  const sixSeven = finalResult[55]; //6-7

  
 //Процент победы домашней команды
 const winHomeTeam = oneNull+twoNull+twoOne+threeNull+threeOne+threeTwo+fourNull+fourOne+fourTwo+fourThree+fiveOne+fiveNull+fiveTwo+fiveThree+fiveFour+sixNull+sixOne+sixTwo+sixThree+sixFour+sixFive+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive+sevenSix;
 winPersent.textContent = winHomeTeam.toFixed(2) + ' %';

 const profitWinFirstTeam = 1.15/(winHomeTeam/100);
 profitTitle.textContent = 'Выгода от коэф ';
 profitKef.textContent = profitWinFirstTeam.toFixed(2);
 console.log('Выгода от коэф ' + profitWinFirstTeam.toFixed(2) + ' и выше')

 //Процент победы выездной команды
 const winAwayTeam = nullOne+nullTwo+nullThree+nullFour+nullFive+nullSix+nullSeven+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoThree+twoFour+twoFive+twoSix+twoSeven+threeFour+threeFive+threeSix+threeSeven+fourFive+fourSix+fourSeven+fiveSix+fiveSeven+sixSeven;
 lossPersent.textContent = winAwayTeam.toFixed(2) + ' %';

 const profitWinSecondTeam = 1.15/(winAwayTeam/100);
 profitTitleB.textContent = 'Выгода от коэф ';
 profitKefB.textContent = profitWinSecondTeam.toFixed(2);
 console.log('Выгода от коэф ' + profitWinSecondTeam.toFixed(2) + ' и выше')

 //Процент на ничью
 const drawHomeAway = 100-winHomeTeam.toFixed(2)-winAwayTeam.toFixed(2);
 drawPersent.textContent = drawHomeAway.toFixed(2) + ' %';

 const profitDraw = 1.15/(drawHomeAway/100);
 profitTitleA.textContent = 'Выгода от коэф ';
 profitKefA.textContent = profitDraw.toFixed(2);
 console.log('Выгода от коэф ' + profitDraw.toFixed(2) + ' и выше')

 //Процент на 1х
 const oneXHomeTeam = winHomeTeam+drawHomeAway;
 oneNotLoss.textContent = oneXHomeTeam.toFixed(2) + ' %';

 const profitXfirstTeam = 1.15/(oneXHomeTeam/100);
 profitTitleC.textContent = 'Выгода от коэф ';
 profitKefC.textContent = profitXfirstTeam.toFixed(2);

 // 2x
 const twoXAwayTeam = winAwayTeam+drawHomeAway;
 twoNotLoss.textContent = twoXAwayTeam.toFixed(2) + ' %';

 const profitXSecondTeam = 1.15/(twoXAwayTeam/100);
 profitTitleE.textContent = 'Выгода от коэф ';
 profitKefE.textContent = profitXSecondTeam.toFixed(2); 

 //12
 const notDrawHomeAway = 100-drawHomeAway;
 notDraw.textContent = notDrawHomeAway.toFixed(2) + ' %';

 const profitNotDraw = 1.15/(notDrawHomeAway/100);
 profitTitleD.textContent = 'Выгода от коэф ';
 profitKefD.textContent = profitNotDraw.toFixed(2);

 //1(0)
 oneNullHomeTeam.textContent = winHomeTeam.toFixed(2) + ' %';

 const profitNullFirstTeam = 1.15/(winHomeTeam/100);
 profitTitleF.textContent = 'Выгода от коэф ';
 profitKefF.textContent = profitNullFirstTeam.toFixed(2);

 //2(0)
 twoNullAwayTeam.textContent = winAwayTeam.toFixed(2) + ' %';

 const profitNullSecondTeam = 1.15/(winAwayTeam/100);
 profitTitleG.textContent = 'Выгода от коэф ';
 profitKefG.textContent = profitNullSecondTeam.toFixed(2);

 //1(-1)
 const minusOneFirstTeam = twoNull+threeNull+threeOne+fourNull+fourOne+fourTwo+fiveNull+fiveOne+fiveTwo+fiveThree+sixNull+sixOne+sixTwo+sixThree+sixFour+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive;
 minusOneTeam.textContent = minusOneFirstTeam.toFixed(2) + ' %';

 const profitMinusOneFirstTeam = 1.15/(minusOneFirstTeam/100);
 profitTitleH.textContent = 'Выгода от коэф ';
 profitKefH.textContent = profitMinusOneFirstTeam.toFixed(2);

 //2(-1)
 const minusOneSecondTeam = nullTwo+nullThree+oneThree+nullFour+oneFour+twoFour+nullFive+oneFive+twoFive+threeFive+nullSix+oneSix+twoSix+threeSix+fourSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven+fiveSeven;
 minusOneTeamTwo.textContent = minusOneSecondTeam.toFixed(2) + ' %';

 const profitMinusOneSecondTeam = 1.15/(minusOneSecondTeam/100);
 profitTitleI.textContent = 'Выгода от коэф ';
 profitKefI.textContent = profitMinusOneSecondTeam.toFixed(2);

 //1(-1,5)
 const minusOneFiveFirstTeam = document.querySelector('.result-container__subtitle_minusOneFiveFirst');
 minusOneFiveFirstTeam.textContent = minusOneFirstTeam.toFixed(2) + ' %';
 const profitTitleJ = document.querySelector('.profit__title_mod_j');
 const profitKefJ = document.querySelector('.profit__kef_mod_j');

 const profitMinusOneFiveFirstTeam = 1.15/(minusOneFirstTeam/100);
 profitTitleJ.textContent = 'Выгода от коэф ';
 profitKefJ.textContent = profitMinusOneFiveFirstTeam.toFixed(2);



 //2(-1,5)
 const minusOneFiveSecondTeam = document.querySelector('.result-container__subtitle_minusOneFiveSecond');
 minusOneFiveSecondTeam.textContent = minusOneSecondTeam.toFixed(2) + ' %';
 const profitTitleK = document.querySelector('.profit__title_mod_k');
 const profitKefK = document.querySelector('.profit__kef_mod_k');

 const profitMinusOneFiveSecondTeam = 1.15/(minusOneSecondTeam/100);
 profitTitleK.textContent = 'Выгода от коэф ';
 profitKefK.textContent = profitMinusOneFiveSecondTeam.toFixed(2);

 //1(-2)
 const minusTwoFirstTeam = threeNull+fourNull+fourOne+fiveNull+fiveOne+fiveTwo+sixNull+sixOne+sixTwo+sixThree+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour;
 const minusTwoFirst = document.querySelector('.result-container__subtitle_minusTwoFirst');
 minusTwoFirst.textContent = minusTwoFirstTeam.toFixed(2) + ' %';
 const profitTitleL = document.querySelector('.profit__title_mod_l');
 const profitKefL = document.querySelector('.profit__kef_mod_l');
 
 const profitMinusTwoFirstTeam = 1.15/(minusTwoFirstTeam/100);
 profitTitleL.textContent = 'Выгода от коэф ';
 profitKefL.textContent = profitMinusTwoFirstTeam.toFixed(2);

 //2(-2)
 const minusTwoSecondTeam = nullThree+nullFour+oneFour+nullFive+oneFive+twoFive+nullSix+oneSix+twoSix+threeSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven;
 const minusTwoSecond = document.querySelector('.result-container__subtitle_minusTwoSecond');
 minusTwoSecond.textContent = minusTwoSecondTeam.toFixed(2) + ' %';
 const profitTitleM = document.querySelector('.profit__title_mod_m');
 const profitKefM = document.querySelector('.profit__kef_mod_m');
 
 const profitMinusTwoSecondTeam = 1.15/(minusTwoSecondTeam/100);
 profitTitleM.textContent = 'Выгода от коэф ';
 profitKefM.textContent = profitMinusTwoSecondTeam.toFixed(2);

 //1(-1.5)
 const minusTwoFiveFirstTeam = threeNull+fourNull+fourOne+fiveNull+fiveOne+fiveTwo+sixNull+sixOne+sixTwo+sixThree+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour;
 const minusTwoFiveFirst = document.querySelector('.result-container__subtitle_minusTwoFiveFirst');
 minusTwoFiveFirst.textContent = minusTwoFiveFirstTeam.toFixed(2) + ' %';
 const profitTitleN = document.querySelector('.profit__title_mod_n');
 const profitKefN = document.querySelector('.profit__kef_mod_n');
 
 const profitMinusTwoFiveFirstTeam = 1.15/(minusTwoFiveFirstTeam/100);
 profitTitleN.textContent = 'Выгода от коэф ';
 profitKefN.textContent = profitMinusTwoFiveFirstTeam.toFixed(2);

 //2(-2.5)
 const minusTwoFiveSecondTeam = nullThree+nullFour+oneFour+nullFive+oneFive+twoFive+nullSix+oneSix+twoSix+threeSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven;
 const minusTwoFiveSecond = document.querySelector('.result-container__subtitle_minusTwoFiveSecond');
 minusTwoFiveSecond.textContent = minusTwoFiveSecondTeam.toFixed(2) + ' %';
 const profitTitleO = document.querySelector('.profit__title_mod_o');
 const profitKefO = document.querySelector('.profit__kef_mod_o');
 
 const profitMinusTwoFiveSecondTeam = 1.15/(minusTwoFiveSecondTeam/100);
 profitTitleO.textContent = 'Выгода от коэф ';
 profitKefO.textContent = profitMinusTwoFiveSecondTeam.toFixed(2);

 //1(+1)
 const plusOneFirstTeam = nullNull+oneNull+oneOne+twoNull+twoOne+twoTwo+threeNull+threeOne+threeTwo+threeThree+fourNull+fourOne+fourThree+fourFour+fiveNull+fiveOne+fiveTwo+fiveThree+fiveFour+fiveFive+sixNull+sixOne+sixTwo+sixThree+sixFour+sixFive+sixSix+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive+sevenSix+sevenSeven;
 const plusOneFirst = document.querySelector('.result-container__subtitle_plusOneFirst');
 plusOneFirst.textContent = plusOneFirstTeam.toFixed(2) + ' %';
 const profitTitleP = document.querySelector('.profit__title_mod_p');
 const profitKefP = document.querySelector('.profit__kef_mod_p');
 
 const profitPlusOneFirstdTeam = 1.15/(plusOneFirstTeam/100);
 profitTitleP.textContent = 'Выгода от коэф ';
 profitKefP.textContent = profitPlusOneFirstdTeam.toFixed(2);




















  return  
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
 

  popupMathRun.addEventListener('click', () => {
   areaRectangle()
   PoissonDistrib()
 })
 
