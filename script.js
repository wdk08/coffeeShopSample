async function loadMenu() {
    try {
        const response = await fetch("items.json");
        const items = await response.json();

        const menu = document.getElementById("menuItems");

        for (const [id, item] of Object.entries(items)) {
            const li = document.createElement("li");

            const link = document.createElement("a");
            link.href = `item.html?item=${id}`;

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            const span = document.createElement("span");
            span.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            link.appendChild(img);
            link.appendChild(span);
            li.appendChild(link);
            menu.appendChild(li);
        }
    } catch (error) {
        console.error("Failed to load menu:", error);
    }
}

loadMenu();