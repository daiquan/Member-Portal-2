var paymentHistoryList={
	id:'paymentHistoryList',
	cls: 'timeline',
	xtype:'list',

/*
	plugins: [
	{ptype:'pullrefresh'}
  ],*/
  plugins: [new Ext.plugin.PullRefresh()],

	store:'PaymentHistoryST',
	itemTpl:'{date} - {policy} - {paymentMethod} - {amount} - {status}'
};

Ext.define('PET.view.PaymentHistoryVW', {
	id:"PaymentHistoryVW",
    extend: 'Ext.Panel',
		alias: 'widget.PaymentHistoryVW',
    config: {
      fullscreen: true,
			layout:{
				type:'fit'
			},
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Payment History',
					docked:'top'
				
				},
				paymentHistoryList
			]		
   }
});