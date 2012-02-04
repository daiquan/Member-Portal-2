Ext.define('PET.store.PracticeST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.PracticeMD',
		//autoSync:true,
		autoLoad:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/PracticeData.json'
	  }
	}
	

});