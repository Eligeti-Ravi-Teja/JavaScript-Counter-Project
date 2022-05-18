
var noOfButtons=document.querySelectorAll('button').length;
var num=0;
for(var i=0;i<noOfButtons;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
   switch (this.innerHTML) {
     case "INCREMENT":
     num+=1;
     document.getElementById('number').innerHTML=num;

       break;
    case "DECREMENT":
    num-=1
    document.getElementById('number').innerHTML=num;

      break;
      case "NEUTRAL":
      num=0

      document.getElementById('number').innerHTML=num;

        break;
     default:
     console.log("Somrthing is wrong");

   }

});
}
// document.querySelectorAll("button")[0].addEventListener("click",function(){
//   document.getElementById('number').innerHTML=num+1;
//   num=num+1;
// });
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//   document.getElementById('number').innerHTML=document.getElementById('number').innerHTML-1;
// num-=1;
// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//   document.getElementById('number').innerHTML=0;
//
// });
