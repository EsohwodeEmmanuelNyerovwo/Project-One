class Products{
    constructor(id,name,price){
        this.id = id,
        this.name = name,
        this.price = price
    }
}
class ShoppingCartItem {
    constructor(product,quantity){
        this.product = product
        this.quantity = product
    }
    getTotalItemPrice(){
        return this.product.price * this.quantity;
    }
}
class ShoppingCart{
    constructor(){
        this.items = [];
    }
    // getTotalPrice(){
    //     let sum = 0;
    //     for (const item of this.items) {
    //         sum += item.getTotalItemPrice();
    //     }
    //     return sum;
    // }
    getTotalPrice2(){
        return this.items.reduce((sum,a)=>sum+a.getTotalItemPrice(),0);
    }
    addItem(){
        this.items.push(new ShoppingCartItem(product,quantity));
    }
    removeItem(){
        
    }
}