$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    const food1 = $("#food1").val();
    const food2 = $("#food2").val();
    const movie1 = $('#movie1').val();
    const movie2 = $('#movie2').val();
    const game1 = $('#game1').val();
    const game2 = $('#game2').val();

    let favArray = [food1, food2, movie1, movie2, game1, game2];

    let favArray2 = [favArray[1], favArray[0], favArray[2]];
    $("ul").prepend("<li>" + favArray2[0] + "</li>");
    $("ul").prepend("<li>" + favArray2[1] + "</li>");
    $("ul").prepend("<li>" + favArray2[2] + "</li>");
    //const favArray2 = [];

    //console.log(favArray2);
  });
});