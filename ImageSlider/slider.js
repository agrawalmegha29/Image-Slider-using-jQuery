$(document).ready(function(){
$('.slidepicture').first().addClass('curractive');
$('.slidepicture').hide();    
$('.curractive').show();

    $('#image-next').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');    
		if ( $('.prevactive').is(':last-child')) {
			$('.slidepicture').first().addClass('curractive');
		}
		else{
			$('.prevactive').next().addClass('curractive');
		}
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();        
    });
    
    $('#image-previous').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');    
        if ( $('.prevactive').is(':first-child')) {
			$('.slidepicture').last().addClass('curractive');
        }
        else{
			$('.prevactive').prev().addClass('curractive');
        }
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 
	
	$('#image-one').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');
		$('#slide-one').parent().addClass('curractive');
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 
	
	$('#image-two').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');
		$('#slide-two').parent().addClass('curractive');
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 
	
	$('#image-three').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');
		$('#slide-three').parent().addClass('curractive');
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 
	
	$('#image-four').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');
		$('#slide-four').parent().addClass('curractive');
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 
	
	$('#image-five').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');
		$('#slide-five').parent().addClass('curractive');
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 
	
	$('#image-six').click(function(){
		$('.curractive').removeClass('curractive').addClass('prevactive');
		$('#slide-six').parent().addClass('curractive');
		$('.prevactive').removeClass('prevactive');
		$('.slidepicture').fadeOut();
		$('.curractive').fadeIn();
    }); 

});