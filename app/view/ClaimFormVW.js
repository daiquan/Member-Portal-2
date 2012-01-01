Ext.define('PET.view.ClaimFormVW', {
	id:"ClaimFormVW",
    extend: 'Ext.Panel',
		alias: 'widget.ClaimFormVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Claim Form',
					docked:'top'
				
				}
			]		
   }
});