var mailingAddressForm={
	xtype:'fieldset',
	defaults:{
		xtype:'textfield',
		labelWidth:'40%'
	},
	items:[
	{
		label:'Street',
		name:'street'
	},
	{
		label:'City',
		name:'city'
	},
	{
		xtype:'selectfield',
		label:'Province',
		name:'province',
		options:[
		{
			text:'BC',value:'BC'
		},
		{
			text:'MB',value:'MB'
		},
		{
			text:'ON',value:'ON'
		}
		]
	},
	{
		label:'Postal Code',
		name:'postalCode'
	},
	{
		xtype:'datepickerfield',
		label:'Effective on',
		name:'effectiveDate',
		value:new Date()
	}
	]
};
Ext.define('PET.view.EditMailingAddressVW', {
	id:"EditMailingAddressVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditMailingAddressVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Mailing Address',
					docked:'top',
					items:[
					{
						
							ui:'plain',
							iconMask:true,
							xtype:'button',
							iconCls:'reply',
						
						go:'right_CustInfoVW'
					}
					]
					
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						text:'Save',
						docked:'right'
						
					}
					]
				},
				mailingAddressForm
			]		
   }
});