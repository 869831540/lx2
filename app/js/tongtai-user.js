 	
 		var btn = document.getElementById("btn");
		var btns = document.getElementById("btns");
		//创建数据库
		var data = openDatabase('stn','2.0','用户信息','1024*1024');
		//创建数据库
		
//		data.transaction(function(ts){
//			ts.executeSql("drop table dt");
//		})
		
		data.transaction(function(ts){
			ts.executeSql('create table if not exists dt(user_id AUTO_INCREMENT,user_name primary key,user_password)');
		});
		//    动态表

	 //用户注册
	  btns.onclick = function(){      
				var name =  document.getElementById("username").value;
				var psd =  document.getElementById("password").value;
				data.transaction(function(ds){
					ds.executeSql("insert into users(user_name,user_password) values(?,?)",[name,psd],function(){
						alert("注册成功");
					},function(){
						alert("用户已存在")
					});
				});
				
			};
			
			
	
			//   用户登录的
			btn.onclick = function(){      
				var name =  document.getElementById("username").value;
				var psd =  document.getElementById("password").value;
				data.transaction(function(ds){
					ds.executeSql("select * from users where user_name=?",[name],function(re,data){
//						console.log(re);
//						console.log(data);
						if(data.rows.length != 0){
							var data = data.rows[0];
//							console.log(data);
							
							var resPassword = data.user_password;
							
//							console.log(resPassword);	
							
							 //  登录成功了
							if(psd === resPassword){    
								
//								console.log("登录成功")
								location.href="http://127.0.0.1:8020/yinyueAPP/index.html";
							}else{
								alert('用户名或密码错误')
							}
						}else{
							alert("用户不存在")
						}
					
					});
				});
			};
	
