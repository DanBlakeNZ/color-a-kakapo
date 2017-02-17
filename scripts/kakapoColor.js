$(document).ready(function() {

  var selectedFill = "fill:#8B4513"
  var clickedSwatch = "";
  var oldSwatch = $('#swatch09');


  $(".color").on("click", function(){
    clickedSwatch = $(this);
    highlightSwatch();
    setColor(clickedSwatch);
  });

  //When the color class (swatch) is clicked, the function  will get the colour code via the data attribute//
  function setColor(swatch){
    selectedFill = "fill:#"+(swatch.data("color"));
  }

  //Removes the previous swatch highlight, adds the highlight to the clicked swatch.//
  function highlightSwatch(){
    oldSwatch.removeClass('selected');
    oldSwatch.html("");
    clickedSwatch.addClass('selected');
    clickedSwatch.html('<i class="fa fa-paint-brush" aria-hidden="true"></i>');
    oldSwatch = clickedSwatch;
  }

  //When the kakapo image is clicked the function will check to see which part (id) of the svg image was clicked, and then apply a fill to colour that part of the image.
  $("#kakapo-svg").click(function(event){
    $(event.target).attr('style', selectedFill);
  });

});
