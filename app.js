
Ext.Loader.setConfig({ enabled: true });

Ext.application({
	name:'PET',
	controllers:['Home','PaymentInfo','PetInfo','Claim','Document'],
	models:['CustInfoMD','AddressMD','ContactMD'],
	launch:function(){
		
		console.log('application launched');
	}
});