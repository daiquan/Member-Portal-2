Ext.define('PET.store.PetInfoST',{
	extend:'Ext.data.Store',
	model:'PET.model.PetInfoMD',
	autoLoad:true,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/PetInfoData.json'
  }
});