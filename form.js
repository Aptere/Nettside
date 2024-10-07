document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById("contactModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openModalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "flex";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Add active-form class to checkboxes on click
    document.querySelectorAll('#contact-form .checkbox-group label input').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                this.parentNode.classList.add('active-form');
            } else {
                this.parentNode.classList.remove('active-form');
            }
        });
    });
});
