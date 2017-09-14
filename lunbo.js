$(function(){
	$(document).ready(function(){
		$('.ggbox ol li').mouseover(function(event){
			var lis =$(this).index();
			$('.ggbox').eq(lis).fadeIn().siblings().hide();
			$(this).addClass('current').siblings().removeClass('current')
		});
	});
	
})
