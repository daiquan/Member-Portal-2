var menu={
	xtype:'container',
	layout:{
		type:'hbox'
	},
	
	defaults:{
		xtype:'button',
		width:100,
		height:100,
		style:'margin:20px;'
	},
	items:[
	{
		id: 'btnCustomerInfo',
		text:'Cust Info',
		go:'left_CustInfoVW'
   },
  {
		id: 'btnPaymentInfo',
		text:'Payment Info',
		go:'left_PaymentInfoVW'
   },
  {
		id: 'btnPetInfo',
		text:'Pet Info',
		go:'left_PetInfoVW'
   },
  {
		id: 'btnClaim',
		text:'Calim',
		go:'left_ClaimVW'
   },
  {
		id: 'btnDocument',
		text:'Document',
		go:'left_DocumentVW'
   },
  {
		id: 'btnAddPetQuote',
		text:'Add Pet',
		go:'left_AddPetQuoteVW'
   }
	]
	
	
};


Ext.define('PET.view.HomeVW', {
	id:"HomeVW",
    extend: 'Ext.Panel',
		alias: 'widget.HomeVW',
    config: {
      fullscreen: true,
/*
      layout: {
				type: 'card',
				animation: {
					type: 'slide',
					direction: 'left'
				}
			},*/

/*
		tabBar:{
			layout:{
				pack:'center',
				align:'center'
			},
			docked:'bottom',
			scrollable:{
				direction:'horizontal'
				//indicators:true
			}
		},*/


 	   items: 
			[
		
				{
					xtype:'toolbar',
					title:'Home',
					docked:'top'
				
				},
				toolbarMenu
				
			]		
   }
});

