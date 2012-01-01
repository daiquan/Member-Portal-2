Ext.define('PET.view.PracticeVW', {
	id:"PracticeVW",
    extend: 'Ext.Panel',
		alias: 'widget.PracticeVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Practice',
					docked:'top'
				
				}
			]		
   }
});