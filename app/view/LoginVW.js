Ext.define('PET.view.LoginVW', {
	id:"LoginVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.LoginVW',
    config: {
      fullscreen: true,
			layout:{
				pack:'center',
				align:'center'
			},
			
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Login',
					docked:'top'
				
				},
				{
					xtype:'fieldset',
					title:'Login',
					style:'margin:20px;',
					width:500,
					
					defaults:{
						
						xtype:'textfield'
					},
					items:[
					{
						xtype:'emailfield',
						label:'Email',
						name:'email'
					},
					{

						label:'Password',
						name:'password'
					}

					
					]
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						text:'Register',
						docked:'right',
						id:'btnLoginRegister'
					},
					{
						xtype:'button',
						text:'Forgot Password',
						docked:'left',
						id:'btnLoginForgotPassword'
					}
					]
				},
				{
					xtype:'button',
					text:'Login',
					id:'btnLogin',
					//width:100,
					
					style:'width:200px;margin-right:10px;float:right;'
				}
			]		
   }
});