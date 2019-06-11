$(document).ready(function(){
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {

      var workTransportationMode = $(this).val();

      var upperWorkTransportationMode = workTransportationMode.toUpperCase();

      $("#work-responses").append(upperWorkTransportationMode + "<br>");
});
$("#fun-responses").show();
$("input:checkbox[name=fun-transportation]:checked").each(function(){
    var funTransportation = $(this).val();
    var upperFunTransportation = funTransportation.toUpperCase();

        $("#fun-responses").append(upperFunTransportation + "<br>");



    });
  });
});
