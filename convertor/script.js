function conversion() {
    var val = document.getElementById("select").value;
    var ip = parseFloat(document.getElementById("ip").value);
    console.log(val);
    switch(val)
    {
        case "cm":
        let a1 = ip/10;
        document.getElementById("result").innerText = a1;
        break;

    case "m":
        let b = ip*100;
        document.getElementById("result").innerText = b;
        break;

    case "km":
        let c = ip/1.609;
        document.getElementById("result").innerText = c;
        break;

    case "mi":
        let d = ip*1.609; 
        document.getElementById("result").innerText = d;
        break;

    case "in":
        let e = ip*2.5;
        document.getElementById("result").innerText = e;
        break;

    case " ":
        var f = "Select an option";
        document.getElementById('result').innerText = f;
        break;
    }
}

