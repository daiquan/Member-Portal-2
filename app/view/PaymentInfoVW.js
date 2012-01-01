Ext.define('PET.view.PaymentInfoVW', {
	id:"PaymentInfoVW",
    extend: 'Ext.Panel',
		alias: 'widget.PaymentInfoVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Payment Info',
					docked:'top'
				
				}
			]		
   }
});