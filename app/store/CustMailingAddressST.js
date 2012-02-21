Ext.define('PET.store.CustMailingAddressST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.AddressMD',
		autoLoad:true,
		//autoSync:true,
		proxy: {
	     type: 'localstorage',
			 id:'mailingAddressData'
	     //url : 'app/data/CustomerPrimaryContacts.json'
	  }
	}

});