document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
      	document.body.className = '';
    }, 530);
});


var fade = document.getElementByClassName("link");
fade.addEventListener("click", function(){
	window.setTimeout(function() {
      	document.body.className = 'fade';
    }, 530);
});

function myFunction1() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}