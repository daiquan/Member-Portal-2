Ext.define('PET.store.PaymentHistoryST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.PaymentHistoryMD',
		autoLoad:false,
		//autoSync:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/PaymentHistoryData.json'
	  }
	}

});