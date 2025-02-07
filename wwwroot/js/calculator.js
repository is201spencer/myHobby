$(document).ready(function () {
    $("#calculate-btn").click(function () {
        const hours = parseFloat($("#hours").val());
        const ratePerHour = 50;

        // Validation: Ensure hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        // Calculate and display the total cost
        const totalCost = hours * ratePerHour;
        $("#total-output").text(`Total Cost: $${totalCost.toFixed(2)}`);
    });
});
