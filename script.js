$(function(){
  var urlWiki =  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search="
//search section animation
  $("#search").click(function(){
    $("#search").animate({marginTop: 10}, 'slow');
    $("body").css("background-image", "none");
  });
  $("#search").bind("keypress", function(){
    var $text = $("#search").val();
//ajax request and visualization
    $.ajax({
      dataType: "json",
      url: urlWiki + $text,
      success: function(data){
        $("#results").html("");
        for (var i = 0; i < 10; i++) {
          if (data[2][i].length < 15) {
            $("#results").append("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a></li>");
          }
          else {
            $("#results").append("<li><a href=" + data[3][i] + ">" + data[1][i] + " - " + data[2][i] + " (go to Wikipedia.com)</a></li>");
          }
        }
  // reset #search input
        $("#results li a").click(function(){
          $("#search").val("");
        })
      }
    });
  });
});
