Ext.define('PET.store.ClaimFormST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.ClaimFormMD',
		autoLoad:true,
		//autoSync:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/ClaimFormData.json'
	  }
	}
	

});