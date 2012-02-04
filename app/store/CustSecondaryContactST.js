Ext.define('PET.store.CustSecondaryContactST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.ContactMD',
		autoLoad:true,
		//autoSync:true,
		proxy: {
	     //type: 'localstorage',
			type:'ajax',
			 //id:'secondaryContactData'
	     url : 'app/data/CustSecondaryContacts.json'
	  }
	}

});