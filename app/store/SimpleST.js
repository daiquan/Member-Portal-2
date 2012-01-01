Ext.define('PET.store.SimpleST',{
	extend:'Ext.data.Store',
	model:'PET.model.SimpleMD',
	autoLoad:true,
	data:[
	{
		field:'test field',
		subs:[
		{
			subField:'sub field'
		}
		]
	}
	]

	
});