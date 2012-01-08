Ext.define('PET.store.ClaimST',{
	extend:'Ext.data.Store',
	model:'PET.model.ClaimMD',
	autoLoad:false,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/ClaimData.json'
  }
});