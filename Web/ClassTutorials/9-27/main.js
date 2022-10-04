// const request = new Request('https://meowfacts.herokuapp.com/')

class URLBuilder {
    constructor(base){
        this.base = base;

        this.params = {}
    }

    addParam(key, value){
        this.params[key] = value;
    }

    build(){
        let URL = this.base;
        let counter = 0

        for(const key in this.params){
            // if(counter === 0){
            //     URL += "?";
            // } else {
            //     URL+="&"
            // }
            URL += counter === 0 ? "?" : "&";
            URL += key;
            URL += "="
            URL += this.params[key]
            counter++;
        }
        return URL
    }
}

const meowFactsURLBuilder = new URLBuilder('https://meowfacts.herokuapp.com/')
meowFactsURLBuilder.addParam('count', 12);
const meowFactsURL = meowFactsURLBuilder.build();
console.log(meowFactsURL)

fetch(meowFactsURL,{
    method: 'GET',
    headers: {'Content-Type': 'application/JSON'}
})
    .then((res) =>{
        console.log(res.json)
        return res.json();

    }).then((catJson)=>{
        // console.log(catJson.data[0])
        console.log(catJson)
        for (const catfact of catJson.data){
            const paragraph= document.createElement('p');
            paragraph.innerText = catfact;
            document.body.appendChild(paragraph);
        }
    })
    .catch((err =>
        console.error(err)
    ));