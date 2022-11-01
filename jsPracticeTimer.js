let handleId= 0;
const timer = document.getElementById("time");
const go = document.getElementById("go");
const stopit = document.getElementById("stop");

function getTime(){
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hour}:${minutes}:${seconds}`;
  h1.textContent = time;
}

getTime()

go.onclick = function(){
  if(handleId == 0){
    handleId = setInterval(getTime, 1000)
  }
}

stopit.onclick = function(){
  clearInterval(handleId)
  handleId = 0;
}