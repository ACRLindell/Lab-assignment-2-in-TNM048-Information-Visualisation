const myForm = document.getElementById("myForm");
const csvfile = document.getElementById("csvFileInput");
// Canvas size 1200x700
// Topleft corner (0,0)
// Topright corner (1200,0)
// Bottomleft corner (0,700)
// Bottomright corner (1200,700)

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const input = csvfile.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    
    const text = e.target.result;
    const data = csvToArray(text);
    //console.warn(data);

    const col1 = [];
    const col2 = [];
    const col3 = [];
    for (let i = 0; i < data.length - 1; i++) {
      col1.push(data[i][0]);
    }

    for (let i = 0; i < data.length - 1; i++) {
      col2.push(data[i][1]);
    }
    for (let i = 0; i < data.length - 1; i++) {
      col3.push(data[i][2]);
    }

    const xmin = Math.min(...col1);
    //console.warn(xmin,col1[1]);
    const xmax = Math.max(...col1);
    const ymin = Math.min(...col2);
    const ymax = Math.max(...col2);
    //const temp3 = col1.searchElement(xmin);
    //console.warn(temp3);

    const newcol1 = [];
    const newcol2 = [];
    for (let i = 0; i < col1.length; i++) {
      let temp = formatvaluewitdh(col1[i], xmin, xmax);
      newcol1.push(temp);
      //console.warn("oldxor: ", col1[i],"newxcor: ", temp);
    }
    for (let i = 0; i < col2.length; i++) {
      let temp = formatvalueheight(col2[i], ymin, ymax);
      newcol2.push(temp);
      //console.warn(col2[i],temp);
    }
    
    //Make the text on x-axis
   /*  for (let i = 0; i<11; i++){
      if (xmin < 0){
        drawtext(0,temp,560);
        drawline(temp,temp,60,540);
      }
      let temp =formatvaluewitdh((xmin+(i*(xmax-xmin)/10)),xmin,xmax);
      drawtext(Math.round(xmin+(i*(xmax-xmin)/10)),temp-10, 565);
      drawline(temp, temp, 540, 548);
    }; */

    
    //Up 

    if (xmin<0 && xmax>0){
      let temp = formatvaluewitdh(0,xmin,xmax);
      drawtext(0,temp,565);
      drawline(temp,temp,60,548);
      var intervall = 0;
      if (50<xmax<100) {
        intervall = 15;
      }
      else if (25<xmax<50){
        intervall = 10;
      }
      else if (5<xmax<25) {
        intervall = 5; 
      }
      else if (0<xmax<5) {
        intervall = 1;
      };
    //console.warn(intervall);
      let i1 = 1;
      while ((i1*intervall)<xmax){
        let temp =formatvaluewitdh((i1*intervall),xmin,xmax);
        drawtext((i1*intervall),temp, 565);
        drawline(temp, temp, 540, 548);
        i1++;
      }
      let i2 = 1;
      while ((-i2*intervall)>xmin){
        let temp =formatvaluewitdh((-i2*intervall),xmin,xmax);
        drawtext((-i2*intervall),temp, 565);
        drawline(temp, temp, 540, 548);
        i2++;
      }
    }
    else if( xmin>0 && xmax>0){
      var intervall = 0;
      if (50<xmax<100) {
        intervall = 15;
      }
      else if (25<xmax<50){
        intervall = 10;
      }
      else if (5<xmax<25) {
        intervall = 5; 
      }
      else if (0<xmax<5) {
        intervall = 1;
      };
      let i1 = 0;
      while ((i1*intervall)<xmax){
        let temp =formatvaluewitdh((i1*intervall),xmin,xmax);
        console.warn(temp);
        if (60<temp && temp<1100){
        drawtext((i1*intervall),temp, 565);
        drawline(temp, temp, 540, 548);
        };
        i1++;
      }
    }
    else if (xmin<0 && xmax<0){
      var intervall = 0;
      if (50<-xmax<100) {
        intervall = 15;
      }
      else if (25<-xmax<50){
        intervall = 10;
      }
      else if (5<-xmax<25) {
        intervall = 5; 
      }
      else if (0<-xmax<5) {
        intervall = 1;
      };
      let i1 = 0;
      while ((-i1*intervall)<xmax){
        let temp =formatvaluewitdh((-i1*intervall),xmin,xmax);
        if (60<temp<1100){
          drawtext((-i1*intervall),temp, 565);
          drawline(temp, temp, 540, 548);
        };
        i1++;
      };
    };



    if (ymin<0 && ymax>0){
      let temp = formatvalueheight(0,ymin,ymax);
      drawtext(0,40,temp+5);
      drawline(52,1100,temp,temp);
      var intervall = 0;
      if (50<ymax<100) {
        intervall = 15;
      }
      else if (25<ymax<50){
        intervall = 10;
      }
      else if (5<ymax<25) {
        intervall = 5; 
      }
      else if (0<ymax<5) {
        intervall = 1;
      };
    
      let i1 = 1;
      while ((i1*intervall)<ymax){
        let temp =formatvalueheight((i1*intervall),ymin,ymax);
        console.warn(temp);
        if (60<temp && temp<540){
          drawtext((i1*intervall),40,temp+5);
          drawline(52,60,temp,temp);
        };
        i1++;
      }
      let i2 = 1;
      while ((-i2*intervall)>ymin){
        let temp =formatvalueheight((-i2*intervall),ymin,ymax);
        drawtext((-i2*intervall),40,temp+5);
        drawline(52,60,temp,temp);
        i2++;
      }
    }
    else if( ymin>0 && ymax>0){
      var intervall = 0;
      if (50<ymax<100) {
        intervall = 15;
      }
      else if (25<ymax<50){
        intervall = 10;
      }
      else if (5<ymax<25) {
        intervall = 5; 
      }
      else if (0<ymax<5) {
        intervall = 1;
      };
      let i1 = 0;
      while ((i1*intervall)<ymax){
        let temp =formatvalueheight((i1*intervall),ymin,ymax);
        console.warn(temp);
        if (60<temp && temp<540){
          drawtext((i1*intervall),40,temp+5);
          drawline(52,60,temp,temp);
        };
        i1++;
      }
    }
    else if (ymin<0 && ymax<0){
      var intervall = 0;
      if (50<-ymax<100) {
        intervall = 15;
      }
      else if (25<-ymax<50){
        intervall = 10;
      }
      else if (5<-ymax<25) {
        intervall = 5; 
      }
      else if (0<-ymax<5) {
        intervall = 1;
      };
      let i1 = 1;
      while ((-i1*intervall)<ymax){
        let temp =formatvalueheight((-i1*intervall),ymin,ymax);
        drawtext((-i1*intervall),40,temp+5);
        drawline(52,60,temp,temp);
        i1++;
      }
    }
    /* if (ymin<0 && ymax>0){

    }
    else if( ymin>0 && ymax>0){

    }
    else if (ymin<0 && ymax<0){
       
    } */

    

    /* var intervall2 = 0;
    if (50<ymax<100) {
      intervall2 = 15;
    }
    else if (25<ymax<50){
      intervall2 = 10;
    }
    else if (5<ymax<25) {
      intervall2 = 5; 
    }
    else if (0<ymax<5) {
      intervall2 = 1;
    }; */
    //console.warn(intervall);
    /* let i2 = 0;
    while ((i2*intervall2)<ymax){
      let temp =formatvalueheight((i2*intervall2),ymin,ymax);
      drawtext((i2*intervall2),30,temp);
      drawline(52,60,temp, temp);
      i2++;
    } */

      

      //Down 
    

    /* //Small lines on x-axis
        for (let i = 0; i<11; i++){
          
        }; */

    //Make the text on y-axis
    /* for (let i = 0; i<11; i++){
      let temp =formatvalueheight((ymin+(i*(ymax-ymin)/10)),ymin,ymax);
      drawtext(Math.round(ymin+(i*(ymax-ymin)/10)),25,temp+5);
      drawline(52, 60, temp, temp);
    }; */

    /* if (xmin < 0){
      let temp = formatvaluewitdh(0,xmin,xmax);
      drawtext(0,temp,560);
      drawline(temp,temp,60,540);
    }; */

    /* if (ymin < 0){
      let temp = formatvalueheight(0,ymin,ymax);
      drawtext(0,50,temp);
      drawline(60,1100,temp,temp);
    }; */

    //Small lines on y-axis
    /* for (let i = 0; i<11; i++){
      drawline(52, 60, 70+(i*((530-70)/10)), 70+(i*((530-70)/10)));
    }; */


    //const test = Math.min(...newcol2);
    //const test2 = Math.max(...newcol2);
    //console.warn(test, test2 );
    const categories = new Set();
    col3.forEach((a) => categories.add(a));
    const cat = Array.from(categories);

    for (let i = 0; i < newcol1.length; i++) {
      makedot(
        newcol1[i],
        newcol2[i],
        col3[i] === cat[0] ? "SaddleBrown" : col3[i] === cat[1] ? "ForestGreen" : "DeepPink"
      );
    };
    drawtext("-  " + cat[0],1160,30);
    makedot(1130,26,"SaddleBrown");
    drawtext("-  " + cat[1],1160,50);
    makedot(1130,46,"ForestGreen");
    drawtext("-  " + cat[2],1160,70);
    makedot(1130,66,"DeepPink");
  };

  reader.readAsText(input);
});
function formatvaluewitdh(value, min, max) {
  const windowwidthmin = 70;
  const windowwidthmax = 1090;
  //const newvalue = value.includes(".") ? parseFloat(value) : Number(value);
  const newvalue = Number(value);
  //console.warn(newvalue);
  const new1 = (newvalue + Math.abs(min)) / (Math.abs(min) + Math.abs(max));
  const new2 = new1 * (windowwidthmax - windowwidthmin) + windowwidthmin;
  return new2;
}
function formatvalueheight(value, min, max) {
  const windowheightmin = 70;
  const windowheightmax = 530;
  /* if (isNaN(value)) {
    const newvalue = value.includes(".") ? parseFloat(value) : parseInt(value);
  }else{
    const newvalue = value;
  } */
  //const newvalue = value.includes(".") ? parseFloat(value) : Number(value);
  const newvalue = Number(value);
  //console.warn(newvalue);
  const new1 = (newvalue - min) / (max - min) ;
  const new2 =
  (1 - new1) * (windowheightmax - windowheightmin) + windowheightmin;
  return new2;
}
const csvToArray = (data) => data.split("\n").map((v) => v.split(","));

