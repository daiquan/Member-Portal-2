Ext.define('PET.store.CustInfoST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.CustInfoMD',
		proxy: {
	     type: 'ajax',
	     url : 'app/data/CustomerInfoData.json'
	  }
	}

});