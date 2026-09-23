async function loadItem() {
    try {
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get("item");

        const response = await fetch("items.json");
        const items = await response.json();

        const item = items[itemId];

        if (!item) {
            document.getElementById("main").innerHTML = "<p>Item not found.</p>";
            return;
        }

        document.getElementById("itemName").textContent = item.name;
        document.getElementById("itemImage").src = item.image;
        document.getElementById("itemImage").alt = item.name;
        document.getElementById("itemDescription").textContent = item.description;
        document.getElementById("itemPrice").textContent = `$${item.price.toFixed(2)}`;

        const health = item.healthDetails;

        document.getElementById("itemHealthDetails").textContent =
            `Calories: ${health.calories} | ` +
            `Fat: ${health.fat}g | ` +
            `Protein: ${health.protein}g | ` +
            `Allergens: ${health.allergens.length > 0
                ? health.allergens.join(", ")
                : "None"}`;
    } catch (error) {
        console.error("Failed to load item:", error);
    }
}

loadItem();