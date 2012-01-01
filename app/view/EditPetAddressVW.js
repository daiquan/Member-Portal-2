var petAddressForm={
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
Ext.define('PET.view.EditPetAddressVW', {
	id:"EditPetAddressVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditPetAddressVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Pet Address',
					docked:'top',
					items:[{
						xtype:'button',
						text:'back',
						ui:'back',
						go:'right_CustInfoVW'
					}]
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						text:'Check Premium',
						docked:'right'
						
					}
					]
				},
				petAddressForm
			]		
   }
});