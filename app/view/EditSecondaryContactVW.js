
var secondaryContactForm = {

		xtype:'fieldset',
		defaults:{
			labelWidth:'40%'
		},
		items:[
		{
			xtype:'selectfield',
			label:'Type',
			name:'contactName',
			options:[
			{
				text:'Home Phone',
				value:'HomePhone'
			},
			{
				text:'Cell Phone',
				value:'CellPhone'
			},
			{
				text:'Work Phone',
				value:'WorkPhone'
			},
			{
				text:'Fax',
				value:'Fax'
			},
			{
				text:'Email',
				value:'Email'
			}
			]
		},
		{
			xtype:'textfield',
			label:'Contact',
			name:'contactValue'
		}
		
		]
};
Ext.define('PET.view.EditSecondaryContactVW', {
	id:"EditSecondaryContactVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditSecondaryContactVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					id:'scTitle',
					title:'Secondary Contact',
					docked:'top',
					items:[
					{
						xtype:'button',
						text:'back',
						ui:'back',
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
						id:'btnSCDelete',
						ui:'action',
						docked:'left',
						text:'Delete'
					},
					{
						xtype:'button',
						id:'btnSCAction',
						ui:'action',
						docked:'right'
						
					}
					]
				},
				secondaryContactForm
			]		
   }
});