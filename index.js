function change(){
  value=document.getElementById('val').value;
  
  document.getElementById('in1').value="";
  document.getElementById('in2').value="";
  document.getElementById('in3').value="";
  document.getElementById('in4').value="";
  document.getElementById('in5').value="";
  
  if(value==="Choose your equation..."){
    document.getElementById('calc').className="box";
  }
  else{
    document.getElementById('calc').className="revealed";
  }
  
  if(value==='1'){
    document.getElementById('var1').innerHTML="D=";
    document.getElementById('var2').innerHTML="R=";
    document.getElementById('var3').innerHTML="t=";
    document.getElementById('var4').innerHTML="";
    document.getElementById('var5').innerHTML="";
    
    document.getElementById('in1').className="revealed";
    document.getElementById('in2').className="revealed";
    document.getElementById('in3').className="revealed";
    document.getElementById('in4').className="box";
    document.getElementById('in5').className="box";
  }
  else if(value==='2'){
    document.getElementById('var1').innerHTML="a=";
    document.getElementById('var2').innerHTML="Vf=";
    document.getElementById('var3').innerHTML="Vi=";
    document.getElementById('var4').innerHTML="t=";
    document.getElementById('var5').innerHTML="";
    
    document.getElementById('in1').className="revealed";
    document.getElementById('in2').className="revealed";
    document.getElementById('in3').className="revealed";
    document.getElementById('in4').className="revealed";
    document.getElementById('in5').className="box";
  }
  else if(value==='3'){
   document.getElementById('var1').innerHTML="Xf="; 
   document.getElementById('var2').innerHTML="Xi=";
   document.getElementById('var3').innerHTML="Vi=";
   document.getElementById('var4').innerHTML="t=";
   document.getElementById('var5').innerHTML="a=";
   
    document.getElementById('in1').className="revealed";
    document.getElementById('in2').className="revealed";
    document.getElementById('in3').className="revealed";
    document.getElementById('in4').className="revealed";
    document.getElementById('in5').className="revealed";
  }
  else if(value==='4'){
    document.getElementById('var1').innerHTML="Vf=";
    document.getElementById('var2').innerHTML="Vi=";
    document.getElementById('var3').innerHTML="a=";
    document.getElementById('var4').innerHTML="Xf=";
    document.getElementById('var5').innerHTML="Xi=";
    
    document.getElementById('in1').className="revealed";
    document.getElementById('in2').className="revealed";
    document.getElementById('in3').className="revealed";
    document.getElementById('in4').className="revealed";
    document.getElementById('in5').className="revealed";
    
  }
  else{
    document.getElementById('var1').innerHTML="";
    document.getElementById('var2').innerHTML="";
    document.getElementById('var3').innerHTML="";
    document.getElementById('var4').innerHTML="";
    document.getElementById('var5').innerHTML="";
    
    document.getElementById('in1').className="box";
    document.getElementById('in2').className="box";
    document.getElementById('in3').className="box";
    document.getElementById('in4').className="box";
    document.getElementById('in5').className="box";
  }
  
}
  
