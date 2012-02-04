Ext.define('PET.store.PolicyDetailST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.PolicyDetailMD',
		autoLoad:true,
		//autoSync:true,
		proxy: {
	     type: 'ajax',
			 //id:'petAddressData'
	     url : 'app/data/PolicyDetailData.json'
	  }
	}
	
	

});