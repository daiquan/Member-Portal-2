Ext.define('PET.controller.PetInfo',{
    extend:'Ext.app.Controller',
    views:['PetInfoVW','PolicyVW','PracticeVW','MicrochipVW'],
    stores:['PetInfoST'],
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
        
        console.log('init pet info controller.');
        
      
        this.control({
					'#lstPetInfo':{
						'itemtap':function(){
								if(!this.actions){
									this.actions=Ext.create('Ext.ActionSheet',{
										
										items:[
										{
											text:'Policy Detail',
											id:'btnPetDetail',
											go:'left_PolicyVW'
										},
										{
											text:'Pet Claim',
											id:'btnPetClaim',
											go:'left_ClaimVW'
										},
										{
											text:'Pet Practice',
											id:'btnPetPractice',
											go:'left_PracticeVW'
										},
										{
											text:'Pet Microchip',
											id:'btnPetMicrochip',
											go:'left_MicrochipVW'
										},
										{
											text:'Cancel',
											scope:this,
											ui:'confirm',
											handler:function(){
												this.actions.hide();
											}
										}
										]
									});

								} //end if
								this.actions.show();
							
						}
					},
					'#btnPetDetail':{
						'tap':function(){
							this.actions.hide();
						}
					},
					'#btnPetClaim':{
						'tap':function(){
							this.changeView('ClaimVW');
							this.actions.hide();
						}
					},
					'#btnPetPractice':{
						'tap':function(){
							this.actions.hide();
						}
					},
					'#btnPetMicrochip':{
						'tap':function(){
							this.actions.hide();
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

