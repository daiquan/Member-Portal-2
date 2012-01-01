Ext.define('PET.view.RegisterVW', {
	id:"RegisterVW",
    extend: 'Ext.Panel',
		alias: 'widget.RegisterVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Register',
					docked:'top'
				
				}
			]		
   }
});