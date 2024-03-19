var motivos = [
    " Eles são top",
    "Gostam de rir",
    "Andam em bando",
    "As Hienas são fofinhos",
      "São selvagens"
  ];
  
  var imagens = [ "https://www.professorlages.com.br/wp-content/uploads/2019/11/Hiena.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXFUw-0-fla4U4sPtm3-EqdXZiqUsvpO-IQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFP0IXtPolj2tKh6dO6SLWweLXYI6OWhhhVA&usqp=CAU","https://img.r7.com/images/leao-hienas-briga-disputa-10022022183819443?dimensions=771x420&&&&&&&&&&&&&resize=771x420&crop=1316x717+139+0",         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dBqTe9fsb8jrVBktLtiX3laVZPBOygHz5Q&usqp=CAU"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }