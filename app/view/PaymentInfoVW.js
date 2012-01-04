var paymentInfoList={
	xtype:'list',
	id:'lstPaymentInfo',
	store:'PaymentInfoST',
	disableSelection:true,
	itemTpl:
		'<span style="float:left;width:8%"><img src="https://www.petsecure.com/Portal/Content/Petsecure/images/cat.jpg" width="100"/></span>'+
		'<div style="float:left;width:92%;">'+
			'<div style="background:#DFE0E9;line-height:1.8em;" ><h3 style="margin:5px;"><b>{petName} | {breed}</b></h3></div>'+
			
			'<div style="width:45%;float:left;">'+
			'<div style="line-height:1.3em;"><div style="float:left;">Policy #: </div><div style="text-align:left;margin-left:150px">{policyNumber}</div></div>'+
			'<div><div style="float:left;">Current Due:</div><div style="text-align:left;margin-left:150px">{currentDue}</div></div>'+
			'<div><div style="float:left;">Outstanding</div><div style="text-align:left;margin-left:150px">{outstanding}</div></div>'+
			'<div><div style="float:left;">Total Due:</div><div style="text-align:left;margin-left:150px">{totalDue}</div></div>'+
			'</div>'+
			'<div style="width:45%;float:right;">'+
			'<div><div style="float:left;"><b>Next Payment: </b></div><div style="text-align:left;margin-left:150px"><b>{nextPayment}</b></div></div>'+
			'<div><div style="float:left;">Scheduled:</div><div style="text-align:left;margin-left:150px">{scheduled}</div></div>'+
			'<div><div style="float:left;">Method</div><div style="text-align:left;margin-left:150px">{paymentMethod}</div></div>'+
			'<div><div style="float:left;">Withdrawal:</div style="text-align:left;margin-left:150px"><div>{withdrawalDay}</div></div>'+
			'</div>'+
		'</div>'
	
	
}
Ext.define('PET.view.PaymentInfoVW', {
	id:"PaymentInfoVW",
    extend: 'Ext.Panel',
		alias: 'widget.PaymentInfoVW',
    config: {
      fullscreen: true,
			layout:{
				type:'fit'
			},
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Payment Info',
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
					},
					{
						iconCls:'search',
						go:'left_PaymentHistoryVW',
						docked:'right'
					}
					
					]
				
				},
				paymentInfoList
			]		
   }
});