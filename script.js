function reply() {
    let text = 
    document.getElementById("input").value.toLowerCase();
    let output = 
    document.getElementById("output");

    if(text.includes("i am")) {
        output.innerText = " you may live."
     } if(text.includes("hey")) {
        output.innerText = "oh."
    }else {
        output.innerText = "weak answer"
    }
    }