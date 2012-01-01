Ext.define('PET.view.ForgotPasswordVW', {
	id:"ForgotPasswordVW",
    extend: 'Ext.Panel',
		alias: 'widget.ForgotPasswordVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Forgot Password',
					docked:'top'
				
				}
			]		
   }
});