$(document).ready(function() {


  var selectedFill = "fill:#8B4513"
  var clickedSwatch = "";
  var oldSwatch = $('#swatch09');


  $(".color").on("click", function(){
    clickedSwatch = $(this);
    highlightSwatch();
    setColor(clickedSwatch);
  });

  //When the color class (swatch) is clicked, the function will get the colour code via the data attribute//
  function setColor(swatch){
    selectedFill = "fill:#"+(swatch.data("color"));
  }

  //Removes the previous swatch highlight, adds the highlight to the clicked swatch.
  function highlightSwatch(){
    oldSwatch.removeClass('selected');
    clickedSwatch.addClass('selected');
    oldSwatch = clickedSwatch;
  }


  //When the owl image is clicked the function will check to see which part (id) of the svg image was clicked, and then apply a fill to that part of the image.
  $("#kakapo-svg").click(function(event){
    $(event.target).attr('style', selectedFill);
  });


});
