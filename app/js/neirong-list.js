
 //二级页面
     function initMenu() {

            //	$('.neirong_collect ul').hide();

            //	$('.neirong_collect ul.smbody').show();

            $('.neirong_collect div a').click(

				function () {
				
				   $(this).parent().parent().find("a.smtitle_a");
				
				   var checkElement = $(this).next();
				
				   if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				
				       $('.neirong_collect ul:visible').slideDown('normal');
				
				       checkElement.slideUp('normal');
				
				       checkElement.prev();
				
				       return false;
				
				   }
				
				   if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				
				       $('.neirong_collect ul:visible').slideUp('normal');
				
				       checkElement.slideDown('normal');
				
				       checkElement.prev();
				
				       return false;
				
				   }
				
				}

           );

        }

        $(document).ready(function () { initMenu(); });
        //三级页面
		$(document).ready(function() {
			$('.inactive').click(function(){
				if($(this).siblings('ul').css('display')=='none'){
					$(this).parent('li').siblings('li').removeClass('inactives');
					$(this).addClass('inactives');
					$(this).siblings('ul').slideDown(100).children('li');
					if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
						$(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
						$(this).parents('li').siblings('li').children('ul').slideUp(100);
					}
				}else{
					
					$(this).removeClass('inactives');
					//控制自身菜单下子菜单隐藏
					$(this).siblings('ul').slideUp(100);
					
					$(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
					//控制自身菜单下子菜单隐藏
					$(this).siblings('ul').children('li').children('ul').slideUp(100);
					//控制同级菜单只保持一个是展开的（-号显示）
					$(this).siblings('ul').children('li').children('a').removeClass('inactives');
				}
			})
		});