function drawline(xstart, xstop, ystart, ystop) {
  const canvas = document.querySelector("#canvas");

  if (!canvas.getContext) {
    return;
  }
  const draw = canvas.getContext("2d");

  
  draw.strokeStyle = "black";
  draw.lineWidth = 2;

  
  draw.beginPath();
  draw.moveTo(xstart, ystart);
  draw.lineTo(xstop, ystop);
  draw.stroke();
}
drawline(60, 60, 60, 540); //Left vertical
drawline(60, 1100, 540, 540); //Bottom horizontal
drawline(1100, 1100, 60, 540); //Right vertical
drawline(60, 1100, 60, 60); //Top horizontal
// Plot size 1100x540
// Topleft corner (60,60)
// Topright corner (1100,60)
// Bottomleft corner (60,540)
// Bottomright corner (1100,540)


////drawline(52, 60, 65, 65);

//drawline(52, 60, 535, 535);

function makedot(xcorr, ycorr, col) {
  const canvas = document.querySelector("#canvas");

  if (!canvas.getContext) {
    return;
  }
  const draw = canvas.getContext("2d");

  // set line stroke and line width
  //ctx.strokeStyle = 'red';
  draw.fillStyle = col;
  //ctx.lineWidth = 5;

  // draw a red line
  draw.beginPath();
  draw.arc(xcorr, ycorr, 4, 0, 2 * Math.PI);
  draw.fill();
}

function drawtext(text,xpos,ypos){
  const canvas = document.querySelector("#canvas");

  if (!canvas.getContext) {
    return;
  }
  const draw = canvas.getContext("2d");
  draw.font = "15px Arial";
  draw.fillStyle = "black";
  draw.textAlign = "center";
  draw.fillText(text,xpos,ypos);
};
//drawtext("Test",300,300);