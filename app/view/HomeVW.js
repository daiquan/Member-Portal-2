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
	
}
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

