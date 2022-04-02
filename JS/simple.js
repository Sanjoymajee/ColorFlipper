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
    " Maroon",
    " Navy",
    "Aquamarine",
    " Turquoise",
    "Silver",
    "Lime",
    "Teal",
    " Indigo",
    " Violet",
    "Pink",
    "Gray",
  ];

  const btn1=document.getElementById("btn1");
  const btn2=document.getElementById("btn2");
  const color = document.querySelector(".color");

  btn1.addEventListener("click" , function(){
      let random=randomColor();
      document.body.style.backgroundColor = Color[random];
      color.textContent = Color[random];
  });

  btn2.addEventListener("click" , function(){
    document.body.style.backgroundColor = "Gray";
    color.textContent = "Gray";
  });


  function randomColor(){
      return Math.floor(Math.random()*Color.length);
  }