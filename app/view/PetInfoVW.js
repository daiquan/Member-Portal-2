Ext.define('PET.view.PetInfoVW', {
	id:"PetInfoVW",
    extend: 'Ext.Panel',
		alias: 'widget.PetInfoVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Pet Info',
					docked:'top'
				
				}
			]		
   }
});