// Burgers
const PriceList = new Map([
    ['small', 50],
    ['big', 100],
    ['cheese', 10],
    ['salad', 20],
    ['potato', 15],
    ['seasoning', 15],
    ['mayonase', 20]
])

const CallsList = new Map([
    ['small', 20],
    ['big', 40],
    ['cheese', 20],
    ['salad', 5],
    ['potato', 10],
    ['seasoning', 0],
    ['mayonase', 5]
])


class Burger {
    constructor(size, filling, ...adds){
        this.size = size;
        this.filling = filling;
        this.adds = adds;
    }


    calcPrice() {
        let totalPrice = 0;
        
        totalPrice += PriceList.get(this.size);
        totalPrice += PriceList.get(this.filling);
        this.adds.forEach((add) => {
            totalPrice += PriceList.get(add)
        })
        return totalPrice
    }
    
    calcCalls() {
        let totalCalls = 0;

        totalCalls += CallsList.get(this.size);
        totalCalls += CallsList.get(this.filling);
        this.adds.forEach((add) => {
            totalCalls += CallsList.get(add)
        })
        return totalCalls;
    }
}


let Hamburger = new Burger('big', 'cheese', 'mayonase')
console.log(`Total price: ${Hamburger.calcPrice()}.  Total callories: ${Hamburger.calcCalls()}`)