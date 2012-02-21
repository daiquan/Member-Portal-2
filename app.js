Ext.Loader.setConfig({ enabled: true });


var toolbarMenu = {
	xtype:'toolbar',
	docked:'bottom',
	layout:{
		pack:'center',
		align:'center'
	},
	defaults: {
      //xtype:'button'
			iconMask:true
  },
	items: 
		[
			{
				iconCls:'home',
				title:'Home',
				go:'left_HomeVW'
				
			},
			{
				iconCls:'user',
				title:'Customer Info',
				go:'left_CustInfoVW'
			
				
			},
			{
				iconCls:'credit_card',
				title:'Payment',
				go:'left_PaymentInfoVW'
			},
			{
				iconCls:'dog-paw',
				title:'Pet Info',
				go:'left_PetInfoVW'
			},
			{
				iconCls:'download',
				title:'Document',
				go:'left_DocumentVW'
			},
			{
				iconCls:'compose',
				title:'Claim',
				go:'left_ClaimVW'
			}
		]
	
};

var isAuthenticated=false;
var mpToken = null;

Ext.application({
	name:'PET',
	controllers:['Login','Home','PaymentInfo','PetInfo','Claim','Document'],
	models:['CustInfoMD','AddressMD','ContactMD','PaymentInfoMD','PaymentMethodMD','ClaimFormMD','ClaimMD','CoverageMD','DocumentMD','MicrochipMD','PaymentHistoryMD','PetInfoMD','PolicyDetailMD','PracticeMD','LoginMD','ParamMD'],
	stores:['CustInfoST','CustPrimaryContactST','CustSecondaryContactST','CustPetAddressST','CustMailingAddressST','DocumentST','ClaimST','ClaimFormST','PaymentInfoST','PaymentMethodST','PaymentHistoryST','PetInfoST','MicrochipST','PracticeST','PolicyDetailST','CoverageST','LoginST'],
	views:['HomeVW','EditPrimaryContactVW','EditSecondaryContactVW','EditPetAddressVW','EditMailingAddressVW','PetInfoVW','PolicyVW','PracticeVW','MicrochipVW','EditMicrochipVW','EditPracticeVW','NewPracticeVW','PaymentInfoVW','PaymentHistoryVW','ChangeWithdrawalDayVW','PaymentMethodVW','RegisterVW','LoginVW','ForgotPasswordVW','ChangePasswordVW','DocumentVW','ClaimFormVW','ClaimVW'],

	launch:function(){
		
		console.log('application launched');
	}
});