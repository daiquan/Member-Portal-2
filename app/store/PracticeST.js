Ext.define('PET.store.PracticeST',{
	extend:'Ext.data.Store',
	model:'PET.model.PracticeMD',
	autoLoad:true,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/PracticeData.json'
  }
});