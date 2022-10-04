// Errors not handled
// const input = document.getElementById('input');
// input.addEventListener('change', function(){
//     if (input.value > 10){
//         throw new Error('Smaller boi!');
//     }
//     console.log('Cool number bro!')
// });

//Handled Errors
// const input = document.getElementById('input');

// function handleError() {
//     if (input.value > 10){
//         throw new Error('Smaller boi!');
//     }
//     console.log('Cool number bro!')
// }

// input.addEventListener('change', function(){
//     try{
//         handleError();
//     } catch(e){
//         console.error(e);
//     } finally {
//         //code after error is handled
//         console.log("Donezo!")
//     }
//     //code after function
// });

//asych code - dont use
// function takesAReallyLongTime() {
//     let sum = 0;
//     for (let i = 0; i < 100000000000000; i++){
//         sum+=i
//         console.log(i);
//     }
//     console.log(`the sum is ${sum}`);
//     return sum;
// }

// const result = takesAReallyLongTime();
// console.log(result);
// console.log('after');

// setTimeout(function(){
//     const result = takesAReallyLongTime();
//     console.log(result);
// })

// function takesAReallyLongTimewithPromises(){
//     return new Promise(function(resolve, reject){
//         let sum = 0;
//         for(let i = 0; i < 1000000; i++){
//             sum +=i
//         }
//         console.log(`the really big sum is ${sum}`);
//         resolve(sum);
//     })
// }

// takesAReallyLongTimewithPromises()
//     .them(function(results){
//         console.log(results);
//     })
//     .catch(function(error){
//         console.log(error);
//     })

async function takesAReallyLongTimeAsych(){
    return new Promise(function(resolve, reject){
                let sum = 0;
                for(let i = 0; i < 1000000; i++){
                    sum +=i
                }
                console.log(`the really big sum is ${sum}`);
                resolve(sum);
            })
}

takesAReallyLongTimeAsych()
    .then(function(result){
        console.log(result)
    })