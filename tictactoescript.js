console.log("Welcome to Krish Thakrar's Tic Tac Toe Game!");
let turn="X";
let gameover=false;
const changeTurn=()=>{
  return turn==="X"?"O":"X";
}
const checkWin=()=>{
  let boxtexts=document.getElementsByClassName('boxtext');
  let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,5,90],
    [0,4,8,5,15,45],
    [2,5,8,15,15,90],
    [1,4,7,5,15,90],
    [2,4,6,5,15,45]
  ]
  wins.forEach(e=>{
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
      gameover=true;
      document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won!";
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="200px";
    }
  })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
  let boxtext=element.querySelector('.boxtext');
  element.addEventListener('click',(e)=>{
    if(boxtext.innerText===''){
      boxtext.innerText=turn;
      turn=changeTurn();
      checkWin();
      if(!gameover){
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
      }
    }
  });
})

reset.addEventListener('click',()=>{
  let boxtexts=document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element=>{
    element.innerText="";
  })
  turn="X";
  gameover=false;
  document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
  document.querySelector(".line").style.width ="0";
  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0";
})
