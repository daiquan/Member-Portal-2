
Ext.Loader.setConfig({ enabled: true });

Ext.application({
	name:'PET',
	controllers:['Home'],
	models:['CustInfoMD'],
	launch:function(){
		
		console.log('application launched');
	}
});