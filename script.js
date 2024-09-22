function func(btn){
  const screenWidth = window.screen.width - btn.style.width;
  const screenHeight = window.screen.height - btn.style.height;
  
  let xc = Math.floor(Math.random() * screenWidth);
  let yc = Math.floor(Math.random() * screenHeight);
  btn.style.top = yc + "px";
  btn.style.left = xc + "px";
  
  alert(btn.height);
}
