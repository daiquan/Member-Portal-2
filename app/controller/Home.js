Ext.define('PET.controller.Home',{
    extend:'Ext.app.Controller',
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
				Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide',direction:'left'}});
				
				var landingPage;
				//isAuthenticated=true;
        if(isAuthenticated){
					
					var landingPage=Ext.create('PET.view.HomeVW');
				}
				else{
					//var landingPage = this.createView('HomeVW');
					//console.log(app);
					
					var landingPage=Ext.create('PET.view.LoginVW');
				}
        
       
        
        Ext.Viewport.add(landingPage);
      
        this.control({
						'#CustInfoVW':{
							'activate':function(){
								//var tokenParam = Ext.create('ParamMD',{name:'htoken',value:mpToken});
								this.callAPIService('GET','MemberPortalService','GetCustomerInfo',{htoken:mpToken,returnType:'json'},function(response){
									console.log('get customer info result:')
									console.log(response);
									if(response.GetCustomerInfoResult.ResponseMessageHeader.IsSuccess)
									{
										var customerInfoData = response.GetCustomerInfoResult.ResponseMessageBody.MessageBody[0];
										var pstore =Ext.getStore('CustPrimaryContactST'); 
										var sstore = Ext.getStore('CustSecondaryContactST');
										var pastore =Ext.getStore('CustPetAddressST'); 
										var mastore = Ext.getStore('CustMailingAddressST'); 
										var lstP = Ext.getCmp('lstPrimaryContact');
										var lstS = Ext.getCmp('lstSecondaryContact');
										var lstPA = Ext.getCmp('lstPetAddress');
										var lstMA = Ext.getCmp('lstMailingAddress');
										pstore.setData(customerInfoData.PrimaryContacts);
										sstore.setData(customerInfoData.SecondaryContacts);
										pastore.setData(customerInfoData.RatingAddress);
										mastore.setData(customerInfoData.MailingAddress);
										
										//pstore.setData({contactType:'HomePhone',contactValue:'2041234567'});
										lstP.setHeight(pstore.data.length*46);
										lstS.setHeight(sstore.data.length*46);
										lstP.refresh();
										lstS.refresh();
										lstPA.refresh();
										lstMA.refresh();
										
									}
									else{
										alert('Error: can not load customer info.');
									}
								});
							}
							
						},

            '#lstPrimaryContact':{
								'itemtap':function(item){
									var data=item.getSelected().items[0];
									
                 this.changeView('EditPrimaryContactVW','left',data);
								 
            	}
						},
						'#lstSecondaryContact':{
								'itemtap':function(item){
                 this.changeView('EditSecondaryContactVW','left',item.getSelected().items[0]);
								 
            	}
						},
						'#lstPetAddress':{
								'itemtap':function(item){
                 this.changeView('EditPetAddressVW','left',item.getSelected().items[0]);
								 
            	}
						},
						'#lstMailingAddress':{
								'itemtap':function(item){
                 this.changeView('EditMailingAddressVW','left',item.getSelected().items[0]);
								 
            	}
						},
            'button[go]':{'tap':function(btn){
                var direction = btn.go.split('_')[0];
                var viewName = btn.go.split('_')[1];
                this.changeView(viewName,direction)

                }
            },
            'tab[go]':{'select':function(btn){
                var direction = btn.go.split('_')[0];
                var viewName = btn.go.split('_')[1];
                this.changeView(viewName,direction)

                }
            },
						'#btnAddPrimaryContact':{
							'tap':function(){
								//Ext.getCmp('btnAddContact').actions.hide();
								Ext.Viewport.items.get('AddContactActionSheet').hide();

								this.changeView('EditPrimaryContactVW');

							}
						},
						'#btnAddSecondaryContact':{
							'tap':function(){
								Ext.Viewport.items.get('AddContactActionSheet').hide();
								

								this.changeView('EditSecondaryContactVW');

							}
						},

						'#EditPrimaryContactVW':{
  
							'activate':function(){
								var actionSheet = Ext.Viewport.items.get('AddContactActionSheet');
								if(actionSheet!=null)
								{
									actionSheet.hide();
								}
								
								this.activateContact('EditPrimaryContactVW');
								
							},  


         
							'deactivate':function()
							{
								var pcontact = Ext.getCmp('EditPrimaryContactVW');
								pcontact.reset();
							}
						},

						'#EditSecondaryContactVW':{
							'activate':function(){
								Ext.Viewport.items.get('AddContactActionSheet').hide();
									this.activateContact('EditSecondaryContactVW');
							},
							'deactivate':function()
							{
								var pcontact = Ext.getCmp('EditSecondaryContactVW');
								pcontact.reset();
							}
						},
						'#btnPCAction':{
							'tap':function(){
								this.createContact('EditPrimaryContactVW');
							}
						},
						'#btnSCAction':{
							'tap':function(){
								this.createContact('EditSecondaryContactVW');
							}
						},
						'#btnPCDelete':{
							'tap':function(){
								this.removeContact('EditPrimaryContactVW');
							}
						},

						'#btnSCDelete':{
							'tap':function(){
								this.removeContact('EditSecondaryContactVW');
							}
						},
						'#tabCustomerInfo':{
							'select':function(){
								this.changeView('CustInfoVW')
							}
						}

						
        }); //end control
    },
		removeContact:function(contactView){
			var pcontact = Ext.getCmp(contactView);
			var store = contactView=='EditPrimaryContactVW'?Ext.getStore('CustPrimaryContactST'):Ext.getStore('CustSecondaryContactST');
			var contactListId = contactView=='EditPrimaryContactVW'?'lstPrimaryContact':'lstSecondaryContact';
			var pcList = Ext.getCmp(contactListId);
			store.remove(pcontact.getRecord());
			store.sync();
			pcList.refresh();
			this.changeView('CustInfoVW','right');
		
		},
		createContact:function(contactView){
			console.log('tap btnPCAction');
			var pcontact = Ext.getCmp(contactView);
			var store = contactView=='EditPrimaryContactVW'?Ext.getStore('CustPrimaryContactST'):Ext.getStore('CustSecondaryContactST');
			var contactListId = contactView=='EditPrimaryContactVW'?'lstPrimaryContact':'lstSecondaryContact';
			store.add(pcontact.getValues());
			store.sync();
/*			var pcList = Ext.getCmp(contactListId);

			store.load({
	     scope   : this,
	     callback: function(records, operation, success) {
	     //the operation object contains all of the details of the load operation
	     
				pcList.refresh();
				
				
	     }
	     });*/

			this.changeView('CustInfoVW','right');
		},
		activateContact:function(contactView){
			
			var btnId=contactView=='EditPrimaryContactVW'?'btnPCAction':'btnSCAction';
			var titleBarId = contactView=='EditPrimaryContactVW'?'pcTitle':'scTitle';
			var titleText = contactView=='EditPrimaryContactVW'?'Primary':'Secondary';
			var pcontact = Ext.getCmp(contactView);

			var model=pcontact.getRecord();
			
			
			
			if(model==null)
			{
				var newModel = Ext.create('PET.model.ContactMD');
				pcontact.load(newModel);
				model=pcontact.getRecord();
			}

			if (!model.phantom) {
          Ext.getCmp(titleBarId).setTitle('Create '+titleText+' Contact');
          Ext.getCmp(btnId).setText('Create');
          //deleteButton.hide();
      } else {
        Ext.getCmp(titleBarId).setTitle('Update '+titleText+' Contact');
        Ext.getCmp(btnId).setText('Update');
          //deleteButton.show();
      }
		},
    changeView: function(viewName,direction,data) {  
	     	var activeItem = Ext.Viewport.getActiveItem();
        var card;

					if(direction==null)
						direction='left';

	       Ext.Viewport.getLayout().getAnimation().getOutAnimation().setDirection(direction);
				Ext.Viewport.getLayout().getAnimation().getInAnimation().setDirection(direction);
				this.getEventDispatcher().addListener('element', '#'+viewName, 'swipe', this.onTouchPadEvent, this);

				historyItem=Ext.Viewport.items.get(viewName);
				if(historyItem!=null)
				{
					
					card=historyItem;
				}
				else{
					card = Ext.create('PET.view.'+viewName);
					Ext.Viewport.add(card);
				}
				Ext.Viewport.setActiveItem(card);
				
				if(data!=null){
					
					card.setRecord(data);
					
				}
				//set default card switch direction to -> left

        //Ext.Viewport.getLayout().getAnimation().getOutAnimation()._direction=direction;
               //Ext.Viewport.getLayout().getAnimation().getInAnimation()._direction=direction;
       

				if(direction == 'left'){
						previewsView.push(activeItem.getItemId());
				}
		
    },
    onTouchPadEvent: function(e, target, options, eventController) {
        var eventName = eventController.info.eventName;
 				if(e.direction == 'right'){
					this.changeView(previewsView.pop(),'right');
				}
				
    },
		callAPIService:function(httpMethod,serviceName,methodName,params,successFnc){

			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'please wait...'
			});
			
			if(httpMethod == 'POST')
			{
				Ext.Ajax.request({
					url:'http://staging.wfic.ca/api/'+serviceName+'/'+methodName,
					jsonData:{
						request:params
					},
					headers:{
						'Content-Type':'application/json'
					},
					method:'POST',
					scope:this,
					success:function(response){
						Ext.Viewport.setMasked(false);
						var resultObj = eval("("+response.responseText+")");
						successFnc(resultObj,this);
					}
					});
			}
			if(httpMethod == 'GET')
			{
				Ext.Ajax.request({
					url:'http://staging.wfic.ca/api/'+serviceName+'/'+methodName,
					params:params,
					headers:{
						'Content-Type':'application/json'
					},
					method:'GET',
					scope:this,
					success:function(response){
						Ext.Viewport.setMasked(false);
						var resultObj = eval("("+response.responseText+")");
						successFnc(resultObj,this);
					}
					});
			}

		}
});
var previewsView = [];
