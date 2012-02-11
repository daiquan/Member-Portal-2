Ext.define('PET.model.ContactMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'id',type:'int'},
		{name:'contactName',type:'string'},
		{name:'contactValue',type:'string'}

		],
		proxy: {
	     type: 'localstorage',
			 id:'primaryContactData'
	     //url : 'app/data/CustomerPrimaryContacts.json'
	  }
	}

});