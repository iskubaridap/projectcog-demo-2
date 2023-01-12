$(document).ready(function () {
    $("form").submit(function (event) {
      
      var formData = {
        name: $("#name-group input").val(),
        email: $("#email-group input").val(),
        phone: $("#phone-group input").val(),
        subjectline: $("#subjectline-group input").val(),
        messagebody: $("#messagebody-group textarea").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "./pages/process.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
        if (!data.success) {
          if (data.errors.name) {
            $("#name-group").addClass("has-error");
            $("#name-group").append(
              '<div class="help-block">' + data.errors.name + "</div>"
            );
          }
  
          if (data.errors.email) {
            $("#email-group").addClass("has-error");
            $("#email-group").append(
              '<div class="help-block">' + data.errors.email + "</div>"
            );
          }
  
          if (data.errors.phone) {
            $("#phone-group").addClass("has-error");
            $("#phone-group").append(
              '<div class="help-block">' + data.errors.phone + "</div>"
            );
          }
          if (data.errors.subjectline) {
            $("#subjectline-group").addClass("has-error");
            $("#subjectline-group").append(
              '<div class="help-block">' + data.errors.subjectline + "</div>"
            );
          }
          if (data.errors.messagebody) {
            $("#messagebody-group").addClass("has-error");
            $("#messagebody-group").append(
              '<div class="help-block">' + data.errors.messagebody + "</div>"
            );
          }
        } else {
          $("form").html(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
        }

      });
      event.preventDefault();
      
      // console.log(formData);
    });
  });