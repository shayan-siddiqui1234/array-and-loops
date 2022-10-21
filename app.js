for(var i=0;i<=99; i++){

    if(i%3 === 0){
        document.write("monaday <br>")
    } 
    else if (i%5 === 0){
        document.write("tuesday <br>")
    }

document.write( i + "<br>")

}


var a = +prompt("Enter which table didi you won?")
var b = +prompt("how much lenght did you require?")

for(var j=1; j<=b; j++){

document.write(a+"x"+j+"="+a*j+"<br>")
}


for(var sh=1;sh<=5;sh++){
  for(var sa=1;sa<=sh;sa++ ){
    document.write(sh)

  }
document.write("<br>")
}

for(var sha=1;sha<=10;sha++){
  for(var saa=1;saa<=sha;saa++ ){
    document.write(saa)

  }
document.write("<br>")
}
// let n=5;
// for(i=1;i<=n;i++){
//   for(j=i;j<=n;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }


// let n=5;
// for(i=1;i<=n;i++){
//   for(j=i; j<=i; j++){
//     document.write(" * &nbsp")
//   } for(j=i;j<=n;j++){
// document.write("-")
//   }
//   document.write("<br>")
// }
