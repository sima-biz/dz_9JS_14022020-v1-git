


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////// 1. Перемешивание элементов списка  //////////////
////////////////////////////////////////////////////////////////

function receiveText() {
  "use strict";
  setInterval(() => {
    let ol = document.getElementsByClassName(`randomList`)[0]; 
    let elements = ol.getElementsByTagName("li");
    let arrOfElementsLi = [];
    let i = 0;
    for (let elem of elements) { 
      arrOfElementsLi[i]= elem.innerHTML;
      i++;
    }; 
    arrOfElementsLi.sort(()=> Math.random() - 0.5);
    let j = 0;
    for (let elem of elements) { 
      elem.innerText = arrOfElementsLi[j];
      j++;
    };
  }, 5000);
};

///////////////////////////////////////////////////////////////////
//////////  2. Добавление данных о браузере на страницу  //////////
///////////////////////////////////////////////////////////////////

function addData(callback) {
  "use strict";
  let dataArr = [];
  dataArr.push(screen.width + "px");
  dataArr.push(screen.height + "px");
  dataArr.push(navigator.userAgent);
  dataArr.push(navigator.platform);
  //console.log(dataArr);
  let div = document.getElementById(`browserInfo`); 
  //console.log(div);
  let elementh = div.getElementsByTagName("p");
  //console.log(elementh);
  let i = 0;
  let tempArr = [];
  for (let elem of elementh) { 
    tempArr[i] = elem.innerHTML.replace("unknown", dataArr[i]);
    elem.innerHTML = tempArr[i];
    i++;
  };
  setTimeout(callback, 5000);
//console.log(tempArr)
};

///////////////////////////////////////////////////////////////////
////////////////////////   to govern function  ////////////////////
///////////////////////////////////////////////////////////////////

function toGovern() {
  "use strict";
  window.onload = function() {
    receiveDate();
  };
  //receiveText(); ?
  setTimeout(function() {
    receiveText();
    addData(replaceH);      
  }, 4600);
};
toGovern();

///////////////////////////////////////////////////////////////////
///////////////////  3. Замена элемента  //////////////////////////
///////////////////////////////////////////////////////////////////

function replaceH() {
  "use strict";
  let elementH = document.getElementsByTagName("h3")[0];
  elementH.outerHTML = "<h1>NEW LIST HEADER</h1>";
    //let elementNewH = document.getElementsByTagName("h1")[0];
    //console.log(elementH.innerText, ":  tag-", elementH.nodeName)
    //console.log(elementNewH.innerText, ":  tag-", elementNewH.nodeName)  
};



///////////////////////////////////////////////////////////////////
/////////////////////  4. Текущая дата ////////////////////////////
///////////////////////////////////////////////////////////////////

function receiveDate() {
  "use strict";
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let myDate = new Date();
  let flowingDate = day[myDate.getDay()] + " " + mon[myDate.getMonth()] + " " + myDate.getDate() + " " + myDate.getFullYear();
  // console.log(flowingDate);
  // const nav = document.querySelector(`nav`);
  const nav = document.getElementById("navbar");
  nav.innerHTML = flowingDate;
  nav.setAttribute("style", "color: grey;");
};
//window.onload = receiveDate;











  