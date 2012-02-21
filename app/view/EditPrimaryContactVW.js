
var primaryContactForm = {

		xtype:'fieldset',
		defaults:{
			labelWidth:'40%'
		},
		items:[
		{
			xtype:'selectfield',
			label:'Type',
			name:'ContactType',
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
			name:'ContactValue'
		}
		
		]
};
Ext.define('PET.view.EditPrimaryContactVW', {
	id:"EditPrimaryContactVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditPrimaryContactVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					id:'pcTitle',
					title:'Primary Contact',
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
						id:'btnPCDelete',
						ui:'action',
						docked:'left',
						text:'Delete'
					},
					{
						xtype:'button',
						id:'btnPCAction',
						ui:'action',
						docked:'right'
						
					}
					]
				},
				primaryContactForm
			]		
   }
});