import * as _ from "lodash";
import { times } from "lodash";


function sayHello(name, times){
    for (let i = 0; i < times; i++){
        const p = document.createElement('p');
    p.innerHTML = `Hello ${name} for the ${i} time `;
    document.body.append(p);
    }
    
}


_.delay(sayHello, 1500, "Charlie");

const input = document.getElementById('input')
input.addEventListener('change', ()=>{
    const times = _.clamp(input.value, 0, 10);
    _.delay(sayHello, 1500, "Charlie", times);
})