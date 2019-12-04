 $(document).ready(function() {

//  	$(document).on("input", "#phone", function() {
//  		this.value = this.value.replace(/\D/g, '');

//  	});

//  	$('#phone, #phoneConfirm').on('keyup', function () {
//         var value = $(this).val();
//         $(this).val('+' + value.substr(value.lastIndexOf('+') + 1));
//     });

//  	jQuery.validator.addMethod("email",function(value,element,param)
//  	{
//  		if(this.optional(element))
//     {
// return true;
// }

// if(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value))
// {
// 	return true;
// }

// return false;

// },"Некорректный email");

 	    $.validator.addMethod("email", function (value, element, param) {
        if (this.optional(element)) {//This is not a 'required' element and the input is empty
            return true;
        }

        if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
            return true;
        }

        return false;

    }, "Некорректный email");

    $.validator.addMethod("customphone", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 8 &&
            phone_number.match(/^\+[0-9]{8,12}$/);
    }, "Некорректный телефон");

    $.validator.addMethod( "nowhitespace", function( value, element ) {
        return this.optional( element ) || /^\S+$/i.test( value );
    }, "Некорректный телефон" );

    $('#phone, #phoneConfirm').on('keyup', function () {
        var value = $(this).val();
        $(this).val('+' + value.substr(value.lastIndexOf('+') + 1));
    });

    $("#phone, #phoneConfirm").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Убеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });


 	$(".form").validate({

 		rules: {

 			name: {
 				required: true,
 				minlength: 2

 			},
 			phone: {
 				required: true,
 				minlength: 8
 			},          
 			email: {
 				required: true,
 				email: true,


 			},


 		},
 		messages: {
 			name: "Введите мин. 2 символа",
 			phone: "Некорректный телефон",
 			email: "Некорректный email"
 		}

 	});

 	
 	
 	var questArr = [];

  

 	var affiliateusertoken;
 	var affiliateid;
 	var ip;
 	var country;
 	var city;
 	var utmmedium;
 	var utmcontent;
 	var utmcampaign;
 	var utmsource;
 	var utmterm;
 	var linkId;

 	var firstname;
 	var lastname;
 	var email;
 	var phoneCountry;
 	var phoneNumber;
 	var phoneOperator;
 	var params;

 	var res;
 	var codePhone;
 

 	var url_;
 	var url;

 	var email;
 	var fullName;
 	var _fullName;
 	var firstName;
 	var lastName;
 	var phoneConfirm;

 	var Data  = new Date();
 	var Hour = Data.getHours();
 	var Minutes = Data.getMinutes();
 	var Seconds = Data.getSeconds();

 	function dateToYMD(date) {
 		var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

init();

// function yaCounter() {

	
// 	yaCounter53777584.reachGoal('form');
// 	return true;

// }


var respLeadId;
var respSuccess;


$('.next .pager-link').click(function (e) {

   
    {
      
        var html = $('.active  .active-item').text();
 			
 		    questArr.push(html);
 	
    }

});




$('.form-button').click(function() {

	// console.log(questArr[0]);
	// console.log(questArr);


	debugger;
	
	
	fullName = urlLit($('#name').val(),0);
	_fullName = fullName.split(' ');
	firstName = _fullName[0];
	lastName = _fullName[1] || _fullName[0];
	email = $('#email').val();
	console.log(email,fullName);



	// phoneCountry = $('.form .selected-dial-code').text().replace("+", "");

	var _phoneNumber = $('#phone').val();
	phoneOperator = _phoneNumber[0] + _phoneNumber[1];
	phoneNumber = _phoneNumber.replace(phoneOperator,'');


 var d = _phoneNumber.substr(0,4);
    var k = _phoneNumber.substr(0,2);
    var r = _phoneNumber.substr(0,2);
    var a = _phoneNumber.substr(0,4);


    if (d == '+380') {
        _phoneNumber = _phoneNumber.replace(d, '');
    }

    if(phoneCountry === '+380') {
        console.log('phoneCountry', 'UA');


        while(_phoneNumber.charAt(0) === '0')
        {
            _phoneNumber = _phoneNumber.substr(1);
        }
        console.log(_phoneNumber);
    } 

    if (k == '+7') {
        _phoneNumber = _phoneNumber.replace(k, '');
    }

    if (a == '+994') {
        _phoneNumber = _phoneNumber.replace(a, '');
    }

		if(phoneCountry === '380') {
		console.log('phoneCountry', 'UA');

	
		while(_phoneNumber.charAt(0) === '0')
		{
			_phoneNumber = _phoneNumber.substr(1);
		}
		console.log(_phoneNumber);
	} 

	var phoneSms = phoneCountry + _phoneNumber;

	console.log(phoneSms);




	res = randomInteger(1000,9999);
	console.log(res);

	$('#currPhone').text(phoneSms);

	// url_ = getQueryString(baseurl, params);



	var curDate = dateToYMD(new Date()) + ' ' +Hour+":"+Minutes+":"+Seconds;



	utmmedium = $.urlParam('utm_medium');
	utmcontent = $.urlParam('utm_content');
	utmterm = $.urlParam('utm_term');

	

if ($(".form ").valid()) {


				
dataLayer.push({'event': 'formsend'});
	


			 		$.ajax({
					url: 'https://trader-test.top/temps.php',
					type: 'POST',
					data: jQuery.param({ 
						field0 : curDate, 
						field1: firstName, 
						field2 : email, 
						field3: phoneSms, 
						field4 : country, 
						 
						field5: utmsource, 
						field6: utmmedium, 
						
						field7: utmcampaign, 
						field8: utmcontent,
						field9: utmterm,
					}) ,
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					success: function (response) {
						console.log('log ok');
					},
					error: function () {
						console.log("log error");
					}
			});

	
$('#preloader').show();
	

    var req= $.ajax({

	    
	       url: 'https://apis.lblv.com/Marketing/Leads/add.aspx',

	       type: 'POST',

	       data: {
	       	cid:'208',
	       	referral:'liveru',
	       	country: country,
	       	prefix: phoneCountry,
	       	fname: firstName,
	       	lname: lastName,
	       	email: email,
	       	phone: _phoneNumber,
	       	utm_source: utmsource
		 },
		 success: function(data,responseText){




			console.log('request api success');

			if (data.Lead_id) {
				 respLeadId = 'Lead_Id' + ':' + data.Lead_id.toString();
			} else {
				respLeadId == null;
			}
			 respSuccess ='Success' + ':' + data.Success.toString();

			  console.log(respLeadId);
			  console.log(respSuccess);

			  var curDate = dateToYMD(new Date()) + ' ' +Hour+":"+Minutes+":"+Seconds;

		 	if(data.Success == true){

		 		

		 	    // dataLayer.push({'event': 'formsend'});
		       

		        $.ajax({
				     	url: 'https://trader-test.top/sheets.php',
				     	type: 'POST',
				     	data: jQuery.param({ 
				     		field0 : respLeadId, 
				     		field1 : email, 
				     		field2:  $.trim(questArr[0]), 
				     		field3: $.trim(questArr[1]),
				     		field4: $.trim(questArr[2]),
				     		field5: $.trim(questArr[3]),
				     		field6: $.trim(questArr[4]),
				     		field7: $.trim(questArr[5]),
				     		field8: $.trim(questArr[6]),
				     		field9: $.trim(questArr[7]),
				     		field10: $.trim(questArr[8]),
				     		field11: $.trim(questArr[9]),
				     	}) ,
				     	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				     	success: function (response) {
				     		console.log('success');
				     	},
				     	error: function () {
				     		console.log("error");
     				}
     		});



		 		$.ajax({
					url: 'https://trader-test.top/temps.php',
					type: 'POST',
					data: jQuery.param({ 
						field0 : curDate, 
						field1: firstName, 
						field2 : email, 
						field3: phoneSms, 
						field4 : country, 
						field5: respSuccess,
						field6: respLeadId, 
						field7: utmsource, 
						field8: utmmedium, 
						
						field9: utmcampaign, 
						field10: utmcontent,
						field11: utmterm,
					}) ,
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					success: function (response) {
						console.log('log ok');
					},
					error: function () {
						console.log("log error");
					}
			});




		 		window.location = 'https://trader-test.top/success.html ';
					console.log('data true');
					
				} else {
					$('#preloader').hide();

						$(".popup-ver").fadeIn("slow");

							if (data.Lead_id) {
								 respLeadId = 'Lead_Id' + ':' + data.Lead_id.toString();
							} else {
								respLeadId == null;
							}
							 respSuccess ='Success' + ':' + data.Success.toString();

							  console.log(respLeadId);
							  console.log(respSuccess);

							  var curDate = dateToYMD(new Date()) + ' ' +Hour+":"+Minutes+":"+Seconds;



							  $.ajax({
								url: 'https://trader-test.top/temps.php',
								type: 'POST',
								data: jQuery.param({ 
									field0 : curDate, 
									field1: firstName, 
									field2 : email, 
									field3: phoneSms, 
									field4 : country, 
									field5: respSuccess,
									field6: respLeadId,
									field7: data.Message.toString(),
									field8: utmsource, 
									field9: utmmedium, 
									
									field10: utmcampaign, 
									field11: utmcontent,
									field12: utmterm,
								
									
								}) ,
								contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
								success: function (response) {
									console.log('log ok');
								},
								error: function () {
									console.log("log error");
								}
							});


						
				}


			},
		error: function(){
				console.log('Error request');
			},
   
   })


}

});


$("#res").click(function() { 

	 	    debugger;


    if(countryCode == 'UA') {
        phoneCountry = 380;
    }

    if(countryCode == 'RU' || countryCode == 'KZ') {
        phoneCountry = 7;
    }

    if(countryCode == 'AZ' ) {
        phoneCountry = 994;
    }

    console.log('phoneCountry-res:', phoneCountry);
    console.log('countryCode-res:', countryCode);

	var codeSms = $('#sms-code').val();


	// if(codeSms == res) {

		

		 $('#preloader').show();

		
		_phoneNumber = $('#currPhone').text().replace(phoneCountry,"");


    var req= $.ajax({

        
        url: 'https://apis.lblv.com/Marketing/Leads/add.aspx',

        type: 'POST',

        data: {
        	cid:'208',
        	referral:'liveru',
        	country: country,
        	prefix: phoneCountry,
        	fname: firstName,
        	lname: lastName,
        	email: email,
        	phone: _phoneNumber,
        	utm_source: utmsource
		 },
		 withCredentials: true,
		 success: function (data) {
			

			  if (data.Lead_id) {
				 respLeadId = 'Lead_Id' + ':' + data.Lead_id.toString();
				} else {
					respLeadId == null;
				}
				 respSuccess ='Success' + ':' + data.Success.toString();

				  console.log(respLeadId);
				  console.log(respSuccess);

				  var curDate = dateToYMD(new Date()) + ' ' +Hour+":"+Minutes+":"+Seconds;

			 	if(data.Success == true && codeSms == res){

			 		 dataLayer.push({'event': 'formsend'});
		 			

					 		$.ajax({
							     	url: 'https://trader-test.top/sheets.php',
							     	type: 'POST',
							     	data: jQuery.param({ 
							     		field0 : respLeadId, 
							     		field1 : email, 
							     		field2:  $.trim(questArr[0]), 
							     		field3: $.trim(questArr[1]),
							     		field4: $.trim(questArr[2]),
							     		field5: $.trim(questArr[3]),
							     		field6: $.trim(questArr[4]),
							     		field7: $.trim(questArr[5]),
							     		field8: $.trim(questArr[6]),
							     		field9: $.trim(questArr[7]),
							     		field10: $.trim(questArr[8]),
							     		field11: $.trim(questArr[9]),
							     	}) ,
							     	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
							     	success: function (response) {
							     		console.log('success');
							     	},
							     	error: function () {
							     		console.log("error");
			     				}
			     		});


						  	$.ajax({
								url: 'https://trader-test.top/temps.php',
								type: 'POST',
								data: jQuery.param({ 
									field0 : curDate, 
									field1: firstName, 
									field2 : email, 
									field3: phoneCountry + _phoneNumber, 
									field4 : country, 
									field5: respSuccess,
									field6: respLeadId, 
                                         
									field7: utmsource, 
									field8: utmmedium, 
									field9: utmcampaign, 
									field10: utmcontent,				
									field11: utmterm,
									field12: 'sms'
								}) ,
								contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
								success: function (response) {
									console.log('log ver ok');
								},
								error: function () {
									console.log("error");
								}
						});

			window.location = 'https://trader-test.top/success.html ';


			 	// }  else if (data.Message == "Lead Already Exist" && codeSms == res) {
			 	}  else if (data.Success == false && codeSms == res) {
			 	// }  else  {
			 		console.log(data.Message.toString());
			 		// $('#preloader').hide();

			 		// $('#errorLead').css('display', 'block');



						  	$.ajax({
								url: 'https://trader-test.top/temps.php',
								type: 'POST',
								data: jQuery.param({ 
									field0 : curDate, 
									field1: firstName, 
									field2 : email, 
									field3: phoneCountry + _phoneNumber, 
									field4 : country,
									field5: respSuccess, 
									field6: data.Message.toString(),
									field7: utmsource, 
									field8: utmmedium, 
									field9: utmcampaign, 
									field10: utmcontent,				
									field11: utmterm,
									
									
								}) ,
								contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
								success: function (response) {
									console.log('log ver ok');
								},
								error: function () {
									console.log("error");
								}
						});

						  	window.location = 'https://trader-test.top/success.html ';

			 	}
			 	//  else {
			 	// 	console.log(data.Message.toString());
			 	// 	 $('#preloader').hide();

					// 	  	$.ajax({
					// 			url: 'https://trader-test.top/temps.php',
					// 			type: 'POST',
					// 			data: jQuery.param({ 
					// 				field0 : curDate, 
					// 				field1: firstName, 
					// 				field2 : email, 
					// 				field3: phoneCountry + _phoneNumber, 
					// 				field4 : country, 
					// 				field5: utmterm, 
					// 				field6: utmmedium, 
					// 				field7: utmsource, 
					// 				field8: utmcampaign, 
					// 				field9: utmcontent,
					// 				field10: respSuccess,
									
					// 				field11: data.Message.toString(),
					// 			}) ,
					// 			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					// 			success: function (response) {
					// 				console.log('log ver ok');
					// 			},
					// 			error: function () {
					// 				console.log("error");
					// 			}
					// 	});
			 	// }


		},

		error: function () {
			console.log("error");
		}
    })


		
	// }

	if( codeSms != res){
	
		console.log('fail');
		$('#codeError').css('display', 'block');
		 $('#preloader').hide();
	}



});

 // if($('#errorLead').css('display', 'block')) {
 // 	$('#res, #change-number').prop('disabled', true);
 // }

$("#change-number").click(function() { 
	$('.popup-form-title, #sms-code, #codeError, #res, #change-number').css('display', 'none');
	$('.phoneConfirmWrap').css('display', 'block');
});

$("#submit-number").click(function() { 
    // console.log(params);

    // console.log('click');

    debugger;

    phoneConfirm = $('.phoneConfirm').val();
    // phoneCountry = $('.codePhone').val().replace('+', '');
    phoneCountry = $('.popup-form .selected-dial-code').text().replace("+", "");

    var _phoneNumber = phoneConfirm;
    if(_phoneNumber) {
    	phoneOperator = _phoneNumber[0] + _phoneNumber[1];
    	phoneNumber = _phoneNumber.replace(phoneOperator,'');
    }
    
  

    console.log(_phoneNumber);
 
    res = randomInteger(1000,9999);

    var phoneSms = phoneCountry + phoneConfirm;
    var curDate = dateToYMD(new Date()) + ' ' +Hour+":"+Minutes+":"+Seconds;
  

     $.ajax({
     	url: 'https://trader-test.top/send.php',
     	type: 'POST',
     	data: jQuery.param({ field0 : phoneSms, field1: res}) ,
     	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
     	success: function (response) {
     		console.log(response.status);
     	},
     	error: function () {
     		console.log("error");
     	}
     });



     $('#currPhone').text(phoneSms);
     $('.popup-form-title, #sms-code, #res, #change-number').css('display', 'block');
     $('.phoneConfirmWrap').css('display', 'none');
     console.log('success');
     console.log(phoneSms);
     console.log(res);
     console.log(phoneCountry);
     // console.log(urlConfirm);
     
 });


function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

function getQueryString(baseurl, params) {
	var url = baseurl;
	var isFirst = true;

	$.each(params, function(key, value) {
		url += isFirst ? '?' : '&';

		isFirst = false;
		url += (key.toString() + '=' + value);
	});

	return url;
}


function getphoneOperator(phoneNumber) {

	var parts = phoneNumber.split(' ', 2);
	if (parts && parts.length > 1) {

		return parts[0].replace('(', '').replace(')', '');
	}
	return '';
}


function getphoneNumber(phoneNumber) {
	var parts = phoneNumber.split(' ', 2);

	if (parts && parts.length > 1) {
		return parts[1].replace('-', '').replace('-', '');
	}

	return '';
}


function urlLit(w,v) {
	var tr='a b v g d e ["zh","j"] z i y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]'.split(' ');
	var ww=''; w=w.toLowerCase();
	for(i=0; i<w.length; ++i) {
		cc=w.charCodeAt(i); ch=(cc>=1072?tr[cc-1072]:w[i]);
	if(ch.length<3) ww+=ch; else ww+=eval(ch)[v];}
	return(ww.replace(/[^a-zA-Z0-9\-]/g,'-').replace(/[-]{2,}/gim, '-').replace( /^\-+/g, '').replace( /\-+$/g, ''));
}

var ip;

    function init() {





        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)')
            .exec(window.location.href);

            if (results) {
                return results[1] || 0;
            }
        };

        affiliateusertoken = $.urlParam('usertoken');
        affiliateid = $.urlParam('affiliateId');
        utmmedium = $.urlParam('utm_medium');
        utmcontent = $.urlParam('utm_content');
        utmterm = $.urlParam('utm_term');
        utmcampaign = $.urlParam('utm_campaign');
        utmsource = $.urlParam('utm_source');






        var input = document.querySelector("#phone");
        var input2 = document.querySelector("#phoneConfirm");

        iti = intlTelInput(input, {
            utilsScript: 'js/utils2.js',
            defaultCountry: 'auto',
            separateDialCode: false,
            nationalMode: false,
            initialCountry: 'auto',
            onlyCountries: [ "ua", "ru", "kz",  "az"],
            geoIpLookup: function (callback) {
                $.ajax({
                    method: "POST",
                    
                 
                    url: "ip4.php"
                })
                .done(function (resp) {

                    var response = JSON.parse(resp);

                    country = response.country;
                    countryCode = response.countryCode;
                    city = response.city;
                    // ip = response.ip;
                    ip = response.query;

                    number = iti.getNumber();

                    console.log('country:', country);
                    console.log('countryCode:', countryCode);
                    console.log('city:', city);
                    console.log('ip:', ip);

                    if(countryCode == 'UA') {
                        phoneCountry = 380;
                    }

                    if(countryCode == 'RU' || countryCode == 'KZ') {
                        phoneCountry = 7;
                    }

                    if(countryCode == 'AZ' ) {
                        phoneCountry = 994;
                    }

                    console.log(phoneCountry);


                    countryCode = (response && response.countryCode) ? response.countryCode : "";

                    callback(countryCode);

                    iti2 = intlTelInput(input2, {
                        utilsScript: 'js/utils2.js',
                        defaultCountry: 'auto',
                        separateDialCode: false,
                        nationalMode: false,
                        initialCountry: 'auto',
                        onlyCountries: [ "ua", "ru", "kz",  "az"],
                        geoIpLookup: function (callback) {
                            callback(countryCode);
                        }
                    });

                    var countryData = iti.getSelectedCountryData();





                    input.addEventListener("countrychange", function () {
                        var countryData = iti.getSelectedCountryData();

                        countryCode = countryData.iso2.toUpperCase();
                        country = countryData.name.split(' (')[0];
                        console.log('countrychange:', countryCode, country);

                        iti2.setCountry(countryCode);
                    });

                    input2.addEventListener("countrychange", function () {
                        var countryData2 = iti2.getSelectedCountryData();

                        countryCode = countryData2.iso2.toUpperCase();
                        country = countryData2.name.split(' (')[0];
                        console.log('countrychange:', countryCode, country, phoneCountry);

                        iti.setCountry(countryCode);

                        var dialCode = iti.getSelectedCountryData();

                        phoneCountry = dialCode.dialCode;

                        console.log(dialCode.dialCode);
                        console.log('phoneCountry(change): ' + phoneCountry);
                        console.log('phoneCountry(init): ' + phoneCountry);
                    });

                });
            },
        });

    }


