function func(btn){
  const browserW = document.documentElement.clientWidth - btn.offsetWidth;
  const browserH = document.documentElement.clientHeight - btn.offsetHeight;
  
  let xc = Math.floor(Math.random() * browserW);
  let yc = Math.floor(Math.random() * browserH);
  btn.style.top = yc + "px";
  btn.style.left = xc + "px";
  
  console.log(browserW + " " + browserH);
}

function clicked(){
	alert("GOOD JOB, MASTER!")
}
