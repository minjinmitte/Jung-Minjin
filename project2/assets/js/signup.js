/**
	author: Minjin Jung
	param: none;
	return: none;
	desc: whten the signup button has been clicked, fail or success is shown.
*/

//finction set//
var signup = {

	dosignup:function(){
		var email     = $('#exampleInputEmail1').val();
		var name      = $('#exampleInputName1').val();
		var password  = $('#exampleInputPassword1').val();
		//1. email, name, password node find
		//2. get node value
		//3. define var
		//4. assign value

		//data submit mathod//
		$.post(config.url+"signup", {email: email, password: password, name: name})

		//When signup successed function//
		.done(function(data){
			$('.custom_form').css('display', 'none');
			//find node, before user signup, alert display none//
			$('signup_info p.name').text(data.name);
			//find node, get name data by text//
			$('signup_info p.email').text(data.email);
			//find node, get email data by text//
			$('signup_info p.password').text(data.password);
			//find node, get password data by text//
			$('#success_form').css('display', 'block');
			//find node, If user success, alert is shown//
			$('#signup_input_form').css('display', 'none');
			//find node, If user success, asignup form display none//

		//When signup failed function//
		}).fail(function(data){
			$('.custom_form').css('display', 'none');
			//find node, before user signup, alert display none//
			$('#failed_form').css('display', 'block');
			//find node, If user failed, alert is shown//
		});
	},

	//setevent function defind//
	setEvent: function(){
		$('#dosignup').click(signup.dosignup);
		//find node, event//
	},

	//initialize, define//
	init: function(){
		signup.setEvent();
	}
}