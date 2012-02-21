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
				
					width:'95%',
					instructions:'please enter email on file (913116@pet.com)',
					
		/*
					defaults:{
								labelWidth:'40%'
							
							},*/
		
					items:[
					{
						labelWidth:'20%',
						xtype:'emailfield',
						label:'Email',
						name:'email',
						value:'913116@pet.com'
					},
					{
				
						xtype:'passwordfield',
						label:'Password',
						name:'password',
						value:'123456'
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