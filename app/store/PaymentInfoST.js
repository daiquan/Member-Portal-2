Ext.define('PET.store.PaymentInfoST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.PaymentInfoMD',
		proxy: {
	     type: 'localstorage',
			 id: 'paymentInfoData'
	  }
	}

});