Ext.Loader.setConfig({ enabled: true });


var toolbarMenu = {
	xtype:'toolbar',
	docked:'bottom',
	layout:{
		pack:'center',
		align:'center'
	},
	defaults: {
      //xtype:'button'
			iconMask:true
  },
	items: 
		[
			{
				iconCls:'home',
				title:'Home',
				go:'left_HomeVW'
				
			},
			{
				iconCls:'user',
				title:'Customer Info',
				go:'left_CustInfoVW'
			
				
			},
			{
				iconCls:'credit_card',
				title:'Payment',
				go:'left_PaymentInfoVW'
			},
			{
				iconCls:'dog-paw',
				title:'Pet Info',
				go:'left_PetInfoVW'
			},
			{
				iconCls:'download',
				title:'Document',
				go:'left_DocumentVW'
			},
			{
				iconCls:'compose',
				title:'Claim',
				go:'left_ClaimVW'
			}
		]
	
};

var isAuthenticated=false;

Ext.application({
	name:'PET',
	controllers:['Home','PaymentInfo','PetInfo','Claim','Document','Login'],
	models:['CustInfoMD','AddressMD','ContactMD'],
	launch:function(){
		
		console.log('application launched');
	}
});