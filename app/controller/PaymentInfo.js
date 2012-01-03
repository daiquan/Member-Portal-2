Ext.define('PET.controller.PaymentInfo',{
    extend:'Ext.app.Controller',
    views:['PaymentInfoVW','PaymentHistoryVW','ChangeWithdrawalDayVW','PaymentMethodVW'],
    stores:['PaymentInfoST','PaymentMethodST','PaymentHistoryST'],
  config: {
      profile: Ext.os.deviceType.toLowerCase()
  },


 /*
    refs:[
         {
             selector:'#pageDataview',
             ref:'pageRef'
         },
         {
             selector:'main_menu',
             ref:'mainMenu'
         },
         
     ],*/
 
    init:function(){
        
        console.log('init home controller.');

      
        this.control({
					'#lstPaymentInfo':{
						'itemtap':function(){
								if(!this.actions){
									this.actions=Ext.create('Ext.ActionSheet',{
										items:[
										{
											text:'Edit Payment Method',
											id:'btnEditPaymentMethod'
										},
										{
											text:'Edit Withdrawal Day',
											id:'btnEditWithdrawalDay'
										},
										{
											text:'Cancel',
											scope:this,
											handler:function(){
												this.actions.hide();
											}
										}
										]
									});

								} //end if
								this.actions.show();
							
						}
					},
					'#btnEditPaymentMethod':{
						'tap':function(){
							var list = Ext.getCmp('lstPaymentInfo');
							var item = list.getActiveItem();
							var record = list.getSelected().items[0].data;
							var paymentMethodId = record.paymentMethodId;
							var paymentMethod = record.paymentMethod;
							var pmStore = this.getPaymentMethodSTStore();
							var recordIndex = pmStore.findExact('id',paymentMethodId)
							var data = pmStore.data.items[recordIndex];
							//create and go to payment method page
							home = this.getController('Home');
							home.changeView('PaymentMethodVW');
							this.actions.hide();
							//bind data to curr payment method card
							var currPaymentCard = Ext.getCmp('fpCurrPaymentMethod');
							currPaymentCard.setRecord(data);

							if(paymentMethod=='Bank'){
								var transitNumber = Ext.getCmp('txtTransitNumber');
								var bankNumber = Ext.getCmp('txtBankNumber');
								transitNumber.setHidden(false);
								bankNumber.setHidden(false);
							}
							if(paymentMethod=='CreditCard'){
								var transitNumber = Ext.getCmp('txtTransitNumber');
								var bankNumber = Ext.getCmp('txtBankNumber');
								transitNumber.setHidden(true);
								bankNumber.setHidden(true);
							}
							
						}
					},

					'#btnEditWithdrawalDay':{
						'tap':function(){
							home = this.getController('Home');
							home.changeView('ChangeWithdrawalDayVW');
							this.actions.hide();
						}
					},
					'#sbtnPaymentInfo':{
						'toggle':function(btn){
							this.goToActivePaymentCard();
						}
					},
					'#btnPaymentMethodSave':{
						'tap':function(){

							//var cards = Ext.getCmp('paymentMethodCards');
							//var pressedBtnText = btn.getPressedButtons()[0].getText();
							if(!this.paymentMethodActions){
								this.paymentMethodActions=Ext.create('Ext.ActionSheet',{
									items:[
									{
										text:'Change for this policy',
										id:'btnChangePolicyPaymentMethod'
									},
									{
										text:'Change for all polices',
										id:'btnChangeAllPoliciesPaymentMethod'
									},
									{
										text:'Cancel',
										scope:this,
										handler:function(){
											this.actions.hide();
										}
									}
									]
								});
							}
							this.paymentMethodActions.show();
						}
					},
					'#btnChangePolicyPaymentMethod':{
						'tap':function(){
							//todo: save payment
							this.changeView('PaymentInfoVW','right');
							this.paymentMethodActions.hide();
						}
					},
					'#btnChangeAllPoliciesPaymentMethod':{
						'tap':function(){
							//todo: save payment
							this.changeView('PaymentInfoVW','right');
							this.paymentMethodActions.hide();
						}
					}


						
        }); //end control
				
    },
		goToActivePaymentCard:function(){
			var cards = Ext.getCmp('paymentMethodCards');
			var pressedBtnText = btn.getPressedButtons()[0].getText();
			if(pressedBtnText== 'New Method')
			{
				cards.setActiveItem(0);
			}
			if(pressedBtnText == 'Current Method')
			{
				cards.setActiveItem(1);
			}
			if(pressedBtnText == 'Other Method')
			{
				cards.setActiveItem(2);
			}
		},
		changeView:function(viewName,direction,data){
			var home;
			home = this.getController('Home');
			home.changeView(viewName,direction,data);
		}
});

