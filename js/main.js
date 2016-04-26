$(function(){
	// sound on/offの制御
	var v = $('video')[0];
	var soundOn = $('.soundOn')
	var soundOff =$('.soundOff')
	soundOn.click(function(){
		v.muted = false;
		$(this).css("color","#FFF");
		soundOff.css("color","rgba(255,255,255,0.5)");
	});
	soundOff.click(function(){
		v.muted = true;
		$(this).css("color","#FFF");
		soundOn.css("color","rgba(255,255,255,0.5)");

	});
});