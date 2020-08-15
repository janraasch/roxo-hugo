window.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("kontakt");
  var $form = $(form);
  var button = document.getElementById("contact-form-button");
  var status = document.getElementById("contact-form-status");

  function success() {
    status.innerHTML = status.dataset.success
  }

  function error() {
    button.style = "";
    status.innerHTML = status.dataset.error
  }

  // handle the form submission event
  // see https://docs.netlify.com/forms/setup/#submit-forms-via-ajax

  form.addEventListener("submit", function(event) {
    button.style = "display: none";
    event.preventDefault();
    $.post($form.attr("action"), $form.serialize()).done(success).fail(error);
  });
});
