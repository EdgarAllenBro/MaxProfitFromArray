
const bestPrice = (price)=>{
    let best = 0
    let current
    for(i=0;i<price.length;i++){
        if (price[i]< current || current == undefined){
            current = price[i]
            // console.log(current)
        }
     if (price[i] - current > best) {
        best = price[i] - current
        } 
        // console.log(`most profit ${best}`)
    }return best
}

console.log(bestPrice([10,8,9,20,25]))