console.log("File loaded ")
 document.querySelector("button").onclick=function(){
    // console.log("function called")
    console.log(document.querySelector("#x1"))
    var p =document.querySelector("#x1").value;
    console.log(p)
    console.log(document.querySelector("#x2"))
    var n =document.querySelector("#x2").value;
    console.log(n)
    console.log(document.querySelector("#x3"))
    var r =document.querySelector("#x3").value;
    console.log(r)
    console.log(typeof p)
    p=Number(p)
    console.log(typeof r)
    r=Number(r)
    console.log(typeof n)
   n=Number(n)
   n=n*12;
   r=r/12/100;

   var emi=p*r*(1+r)**n/[(1+r)**n-1];
   console.log(emi)
   document.querySelector("#p1").innerHTML=Math.round(emi)
   document.querySelector("#p2").innerHTML=p;
   document.querySelector("#p3").innerHTML=emi*n;
   document.querySelector("#p4").innerHTML=(emi*n)-p;
        
 }
//     var A=p(1+rn);