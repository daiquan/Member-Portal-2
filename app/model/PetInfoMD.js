Ext.define('PET.model.PetInfoMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'dateOfBirth',type:'date'},
		{name:'age',type:'float'},
		{name:'gender',type:'string'},
		{name:'sprayed',type:'string'},
		{name:'petIdentifier',type:'string'},
		{name:'policyNumber',type:'string'},
		{name:'product',type:'string'},
		{name:'effDate',type:'date'},
		{name:'premium',type:'float'},
		{name:'vet',type:'string'},
		{name:'status',type:'string'},
		{name:'petName',type:'string'},
		{name:'breed',type:'string'},
		{name:'image',type:'string'}

		]
	}

});