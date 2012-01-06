Ext.define('PET.store.MicrochipST',{
	extend:'Ext.data.Store',
	model:'PET.model.MicrochipMD',
	autoLoad:true,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/MicrochipData.json'
  }
});