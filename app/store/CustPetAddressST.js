Ext.define('PET.store.CustPetAddressST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.AddressMD',
		autoLoad:true,
		//autoSync:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/CustPetAddress.json'
	  }
	}

});