Ext.define('PET.view.ClaimVW', {
	id:"ClaimVW",
    extend: 'Ext.Panel',
		alias: 'widget.ClaimVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Claim',
					docked:'top'
				
				}
			]		
   }
});