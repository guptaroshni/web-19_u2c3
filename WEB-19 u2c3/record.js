// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFunction)

function myFunction()
 {

    event.preventDefault();
    var name = document.querySelector("#name").value;

    var employeeID = document.querySelector("#employeeID").value;

    var department = document.querySelector("#department").value;

    var exp = document.querySelector("#exp").value;

    var email = document.querySelector("#email").value;

    var mbl = document.querySelector("#mbl").value;
    // console.log(name, employeeID, department, exp, email, mbl)


    var tr = document.createElement("tr");

         var  td1 = document.createElement("td");
        td1.innerText = name;

        var td2 = document.createElement("td");
        td2.innerText = employeeID;

        var td3 = document.createElement("td");
         td3.innerText = department;

        var td4 = document.createElement("td");
        td4.innerText = exp;

        var td5 = document.createElement("td");
        td5.innerText = email;

        var td6 = document.createElement("td");
        td6.innerText = mbl;

         var td7 = document.createElement("td");
         if (exp > 5)
          {
         td7.innerText = "Senior";
        }
        if (exp > 2 && exp < 5)
         {
        td7.innerText = "Junior";
        }
        if (exp <= 1)
         {
        td7.innerText = "Fresher";
        }
        var td8 = document.createElement("td")
         td8.innerText = "Delete";
         td8.style.color = "red";
        td8.addEventListener("click", deleteEntry);

     tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.querySelector("table").append(tr);
}
function deleteEntry() {
    event.target.parentNode.remove();
    event.target.parentNode.innerText = "";
}












