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
				itemTpl:'<b>{ContactType}</b>: {ContactValue}'
		

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
			itemTpl:'<b>{ContactType}</b>:{ContactValue}'
	

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
			itemTpl:'<span><b>Street</b>:</span><span> {Line1}</br>'+ 
			'<span><b>City</b>:</span><span> {City}</br>'+ 
			'<span><b>Province</b>:</span><span> {Region}</br>'+ 
			'<span><b>Postal Code</b>:</span><span> {PostalCode}</br>'+ 
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
			itemTpl:'<span><b>Street</b>:</span><span> {Line1}</br>'+ 
			'<span><b>City</b>:</span><span> {City}</br>'+ 
			'<span><b>Province</b>:</span><span> {Region}</br>'+ 
			'<span><b>Postal Code</b>:</span><span> {PostalCode}</br>'+ 
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
								var action=Ext.Viewport.items.get('AddContactActionSheet');
								if(!action){
									action=Ext.create('Ext.ActionSheet',{
										id:'AddContactActionSheet',
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
												action.hide();
											}
										}
										]
									});
									Ext.Viewport.add(action);

								} //end if
								action.show();
							}
						}

					
					]
				
				},
				customerInfoData,
				toolbarMenu
			]	
   }
});