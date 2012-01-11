var customerInfoData = {
	xtype:'container',
	scrollable:true,
	defaults:{
		xtype:'fieldset'
		
	},
	items:[
	{
		
		title:'Primary Contacts',
		
		items:[
			{
				xtype:'list',
				onItemDisclosure:true,
				store:'CustPrimaryContactST',
				id:'lstPrimaryContact',
				height:46,
				scrollable:false,
				itemTpl:'<b>{contactName}</b>:{contactValue}'
		

			}

		]
	},

	{
		title:'Secondary Contacts',
		items:[
		{
			xtype:'list',
			onItemDisclosure:true,
			store:'CustSecondaryContactST',
			id:'lstSecondaryContact',
			height:46,
			scrollable:false,
			itemTpl:'<b>{contactName}</b>:{contactValue}'
	

		}
		]
		
	},
	{
		title:'Pet Address',
		items:[
		{
			xtype:'list',
			onItemDisclosure:true,
			store:'CustPetAddressST',
			id:'lstPetAddress',
			height:110,
			scrollable:false,
			itemTpl:'<span><b>Street</b>:</span><span> {street}</br>'+ 
			'<span><b>City</b>:</span><span> {city}</br>'+ 
			'<span><b>Province</b>:</span><span> {province}</br>'+ 
			'<span><b>Postal Code</b>:</span><span> {postalCode}</br>'+ 
			'</span>'
	

		}
		
		]
		
	},
	{
		title:'Mailing Address',
		items:[
		{
			xtype:'list',
			onItemDisclosure:true,
			store:'CustMailingAddressST',
			id:'lstMailingAddress',
			height:110,
			scrollable:false,
			itemTpl:'<span><b>Street</b>:</span><span> {street}</br>'+ 
			'<span><b>City</b>:</span><span> {city}</br>'+ 
			'<span><b>Province</b>:</span><span> {province}</br>'+ 
			'<span><b>Postal Code</b>:</span><span> {postalCode}</br>'+ 
			'</span>'
	

		}
		
		]
		
	}


	]
	
};

Ext.define('PET.view.CustInfoVW', {
	id:"CustInfoVW",
    extend: 'Ext.Panel',
		alias: 'widget.CustInfoVW',
    config: {
      fullscreen: true,
			layout:{
				type:'fit'
			},
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Cust Info',
					docked:'top',
					items:[
						{
							ui:'plain',
							iconMask:true,
							xtype:'button',
							iconCls:'reply',
							go:'right_HomeVW'
							
						},
						{
							xtype:'button',
							id:'btnAddContact',
							iconCls: 'add',
			        iconMask: true,
			        ui: 'plain',
							docked:'right',
							handler:function(){
								if(!this.actions){
									this.actions=Ext.create('Ext.ActionSheet',{
										items:[
										{
											text:'Add Primary Contact',
											id:'btnAddPrimaryContact'
										},
										{
											text:'Add Secondary Contact',
											id:'btnAddSecondaryContact'
										},
										{
											text:'Cancel',
											scope:this,
											handler:function(){
												this.actions.hide();
											}
										}
										]
									});

								} //end if
								this.actions.show();
							}
						}

					
					]
				
				},
				customerInfoData,
				toolbarMenu
			]	
   }
});