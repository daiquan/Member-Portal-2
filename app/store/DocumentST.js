Ext.define('PET.store.DocumentST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.DocumentMD',
		autoLoad:false,
		//autoSync:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/DocumentData.json'
	  }
	}


});