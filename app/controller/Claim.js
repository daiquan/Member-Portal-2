Ext.define('PET.controller.Claim',{
    extend:'Ext.app.Controller',
    views:['ClaimFormVW','ClaimVW'],
    stores:['ClaimST','ClaimFormST'],
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
        
        console.log('init home controller.');

      
        this.control({


						
        }); //end control
    }
});

