// Smoothie Class
class Smoothie {
    constructor(size, base, items, sweet) {
        this.size = size;
        this.base = base;
        this.items = items;
        this.sweet = sweet;
    }
    
    getPrice() {
        let price = this.size === "Small" ? 4 :
                    this.size === "Medium" ? 5 : 7;
        price += this.items.length * 1; 
        return price;
    }
    
    getDetails() {
        return `
            <h2>Your Smoothie </h2>
            <p><b>Size:</b> ${this.size}</p>
            <p><b>Base:</b> ${this.base}</p>
            <p><b>Ingredients:</b> ${this.items.join(", ") || "None"}</p>
            <p><b>Sweetness:</b> ${this.sweet}/5</p>
            <p><b>Total Price:</b> $${this.getPrice().toFixed(2)}</p>
        `;
    }
}
