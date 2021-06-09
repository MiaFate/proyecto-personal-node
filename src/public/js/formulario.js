// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      async function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          //nobootstrap
          event.preventDefault();
          const formulario = new FormData(this);

          const response = await fetch(this.action, {
            method: this.method,
            body: formulario,
            headers: {
              Accept: "application/json",
            },
          });
          if (response.ok) {
            this.reset();
            alert("Mensaje enviado");
          } else {
            alert(
              "error del servidor, por favor comuniquese por alguna de las redes"
            );
          }
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
