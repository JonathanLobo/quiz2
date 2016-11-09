// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

$(document).ready(function () {
	$('.links li a').on('click',  function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	$('#accordion1').on('click', function(e) {
		if($('#panel1').hasClass('hidden')){
		  $('#panel1').removeClass('hidden');
		}
		else {
		 	$('#panel1').addClass('hidden');
		}
	});

	$('#accordion2').on('click', function(e) {
		if($('#panel2').hasClass('hidden')){
		  $('#panel2').removeClass('hidden');
		}
		else {
		 	$('#panel2').addClass('hidden');
		}
	});

	$('#accordion3').on('click', function(e) {
		if($('#panel3').hasClass('hidden')){
		  $('#panel3').removeClass('hidden');
		}
		else {
		 	$('#panel3').addClass('hidden');
		}
	});

	loopThruList();
	setInterval(changeColor, 500);

	console.log("this is a message for you!!!");
});

$(document).on('click', '#goodbye', function(e) {
    $("#mainSection").fadeOut();
		$("#secondarySection").fadeOut();
		$("h1").fadeOut();
		$("p").fadeOut();
		$("button").fadeOut();
		$(".accordionButton").fadeOut();
		$(".accordionPanel").fadeOut();
		
		var section = document.createElement("section");
		var par = document.createElement("p");
		par.innerHTML = "Goodbye!";
		section.appendChild(par);
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(section);
});

function loopThruList() {
	var ol = document.getElementById("orderedList");
	var items = ol.getElementsByTagName("li");

	for (var i = 0; i < items.length; ++i) {
		if (i === 0) {
			items[i].innerHTML = "Much JavaScript.";
			items[i].style.color = "red";
		} else if (i === 1) {
			items[i].innerHTML = "Very HTML.";
			items[i].style.color = "green";
		} else {
			items[i].innerHTML = "Wow!";
			items[i].style.color = "purple";
		}
	}
}

var i = 0;
function changeColor() {
	var title = document.getElementById("title");
  var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
  title.style.color = colors[i];
  i = (i + 1) % colors.length;
}
