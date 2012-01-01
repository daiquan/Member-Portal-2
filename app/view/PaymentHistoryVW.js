Ext.define('PET.view.PaymentHistoryVW', {
	id:"PaymentHistoryVW",
    extend: 'Ext.Panel',
		alias: 'widget.PaymentHistoryVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Payment History',
					docked:'top'
				
				}
			]		
   }
});