// function init() {
// 	$('#codePhone').addClass('valid');

// 	 $(".codePhone").intlTelInput({
 

//     geoIpLookup: function (callback) {
//   	$.ajax({
//   		method: "POST",
  		
//   		url: "ip4.php"
//   	})
//   	.done(function (resp) {

//   		var response = JSON.parse(resp);

//   		country = response.country;
//   		countryCode = response.countryCode;
//   		city = response.city;
  	
//   		ip = response.query;

//   		console.log('country:', country);
//   		console.log('countryCode:', countryCode);
//   		console.log('city:', city);
//   		console.log('ip:', ip);

//   		countryCode = (response && response.countryCode) ? response.countryCode : "";

//   		callback(countryCode);



//   	});

//   },
 
    
//          preferredCountries: ["ua", "ru", "kz",  "az"],

//           initialCountry: "auto",
//           separateDialCode: false


//         });



// 	$.urlParam = function (name) {
// 		var results = new RegExp('[\?&]' + name + '=([^&#]*)')
// 		.exec(window.location.href);

// 		if (results) {
// 			return results[1] || 0;
// 		}


// 	}


// 	affiliateusertoken = $.urlParam('usertoken');
// 	affiliateid = $.urlParam('affiliateId');
// 	utmmedium = $.urlParam('utm_medium');
// 	utmcontent = $.urlParam('utm_content');
// 	utmterm = $.urlParam('utm_term');
// 	utmcampaign = $.urlParam('utm_campaign');
// 	utmsource = $.urlParam('utm_source');

// 	console.log(affiliateusertoken);
// 	console.log(utmmedium);



// }



});







