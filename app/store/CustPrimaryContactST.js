Ext.define('PET.store.CustPrimaryContactST',{
	extend:'Ext.data.Store',
	model:'PET.model.ContactMD',
	autoLoad:true,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'primaryContactData'
     url : 'app/data/CustomerPrimaryContacts.json'
  }
});