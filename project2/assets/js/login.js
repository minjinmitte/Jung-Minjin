/**
	author: Minjin Jung
	param: none;
	return: none;
	desc: whten the login button has been clicked, the alert is shown.
*/

var login = {
	
	doLogin: function(){//로그인 시작
		alert(1);
	},
	setEvent: function(){//이벤트 초기화
		$('#doLogin').click(login.doLogin);
	},
	init: function(){
		login.setEvent();//객체 초기화
	}
}
/**
function login(){
	var url = "http://128.199.188.157:7000/api/siignin";
	//1. email node find
	//2. get node value
	//3. define var
	//4. assign value
	var email = $('exampleInputEmail1').val();

	//1.find password
	//2. get node valuewhten
	//3. define var
	//4. assign value
	var password = $('exampleInputPassword1').val();

	$('selector')
	//jQuery in-bulit method
	//제이쿼리가 미리 가지고 있는 함수

	$.post(url, {email:email, password:password})
		.done(function(){
			//요청이 성공 했을때 status code 200
			reset();
			$('.confirmed_form').css('display','block');
		}).fail(function(){
			//요청이 실패 했을때 status code 404:user not found, 500
			//1. find failed form
			//2. form need to be shown .css display block(none)
			reset();
			$('.failed_form').css('display','block');
		})
	}
	//email:email -> email(key):$('exampleInputEmail1')(value)와 같은것.


	// geet email password var
	//1. call alert window
	//updated by Minjin Jung 2016 .08. 07
	//alert(email + " : " + password);
	//console.log(email + " : " + password);
	
function reset(){
	$('.failed_form').css('display','none');
	$('.confirmed_form').css('display','none');
}

function init(){
	reset();
}
*/