function onVideoClick(theLink) {
    document.getElementById("video_pop").innerHTML = "<video autoplay muted loop id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/webm\"></video>";
    document.getElementById("video_pop").style.display="block";
} 

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = ""; 
}         

var element = document.getElementById("video_pop");

element.onclick = (function (onclick) {
  return function(evt) {
    // reference to event to pass argument properly
    evt  = evt || event;

    // onClick even still works in the DOM
    if (onclick) {
      onclick(evt);
    }
    // new code that will happen when you click only if you click on the background.
     if (evt.target == element) { element.style.display="none"; } 
  }
})(element.onclick);