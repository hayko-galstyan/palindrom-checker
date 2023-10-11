const checkTextPalidrom = (text) => {
    function check(str) {
        str = str.trim();
        return (str === str.split("").reverse().join("")) ? true : false
    }

    if(check(text)){
        return true
    }else {
        str = [...text]
        letter = str[0]
        let x = text.split(letter)
        for(let i=0;i<x.length;i++){
           let y = x[i].split('')
           if(y.length > 0){
                for(let k=0;k<y.length;k++){
                    let t = text.replaceAll(y[k],'')
                    t = [...t]
                    t.push(y[k])
                    t.unshift(y[k])
                    if(t.join('').length == text.length){
                        if(check(t.join(''))) return true;
                        continue
                    }
                }
            }
        }
        return check(text)
    }
}