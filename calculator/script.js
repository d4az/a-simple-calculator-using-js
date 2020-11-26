
function add(){
    var one = Number(document.getElementById('1').value);
    var two = Number(document.getElementById('2').value);

    var sum = one+two;

    console.log(sum);
    
    document.getElementById('ans').innerHTML = sum;
}


function sub(){
    var one = Number(document.getElementById('1').value);
    var two = Number(document.getElementById('2').value);

    var sub = one-two;

    console.log(sub);
    
    document.getElementById('ans').innerHTML = sub;
}

function div(){
    var one = Number(document.getElementById('1').value);
    var two = Number(document.getElementById('2').value);

    var div = one/two;

    console.log(div);
    
    document.getElementById('ans').innerHTML = div;
}

function mul(){
    var one = Number(document.getElementById('1').value);
    var two = Number(document.getElementById('2').value);

    var mul = one*two;

    console.log(mul);
    
    document.getElementById('ans').innerHTML = mul;
}