function solve(){
  value=document.getElementById('val').value;
  
  if(value==='1'){
    var d=document.getElementById('in1').value;
    var r=document.getElementById('in2').value;
    var t=document.getElementById('in3').value;
    if(r===""){
      r=d/t;
      document.getElementById('in2').value=r;
    }
    if(d===""){
      r=Number(r);
      t=Number(t);
      d=r*t;
      document.getElementById('in1').value=d;
    }
    if(t===""){
      t=d/r;
      document.getElementById('in3').value=t;
    }
  }
  else if(value==='2'){
    var a=document.getElementById('in1').value;
    var vf=document.getElementById('in2').value;
    var vi=document.getElementById('in3').value;
    var time=document.getElementById('in4').value;
    
    if(a===""){
      a=(vf-vi)/time;
      document.getElementById('in1').value=a;
    }
    else if(vf===""){
      vf=(a*time)+vi;
      document.getElementById('in2').value=vf;
    }
    else if(vi===""){
      vi=-(a*time)+vf;
      document.getElementById('in3').value=vi;
    }
    else if(time===""){
      time=(vf-vi)/a;
      document.getElementById('in4').value=time;
    }
  }
  else if(value==='3'){
    var xf=document.getElementById('in1').value;
    var xi=document.getElementById('in2').value;
    var vinitial=document.getElementById('in3').value;
    var accel=document.getElementById('in5').value;
    var time2=document.getElementById('in4').value;
    
    if(xf===""){
    xi=Number(xi);
    vinitial=Number(vinitial);
    accel=Number(accel);
    time2-Number(time2);
    
    xf=xi+(vinitial*time2)+((accel*(time2*time2))/2);
    document.getElementById('in1').value=xf;
    }
    else if(xi===""){
      xf=Number(xf);
      vinitial=Number(vinitial);
      accel=Number(accel);
      time2=Number(time2);
      
      xi=-1*((vinitial*time2)+(accel*(time2*time2)/2)-xf);
      document.getElementById('in2').value=xi;
    }
    else if(vinitial===""){
      vinitial=(xf-xi-(accel*(time2*time2))/2)/time2;
      console.log(vinitial);
      document.getElementById('in3').value=vinitial;
    }
    else if(accel===""){
      xf=Number(xf);
      time2=Number(time2);
      vinitial=Number(vinitial);
      xi=Number(xi);
      
      a=(xf-xi-(vinitial*time2))/((time2*time2)/2);
      document.getElementById('in5').value=a;
    }
    else if(time2===""){
      xf=Number(xf);
      xi=Number(xi);
      vinitial=Number(vinitial);
      accel=Number(accel);
      
      var vf=Math.sqrt((vinitial*vinitial)+(2*accel*(xf-xi)));
      
      time2=(vf-vinitial)/accel;
      
      document.getElementById('in4').value=time2;
    }
  }
  else if(value==='4'){
    var vf=document.getElementById('in1').value;
    var vi=document.getElementById('in2').value;
    var a=document.getElementById('in3').value;
    var xi=document.getElementById('in5').value;
    var xf=document.getElementById('in4').value;
    
    if(vf===""){
      vi=Number(vi);
      a=Number(a);
      xi=Number(xi);
      xf=Number(xf);
      
      vf=Math.sqrt((vi*vi)+(2*a*(xf-xi)));
      
      document.getElementById('in1').value=vf;
    }
    else if(vi===""){
      a=Number(a);
      xi=Number(xi);
      xf=Number(xf); 
      vf=Number(vf);
      
      vi=Math.sqrt((2*a*(xf-xi))-(vf*vf));
      document.getElementById('in2').value=vi;
    }
    else if(a===""){
      vi=Number(vi);
      xi=Number(xi);
      xf=Number(xf); 
      vf=Number(vf);
      
      a=((vf*vf)-(vi*vi))/(2*(xf-xi));
      
      document.getElementById('in3').value=a;
    }
    else if(xi===""){
      vi=Number(vi);
      a=Number(a);
      xf=Number(xf); 
      vf=Number(vf);
      
      xi=-1*((((vf*vf)-(vi*vi))/(2*a))-xf)  
      
      document.getElementById('in5').value=xi;
    }
    else if(xf===""){
       vi=Number(vi);
      a=Number(a);
      xi=Number(xi); 
      vf=Number(vf);
      
      xf=(((vf*vf)-(vi*vi))/(2*a))+xi;
      document.getElementById('in4').value=xf;
    }
  }
}

function contact(){

var val=document.getElementById("contact").value;

if(val=="1"){
  window.location="https://www.instagram.com/joeygutzy/?hl=en";
}
if(val=="2"){
  window.location="https://www.facebook.com/jole.gyud";
}}
