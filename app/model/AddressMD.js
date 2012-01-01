Ext.define('PET.model.AddressMD',{
	extend:'Ext.data.Model',
	fields:[
	{name:'street',type:'string'},
	{name:'city',type:'string'},
	{name:'province',type:'string'},
	{name:'postalCode',type:'string'},
	{name:'effectiveDate',type:'date'}
	
	]
});