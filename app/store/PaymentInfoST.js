Ext.define('PET.store.PaymentInfoST',{
	extend:'Ext.data.Store',
	model:'PET.model.PaymentInfoMD',
	autoLoad:true,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/PaymentInfoData.json'
  }
});