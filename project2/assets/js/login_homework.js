var login = {

	dologin:function(){
		var email     = $('#exampleInputEmail1').val();
		var name      = $('#exampleInputName1').val();
		var password  = $('#exampleInputPassword1').val();

		$.post(config.url+"signup", {email: email, password: password, name: name})
		.done(function(data){
			$('.custom_form').css('display', 'none');
			$('login_info p.name').text(data.name);
			$('login_info p.email').text(data.email);
			$('login_info p.password').text(data.password);

			$('#success_form').css('display', 'block');
			$('#login_input_form').css('display', 'none');

		}).fail(function(data){
			$('.custom_form').css('display', 'none');
			$('#failed_form').css('display', 'block');
		});
	},

	setEvent: function(){
		$('#dologin').click(login.dologin);
	},
	init: function(){
		login.setEvent();
	}
}