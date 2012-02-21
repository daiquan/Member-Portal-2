Ext.define('PET.store.CustInfoST',{
	extend:'Ext.data.Store',
	config:{
		model:'PET.model.CustInfoMD',
		proxy: {
	     type: 'rest',
	     url : 'http://staging.wfic.ca/api/MemberPortalService/GetCustomerInfo'
	  }
	}

});