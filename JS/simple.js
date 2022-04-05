const Color = [
    "Red",
    "Orange",
    "YellowGreen",
    "Blue",
    "Cyan",
    "Purple",
    "White",
    "Black",
    "Brown",
    "Magenta",
    "Tan",
    "Olive",
    "Maroon",
    "Navy",
    "Aquamarine",
    "Turquoise",
    "Silver",
    "Lime",
    "Teal",
    "Indigo",
    "Violet",
    "Pink",
    "Gray",
  ];

  const btn1=document.getElementById("btn1");
  const btn2=document.getElementById("btn2");
  const color = document.getElementById("input-box");
  const change = document.getElementById("change");

  btn1.addEventListener("click" , function(){
      let random=randomColor();
      document.body.style.backgroundColor = Color[random];
      color.value = Color[random];
  });

  btn2.addEventListener("click" , function(){
    document.body.style.backgroundColor = "Gray";
  });
  
  change.addEventListener("click",function(){
    let value=color.value;
    for(let i=0;i<Color.length;i++){
      if(Color[i].toUpperCase==value.toUpperCase){
        document.body.style.backgroundColor = value;
        return;
      }
    }
  });

  function randomColor(){
      return Math.floor(Math.random()*Color.length);
  }