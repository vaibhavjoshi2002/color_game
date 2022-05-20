let color_code=document.getElementsByTagName("h1")[0];
let head_color=document.getElementsByTagName("div")[0];
let correct_color=Math.floor(Math.random()*6)+1;
let buttons=document.getElementsByTagName("button");
let color_options=document.getElementsByClassName("color_options");
let level_select=document.getElementById("level_select");
let paragraph=document.getElementsByTagName("p");
let display_all=1;
let reclick=0; 

let boxes = document.getElementsByClassName("color_box");

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    // console.log(RGBColor);
    return RGBColor;
  }

// var RGBColor = "rgb(" + x + "," + y + "," + z + ")"; 


// color_code.innerHTML=randomRGB();
// head_color.style.backgroundColor=randomRGB();

// let box1=document.getElementsByTagName("div")[2];
// box1.style.backgroundColor=randomRGB();

// function hide(a[i]){
//     a[i].style.visibility='hidden';
// }


let a=[];
let generated_color=[];
for(let i=1;i<=6;i++){
    a[i]=document.getElementsByTagName("div")[i+1];
    generated_color[i]=randomRGB();
    a[i].style.backgroundColor=generated_color[i];
    // a[i].innerHTML=generated_color[i];
    a[i].addEventListener("click", function() {
          if(reclick){
           if(i==correct_color){
              //  a[i].innerHTML="Well played";
              //  for(int j=0;j<6;j++){
              //   boxes[j].style.backgroundColor=generated_color[correct_color];
              //  }
                    reclick=0;

              boxes[0].style.visibility="visible";
              boxes[1].style.visibility="visible";
              boxes[2].style.visibility="visible";
              if(display_all){
                boxes[3].style.visibility="visible";
              }
              if(display_all){
                boxes[4].style.visibility="visible";
              }
              if(display_all){
                boxes[5].style.visibility="visible";
              }

              boxes[0].style.backgroundColor=generated_color[correct_color];
              boxes[1].style.backgroundColor=generated_color[correct_color];
              boxes[2].style.backgroundColor=generated_color[correct_color];
              boxes[3].style.backgroundColor=generated_color[correct_color];
              boxes[4].style.backgroundColor=generated_color[correct_color];
              boxes[5].style.backgroundColor=generated_color[correct_color];

              head_color.style.backgroundColor=generated_color[correct_color];
              buttons[0].innerHTML="PLAY AGAIN";
              buttons[1].style.visibility="hidden";
              buttons[2].style.visibility="hidden";
              level_select.style.visibility="visible";
              paragraph[0].innerHTML="WELL PLAYED!";
             
           }
           else{
            level_select.style.visibility="visible";
            paragraph[0].innerHTML="Try Again";
            a[i].style.visibility="hidden";
        
           }
          }
         });
    
}






function easy(){
  // color_options[0].style.visibility="visible";
  level_select.style.visibility="hidden";
  buttons[2].style.visibility="hidden";
  buttons[1].style.backgroundColor="rgb(168, 56, 125)";
  reclick=1;
 display_all=0; 
a[4].style.visibility='hidden';
a[5].style.visibility='hidden';
a[6].style.visibility='hidden';
correct_color=Math.floor(Math.random()*3)+1;

color_code.innerHTML=generated_color[correct_color];
// head_color.style.backgroundColor=generated_color[correct_color];
}

// easy();

color_code.innerHTML=generated_color[correct_color];
// head_color.style.backgroundColor=generated_color[correct_color];

document.getElementById("easy").addEventListener("click",easy);

document.querySelector("#hard").addEventListener("click", function (){
  // color_options[0].style.visibility="visible";
// location.reload();
level_select.style.visibility="hidden";
buttons[2].style.backgroundColor="rgb(168, 56, 125)";
reclick=1;
buttons[1].style.visibility="hidden";
  })

  document.querySelector("#new_color").addEventListener("click", function (){
    location.reload();
      })

// document.getElementById("easy").addEventListener("click", function() {
//     alert("Hello World!");
//   });