Ext.define('PET.model.ContactMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'id',type:'int'},
		{name:'ContactType',type:'string'},
		{name:'ContactValue',type:'string'}

		],
		proxy: {
	     type: 'localstorage',
			 id:'primaryContactData'
	     //url : 'app/data/CustomerPrimaryContacts.json'
	  }
	}

});