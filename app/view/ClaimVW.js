Ext.define('PET.view.ClaimVW', {
	id:"ClaimVW",
    extend: 'Ext.Panel',
		alias: 'widget.ClaimVW',
    config: {
      fullscreen: true,
			layout:'fit',
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Claim',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_HomeVW'
					}
					]
				
				},
				{
					xtype:'list',
					id:'lstClaim',
					store:'ClaimST',
					plugins: [new Ext.plugin.PullRefresh()],
					itemTpl:'{claimNumber} - {petName} - {received} - {claimAmount} - {paidAmount} - {status}'
				},
				toolbarMenu
			]		
   }
});