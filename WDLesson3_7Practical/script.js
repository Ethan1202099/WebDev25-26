/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
      function calcDist(){
      let x1=parseFloat(document.getElementById("x1").value);
      let y1=parseFloat(document.getElementById("y1").value);
      let x2=parseFloat(document.getElementById("x2").value);
      let y2=parseFloat(document.getElementById("y2").value);
      let d=Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1,2));
      let op=document.getElementById("output");
      op.innerHTML=`Dist.between pts(${x1}, ${y1}) and (${x2}, ${y2}) is ${d}`;
      }


/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
      function calcDist(){
      let P=parseFloat(document.getElementById("P").value);
      let R=parseFloat(document.getElementById("R").value);
      let N=parseFloat(document.getElementById("N").value);
      let T=parseFloat(document.getElementById("T").value);
      let output = document.getElementById("output");
      
      let a = p * Math.pow(1 + (r/100)/n, n*t);
      //a = a.toFixed(2);

      output.innerHTML = `An investment of ${P} at ${R}% annual interest will grow to ${a.toFixed(2)} after ${T} years.`
      }




