Ext.define('PET.controller.PetInfo',{
    extend:'Ext.app.Controller',
    views:['PetInfoVW','PolicyVW','PracticeVW','MicrochipVW'],
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
        
        console.log('init home controller.');
        
      
        this.control({


						
        }); //end control
    }
});
