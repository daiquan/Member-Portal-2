Ext.define('PET.view.PaymentMethodVW', {
	id:"PaymentMethodVW",
    extend: 'Ext.Panel',
		alias: 'widget.PaymentMethodVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Payment Method',
					docked:'top'
				
				}
			]		
   }
});