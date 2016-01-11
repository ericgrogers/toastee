(function($){

	$('#btn').on('click', function(){
		$('#testy').toastee();
	});
	$('#btn1').on('click', function(){
		$('#testy').toastee({
			type: 'success',
			message: 'You have successfully created this Toast!!!!!',
		});
	});
	$('#btn2').on('click', function() {
		$('#testy').toastee({
			header: 'Warning!',
			type: 'error',
			message: 'Oh NOez!'
		});
	});
	$('#btn3').on('click', function () {
		$('#testy').toastee({
			type: 'success',
            header: 'Toastee',
            message: 'Got Butter?',
            color: 'yellow',
            background: '#FFBB00',
            width: 100,
            height: 200,
            fadeout: 500
		});
	});
})(jQuery);





