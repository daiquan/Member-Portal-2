Ext.define('PET.store.PaymentHistoryST',{
	extend:'Ext.data.Store',
	model:'PET.model.PaymentHistoryMD',
	autoLoad:false,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/PaymentHistoryData.json'
  }
});