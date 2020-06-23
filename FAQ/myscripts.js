$(document).ready(function() {
$('#clicker1').click(function() {
	removeRotate(1);
    $('#rotating1').toggleClass('rotated');
    });
});

$(document).ready(function() {
$('#clicker2').click(function() {
	removeRotate(2);
    $('#rotating2').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker3').click(function() {
	removeRotate(3);
    $('#rotating3').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker4').click(function() {
	removeRotate(4);
    $('#rotating4').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker5').click(function() {
	removeRotate(5);
    $('#rotating5').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker6').click(function() {
	removeRotate(6);
    $('#rotating6').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker7').click(function() {
	removeRotate(7);
    $('#rotating7').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker8').click(function() {
	removeRotate(8);
    $('#rotating8').toggleClass('rotated');
});
});

$(document).ready(function() {
$('#clicker9').click(function() {
	removeRotate(9);
    $('#rotating9').toggleClass('rotated');
});
});

function removeRotate(x) {
   var i;
	for (i = 1; i <= 9; i++) {
		if (i!=x){$('#rotating'+i).removeClass('rotated');}
	}
}
