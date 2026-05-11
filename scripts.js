// Placeholder JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");
    // Add dynamic functionality here
});


document.addEventListener("DOMContentLoaded", function () {
    const filterDropdown = document.getElementById("energy-type");
    const tableRows = document.querySelectorAll("#comparison-table tbody tr");

    filterDropdown.addEventListener("change", function () {
        const selectedType = filterDropdown.value;
        console.log(`Selected energy type: ${selectedType}`);

        tableRows.forEach((row) => {
            const energyType = row.getAttribute("data-type");
            if (selectedType === "all" || selectedType === energyType) {
                row.style.display = ""; // Show row
                console.log(`Showing row: ${energyType}`);
            } else {
                row.style.display = "none"; // Hide row
                console.log(`Hiding row: ${energyType}`);
            }
        });
    });
});
