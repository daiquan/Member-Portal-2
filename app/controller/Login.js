Ext.define('PET.controller.Login',{
    extend:'Ext.app.Controller',
    views:['RegisterVW','LoginVW','ForgotPasswordVW','ChangePasswordVW'],
    stores:[],
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
			home = this.getController('Home');
			home.changeView(viewName,direction,data);
		}
});

