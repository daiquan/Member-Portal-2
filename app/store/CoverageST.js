Ext.define('PET.store.CoverageST',{
	extend:'Ext.data.Store',
	model:'PET.model.CoverageMD',
	autoLoad:true,
	//autoSync:true,
	proxy: {
     type: 'ajax',
		 //id:'petAddressData'
     url : 'app/data/CoverageData.json',
/*
		 reader: {
		 	type: 'json',
		 	root: 'coverages'
		 }*/

  }
});