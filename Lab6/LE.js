//Draw a lexical environment diagram for the below code and show:

function makeArmy() {
    let shooters = [];
    let i = 0;
    while(i < 2){
        let shooter = function () {
            alert(i);
        }
        shooters.push(shooter);
        i++;
    }
    return shooters; 
}
 let army = makeArmy();
army[0];
/*
global EC: "creation"
LE: {outer: null, makeArmy: fn} 
TDZ:{army}

global EC:"execution"
LE: {outer: null, makeArmy: fn, army:}

makeArmy EC: "creation"
LE: {outer: global, arguments: {length: 0)}} 
TDZ:{shooters, i}

makeArmy EC: "execution"
LE: {outer: global, arguments: {length: 0), shooters:[], i: 0}}

while i=0 EC: "creation"
LE: {outer: makeArmy} 
TDZ: {shooter}

while i=0 EC: "execution"
LE: {outer: makeArmy, shooter: fn}

makeArmy EC:"execution"
LE: {outer: global, arguments: {length: 0)}, shooters:[fn], i: 1}

while i=1 EC: "creation"
LE: {outer: makeArmy} 
TDZ: {shooter}

while i=1 EC: "execution"
LE: {outer: makeArmy, shooter: fn}

makeArmy EC:"execution"
LE: {outer: global, arguments: {length: 0)}, shooters:[fn, fn], i: 2}

global EC: "execution"
LE: {outer: null, makeArmy: fn, army:[fn, fn]}

fn EC: "creation"
LE: {outer: while, arguments:{length:0}}

fn EC: "execution"
LE: {outer: while, arguments:{length:0}} . */

/* Can you fix the code?
Adding let variable in while should fix the issue as it gives closure its own variable.*/
                            
function makeArmy() {
    let shooters = [];
    let i = 0;
    while(i <2){
        let j = i;
        let shooter = function () {
            alert(j);
        }
        shooters.push(shooter);
        i++;
    }
    return shooters; 
}
let army = makeArmy();
army[0];

/* How will the diagram change?
Only the while part of the Context Execution will change. Here are the changes 


while i=0 EC: "creation"
LE: {outer: makeArmy} 
TDZ: {shooter, j}

while i=0 EC: "execution"
LE: {outer: makeArmy, shooter: fn, j: 0}

while i=1 EC: "creation"
LE: {outer: makeArmy} 
DZ: {shooter, j}

while i=1 EC:"execution"
LE: {outer: makeArmy, shooter: fn, j:1}


fn EC: "creation"
LE: {outer: while, arguments:{length:0}}
while closure: {
    LE: {outer: makeArmy, shooter: fn, j: 0}
}

fn EC: "execution"
LE: {outer: while, arguments:{length:0}}

while closure: {
    LE: {outer: makeArmy, shooter: fn, j: 0}
}
*/