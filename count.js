const RADIUS = 8,
      RECT = RADIUS+1,
      _RECT = 18*RECT,
      COLON = 13*RECT,
      LEFT=TOP=50;

function render(){
      var can = document.getElementById('canvas'),
          con = can.getContext('2d');
      con.clearRect(0,0,1400,500);
      var _1 = new Date().getHours().toString()[1] ? new Date().getHours().toString()[0] : '0',
          _2 = new Date().getHours().toString()[1] ? new Date().getHours().toString()[1] : new Date().getHours().toString()[0],
          _3 = new Date().getMinutes().toString()[1] ? new Date().getMinutes().toString()[0] : '0',
          _4 = new Date().getMinutes().toString()[1] ? new Date().getMinutes().toString()[1] : new Date().getMinutes().toString()[0],
          _5 = new Date().getSeconds().toString()[1] ? new Date().getSeconds().toString()[0] : '0',
          _6 = new Date().getSeconds().toString()[1] ? new Date().getSeconds().toString()[1] : new Date().getSeconds().toString()[0];

      dot(LEFT,TOP,_1,con);
      dot(LEFT+_RECT,TOP,_2,con);
      dot(LEFT+2*_RECT,TOP,digit.length-1,con);
      dot(LEFT+COLON+2*_RECT,TOP,_3,con);
      dot(LEFT+COLON+3*_RECT,TOP,_4,con);
      dot(LEFT+COLON+4*_RECT,TOP,digit.length-1,con);
      dot(LEFT+2*COLON+4*_RECT,TOP,_5,con);
      dot(LEFT+2*COLON+5*_RECT,TOP,_6,con);
}

function dot(x,y,num,con){
      con.fillStyle = 'rgb(0,102,153)';
      num = digit[num];
      for(n in num){
          let row = num[n];
          for(i in row){
              let column = row[i];
              if(column){
                  con.beginPath();
                  con.arc(x+i*2*RECT+RECT , y+n*2*RECT+RECT ,RADIUS,0,2*Math.PI)
                  con.closePath();
                  con.fill();
              }
          }
      }
}
render();
setInterval(render,1000)
