Ext.define('PET.view.LoginVW', {
	id:"LoginVW",
    extend: 'Ext.Panel',
		alias: 'widget.LoginVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Login',
					docked:'top'
				
				}
			]		
   }
});