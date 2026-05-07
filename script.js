const disp = document.getElementById('display');
let [x, y, op] = ['', '', ''];
// let evaluate = false;

const appendToDisplay = (n) => {
    if (disp.value === "WTF?!") {
        clearAll();
    }

    if (op !== '' && x === '') {
        op = '';
    }

    if (op === '' && op !== '=' ) {        
        x += n;
        disp.value = x;                
    } else {
        y += n;
        disp.value = y;
    }
    console.log("x:", x, "op:",op, "y:", y);  
}

const clearAll = () => {
    display.value = '';
    x = '';
    y = '';
    op = '';
    // add anything else that needs to be cleared here
    console.log("x:", x, "op:",op, "y:", y);  
}



const operate = (o) => {
    if (op === '') {  
        op = o;
    } else if (o === '=') {
        calculate(op);
        x = '';
        y = '';
        op = '';   
    } else {
        calculate(op);
        op = o;
    }
    console.log("x:", x, "op:",op, "y:", y);  
}

calculate = (o) => {
    if (x === '' || y === '') {
        return;
    }
    switch (o) {
        case '+':
            x = parseInt(x) + parseInt(y);
            break;
        case '-':
            x = parseInt(x) - parseInt(y);
            break;
        case '*':
            x = parseInt(x) * parseInt(y);
            break;
        case '/':
            if (parseInt(y) === 0) {
                disp.value = "WTF?!";
                throw new Error("Divide by zero error.");                
            } else {
                x = parseInt(x) / parseInt(y);
            }           
            break;
    }
    disp.value = +x.toFixed(4);
    y = '';
}
       

