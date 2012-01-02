Ext.define('PET.controller.PaymentInfo',{
    extend:'Ext.app.Controller',
    views:['PaymentInfoVW','PaymentHistoryVW','ChangeWithdrawalDayVW','PaymentMethodVW'],
    stores:['PaymentInfoST'],
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

