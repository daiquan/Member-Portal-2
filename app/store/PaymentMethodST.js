Ext.define('PET.store.PaymentMethodST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.PaymentMethodMD',
		autoLoad:true,
		//autoSync:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/PaymentMethodData.json'
	  }
	}

});