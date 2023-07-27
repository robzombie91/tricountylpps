document.addEventListener('DOMContentLoaded', function () {
    var dropdownLinks = document.querySelectorAll('.dropdown-content a');
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropdown = document.querySelector('.dropdown');

    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var url = e.target.getAttribute('href');

            fetch(url)
                .then(function (response) {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('Failed to load content');
                    }
                })
                .then(function (data) {
                    document.querySelector('#content').innerHTML = data;
                })
                .catch(function (error) {
                    document.querySelector('#content').innerHTML = '<p>Error: the requested page could not be loaded.</p>';
                });

            // Hide the dropdown after clicking a link
            dropdownContent.style.display = 'none';
        });
    });

    // Show the dropdown when hovering over the parent
    dropdown.addEventListener('mouseover', function () {
        dropdownContent.style.display = 'block';
    });

    // Hide the dropdown when the mouse is not over the parent
    dropdown.addEventListener('mouseout', function () {
        dropdownContent.style.display = 'none';
    });
});

function calculate() {
        var costPerPiece = 0.66;
        var numberOfPieces = document.getElementById('numberOfPieces').value;
        var totalCost = (costPerPiece - discountPerPiece) * numberOfPieces;
        document.getElementById('totalCost').innerHTML = "Total Cost: $" + totalCost.toFixed(2);
    }
    
    function updateSliderValue(val) {
        document.getElementById('numberOfPieces').value = val;
        document.getElementById('piecesInput').value = val;
        document.getElementById('sliderValue').innerHTML = "Number of pieces: " + val;
    }
    function updateSliderValue(value) {
        document.getElementById('numberOfPieces').value = value;
        document.getElementById('piecesInput').value = value;
        document.getElementById('sliderValue').innerHTML = 'Number of pieces: ' + value;
    }

    function calculate() {
        let numberOfPieces = Number(document.getElementById('numberOfPieces').value);
        let serviceType = Number(document.getElementById('serviceType').value);
        let costPerPiece = serviceType;
        let discount = 0;
        let originalCost = numberOfPieces * costPerPiece;

        // apply discount for bulk
        if (numberOfPieces > 50000) {
            costPerPiece *= 0.8; // 20% discount
            discount = originalCost * 0.2; // 20% of original cost
        } else if (numberOfPieces > 10000) {
            costPerPiece *= 0.9; // 10% discount
            discount = originalCost * 0.1; // 10% of original cost
        } else if (numberOfPieces < 10000) {
            discount = "NaN"
        }

        let totalCost = numberOfPieces * costPerPiece;
        document.getElementById('totalCost').innerHTML = 'Total cost: $' + totalCost.toFixed(2);
        document.getElementById('discount').innerHTML = 'Discount: $' + discount.toFixed(2);
    }