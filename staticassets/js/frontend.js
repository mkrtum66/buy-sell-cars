// $(document).on("change", "#makeselect select", function(){
// var make = $(this).val();
//
// $.ajax({
//   url: "/api/v1/vehicles/models",
//   method: "GET",
//   dataType: "json",
//   data: {make: make},
//   error: function (xhr, status, error) {
//     console.error('AJAX Error: ' + status + error);
//   },
//   success: function (response) {
//     console.log(response);
//     var models = response["models"];
//     $("#city select").empty();
//
//     $("#city select").append('<option>Select city</option>');
//     for(var i=0; i< cities.length; i++){
//       $("#city select").append('<option value="' + cities[i]["id"] + '">' + cities[i]["name"] + '</option>');
//     }
//   }
// });
// });


$(document).on("change", "#makeselect", function(){
   $("#modelselect").empty().append('<option>Select model</option>');
   $("#yearselect").empty().append('<option>Select year</option>');
   $("#badgeselect").empty().append('<option>Select badge</option>');
  var make = $(this).val();
   $.ajax({
     url: "https://carbuyers.com.au/api/v1/vehicles/models",
     method: "GET",
     dataType: "json",
     data: {make: make},
     error: function (xhr, status, error) {
       console.error('AJAX Error: ' + status + error);
     },
     success: function (response) {
       console.log(response);
       var models = response ;
       $("#modelselect").empty();
       $("#modelselect").append('<option>Select model</option>');
       for(var i=0; i< models.length; i++){
         $("#modelselect").append('<option value="' + models[i] + '">' + models[i]+ '</option>');
       }
     }
   });
  });

  $(document).on("change", "#modelselect", function(){
    $("#yearselect").empty().append('<option>Select year</option>');
    $("#badgeselect").empty().append('<option>Select badge</option>');

    var make = $("#makeselect").val();
    var model = $(this).val();

    var info  =   {make:  make, model: model  };
    $.ajax({
      url: "https://carbuyers.com.au/api/v1/vehicles/years",
      method: "GET",
      dataType: "json",
      data: info,
      error: function (xhr, status, error) {
        console.error('AJAX Error: ' + status + error);
      },
      success: function (response) {
        console.log(response);
        var years = response ;
        $("#yearselect").empty();
        $("#yearselect").append('<option>Select model</option>');
        for(var i=0; i< years.length; i++){
          $("#yearselect").append('<option value="' + years[i] + '">' + years[i]+ '</option>');
        }
      }
    });

  });


  $(document).on("change", "#yearselect", function(){
    $("#badgeselect").empty().append('<option>Select badge</option>');
    var make = $("#makeselect").val();
    var model = $("#modelselect").val();
    var year = $(this).val();
    console.log(model);
    var info  =   {make:  make, model: model, year: year  };
    $.ajax({
      url: "https://carbuyers.com.au/api/v1/vehicles/badges",
      method: "GET",
      dataType: "json",
      data: info,
      error: function (xhr, status, error) {
        console.error('AJAX Error: ' + status + error);
      },
      success: function (response) {
        console.log(response);
        var badges = response ;
        $("#badgeselect").empty();
        $("#badgeselect").append('<option>Select badge</option>');
        for(var i=0; i< badges.length; i++){
          $("#badgeselect").append('<option value="' + badges[i] + '">' + badges[i]+ '</option>');
        }
      }
    });

  });


 
