// Class to represent a Product
class Products {
    // Constructor to initialize product properties
    constructor(id, name, price) {
        this.id = id;          // Product's ID
        this.name = name;      // Product's name
        this.price = price;    // Product's price
    }
}

// Class to represent an item in the shopping cart
class ShoppingCartItem {
    // Constructor takes a product and a quantity
    constructor(product, quantity) {
        this.product = product;  // The product in the cart item
        this.quantity = quantity; // Quantity of the product
    }
    
    // Method to calculate total price for this cart item
    getTotalItemPrice() {
        return this.product.price * this.quantity;  // Price * quantity
    }
}

// Class to represent the shopping cart
class ShoppingCart {
    // Constructor to initialize an empty items array in the cart
    constructor() {
        this.items = [];  // List of items in the shopping cart
    }

    // Commented out method that calculates total price by iterating over items
    // getTotalPrice() {
    //     let sum = 0;
    //     // Loop through each item and add its total price to the sum
    //     for (const item of this.items) {
    //         sum += item.getTotalItemPrice();
    //     }
    //     return sum;  // Return the total price
    // }

    // A more concise method to calculate total price using reduce
    getTotalPrice2() {
        // Use reduce to accumulate total price by calling getTotalItemPrice on each item
        return this.items.reduce((sum, item) => sum + item.getTotalItemPrice(), 0);
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Create a new ShoppingCartItem and push it to the items array
        this.items.push(new ShoppingCartItem(product, quantity));
    }

    // Method to remove an item from the cart (currently not implemented)
    removeItem() {
        // Logic to remove an item could be added here (e.g., find and splice item)
    }
}
