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
// Button click
document.getElementById("orderBtn").addEventListener("click", () => {
    let size = document.getElementById("size").value;
    let base = document.getElementById("base").value;
    let sweet = document.getElementById("sweet").value;

    let itemBoxes = document.querySelectorAll(".ingredients input");
    let items = [];

    itemBoxes.forEach(box => {
        if (box.checked) {
            items.push(box.value);
        }
    });

    let smoothie = new Smoothie(size, base, items, sweet);

    let output = document.getElementById("result");
    output.innerHTML = smoothie.getDetails();
    output.style.display = "block";
});
