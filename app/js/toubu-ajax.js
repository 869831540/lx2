 //bootstrap轮播定时器部分
	$('.carousel').carousel({
  interval: 1500
 })
	 
	       //音乐ajax数据部分
           $(function(){

			document.onkeyup=function(event){
			        var event=event||window.event;
			        if(event.keyCode==13){
			        load();
			        }
			};
			
			$(".search").on("click",load);
			$(".txt").on("keyup",load);
			
			function load(){
		                let kw = $('.txt')[0].value;
//		                console.log(kw);
		                let list=[];
                        $.ajax({
							type:"get",
							url:"https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+kw+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=30&n=30&p=1&_=1489396018874&jsonpCallback=_jsonpky20i0jqjfr",
							dataType:"jsonp",
							jsonp:"jsonpCallback",  //qq音乐
							async:true,
							success:function(data){
								list = list.concat(data.data.song.list)
						    }
					    });		                
                        $.ajax({
							type:"get",
							url:"https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+kw+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=30&n=30&p=2&_=1489396018874&jsonpCallback=_jsonpky20i0jqjfr",
							dataType:"jsonp",
							jsonp:"jsonpCallback",  //qq音乐
							async:true,
							success:function(data){
								list = list.concat(data.data.song.list)
//								console.log(list);
								$(".music")[0].style.display="block";
								$(".result").html("");
								for(var i=0;i<list.length;i++){
								    $(".result").append("<li class='"+list[i].songid+"'><p>"+list[i].songname+"</p><strong>"+list[i].singer[0].name+"</strong></li>")
								}

						    }
					    })
		    }
			
			function creatvideo(a){
				$("body i.videop").empty();
				$("body i.videop").append("<audio  class='videoplay toubu_video' controls='' autoplay='' loop='loop' name='media'></audio>");
				$(".videoplay").append("<source  src='http://ws.stream.qqmusic.qq.com/"+a+".m4a?fromtag=46' type='audio/mp4'>")
			}
			
			$(".result").on("click","li",function(){
				var songid = $(this)[0].className;
                creatvideo(songid);
			})
		})	
		
		
			$('.result').click(function(){
				$('.result').hide();
			});
			$('.txt').focus(function(){
				$('.result').show();
			});