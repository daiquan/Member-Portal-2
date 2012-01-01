Ext.define('PET.view.PolicyVW', {
	id:"PolicyVW",
    extend: 'Ext.Panel',
		alias: 'widget.PolicyVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Policy',
					docked:'top'
				
				}
			]		
   }
});