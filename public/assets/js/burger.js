// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
     // UPDATE burger status event handler
    $(".change-devour").on("click", function(event) {
        event.preventDefault();
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
      var newDevouredState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          location.reload();
        }
      );
    });
    
    // CREATE burger event handler
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[name=group1]:checked").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  