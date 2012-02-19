Ext.define('PET.controller.Login',{
    extend:'Ext.app.Controller',

  config: {
      profile: Ext.os.deviceType.toLowerCase()
  },


 /*
    refs:[
         {
             selector:'#pageDataview',
             ref:'pageRef'
         },
         {
             selector:'main_menu',
             ref:'mainMenu'
         },
         
     ],*/
 
    init:function(){
        
        console.log('init login controller.');

      
        this.control({
          '#btnLogin':{
							'tap':function(item){
								var loginvw = Ext.getCmp('LoginVW');
								var loginData = loginvw.getValues();
								//913116@pet.com
								var email = loginData.email;
								var pw=loginData.password;
								var hashedPW = CalculateSHA512Hash(email,pw);
								
								Ext.Ajax.request({
									url:'http://staging.wfic.ca/api/AuthService/GenerateAPITokenJson',
									

									jsonData:{
										request:{APIName:"Member Portal",
											BrandId:"61E735F2-E2A1-43A3-9E98-6D69DF303F9D",
											Password:hashedPW,
											UserName:email}
									},
									headers:{
										'Content-Type':'application/json'
									},
									method:'POST',
									success:function(response){
										alert(response.responseText);
									}
									});

								isAuthenticated=true;
               this.changeView('HomeVW');
							 
          	}
					},
					'#btnLoginRegister':{
							'tap':function(item){
								
               this.changeView('RegisterVW');
							 
          	}
					},
					'#btnLoginForgotPassword':{
							'tap':function(item){
							
               this.changeView('ForgotPasswordVW');
							 
          	}
					}

						
        }); //end control

    },
		changeView:function(viewName,direction,data){
			var home;
			home = this.getApplication().getController('Home');
			home.changeView(viewName,direction,data);
		}
});

