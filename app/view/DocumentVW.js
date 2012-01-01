Ext.define('PET.view.DocumentVW', {
	id:"DocumentVW",
    extend: 'Ext.Panel',
		alias: 'widget.DocumentVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Document',
					docked:'top'
				
				}
			]		
   }
});