Ext.define('PET.model.SimpleMD',{
	extend:'Ext.data.Model',
	fields:[
	'field'
	],
	hasMany:{model:'PET.model.SimpleSubMD',name:'subs'}
});

Ext.define('PET.model.SimpleSubMD',{
	extend:'Ext.data.Model',
	fields:[
	'subField'
	],
	belongsTo: 'SimpleMD'
});