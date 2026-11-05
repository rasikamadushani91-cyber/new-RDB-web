
// Sri Lankan Districts
const districts = [
    "AMPARA",
    "ANURADHAPURA",
    "BADULLA",
    "BATTICALOA",
    "COLOMBO",
    "GALLE",
    "GAMPAHA",
    "HAMBANTOTA",
    "JAFFNA",
    "KALUTARA",
    "KANDY",
    "KEGALLE",
    "KILINOCHCHI",
    "KURUNEGALA",
    "MANNAR",
    "MATALE",
    "MATARA",
    "MONARAGALA",
    "MULLAITTIVU",
    "NUWARA ELIYA",
    "POLONNARUWA",
    "PUTTALAM",
    "RATNAPURA",
    "TRINCOMALEE",
    "VAVUNIYA"
];

// Get district grid
const districtGrid = document.getElementById("districtGrid");

// Create district buttons
districts.forEach(district => {

    const button = document.createElement("button");

    button.classList.add("district-btn");

    button.textContent = district;

    // District click event
    button.addEventListener("click", function () {

        localStorage.setItem("selectedDistrict", district);

        alert("Selected District: " + district);

        // Add your district page navigation here
        // Example:
        // window.location.href = "district.html";

    });

    districtGrid.appendChild(button);

});


// Dashboard Button
document.getElementById("dashboardBtn").addEventListener("click", function () {

    window.location.href = "dashboard.html";

});
