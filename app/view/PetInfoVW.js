var petInfoList={
	xtype:'list',
	id:'lstPetInfo',
	store:'PetInfoST',
	disableSelection:true,
	itemTpl:
		'<span style="float:left;width:8%;margin-top:10px;"><img src="https://www.petsecure.com/Portal/Content/Petsecure/images/cat.jpg" width="100"/></span>'+
		'<div style="float:left;width:92%;">'+
			'<div style="background:#DFE0E9;line-height:1.8em;" ><h3 style="margin:10px;"><b>{petName} | {breed}</b></h3></div>'+
			
			'<div style="width:45%;float:left;">'+
			'<div style="line-height:1.3em;"><div style="float:left;">Date of Birth: </div><div style="text-align:left;margin-left:150px">{dateOfBirth}</div></div>'+
			'<div><div style="float:left;">Age:</div><div style="text-align:left;margin-left:150px">{age}</div></div>'+
			'<div><div style="float:left;">Gender:</div><div style="text-align:left;margin-left:150px">{gender}</div></div>'+
			'<div><div style="float:left;">Sprayed/Neutered:</div><div style="text-align:left;margin-left:150px">{sprayed}</div></div>'+
			'<div><div style="float:left;">Pet Identifier:</div><div style="text-align:left;margin-left:150px">{petIdentifier}</div></div>'+
			'</div>'+
			'<div style="width:45%;float:right">'+
			'<div><div style="float:left;"><b>Policy #: </b></div><div style="text-align:left;margin-left:150px"><b>{policyNumber}</b></div></div>'+
			'<div><div style="float:left;">Product:</div><div style="text-align:left;margin-left:150px">{product}</div></div>'+
			'<div><div style="float:left;">Eff Date:</div><div style="text-align:left;margin-left:150px">{effDate}</div></div>'+
'<div><div style="float:left;">Status:</div><div style="text-align:left;margin-left:150px">{status}</div></div>'+
			'<div><div style="float:left;">Monthly Premium:</div style="text-align:left;margin-left:150px"><div>{premium}</div></div>'+
			'</div>'+
		'</div>'
	
	
}
Ext.define('PET.view.PetInfoVW', {
	id:"PetInfoVW",
    extend: 'Ext.Panel',
		alias: 'widget.PetInfoVW',
    config: {
      fullscreen: true,
			layout:{
				type:'fit'
			},
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Pet Info',
					docked:'top',
					defaults:{
						ui:'plain',
						iconMask:true,
						xtype:'button'
					},
					items:[
					{
						
						iconCls:'reply',
						go:'right_HomeVW',
						docked:'left'
					}
					
					]
				
				},
				petInfoList
			]		
   }
});