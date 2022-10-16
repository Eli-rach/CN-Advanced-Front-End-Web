export default class URLBuilder {
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

