Ext.define('PET.controller.Home',{
    extend:'Ext.app.Controller',
    views:['HomeVW','EditPrimaryContactVW','EditSecondaryContactVW','EditPetAddressVW','EditMailingAddressVW'],
    stores:['CustInfoST','CustPrimaryContactST','CustSecondaryContactST','CustPetAddressST','CustMailingAddressST'],
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
        var _menu=this.getHomeVWView().create();
        
        Ext.Viewport.add(_menu);
      
        this.control({
            '#lstPrimaryContact':{
								'itemtap':function(item){
                 this.changeView('EditPrimaryContactVW','left',item.getSelected().items[0]);
								 
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
						'#btnAddPrimaryContact':{
							'tap':function(){
								Ext.getCmp('btnAddContact').actions.hide();
								

								this.changeView('EditPrimaryContactVW');

							}
						},
						'#btnAddSecondaryContact':{
							'tap':function(){
								Ext.getCmp('btnAddContact').actions.hide();
								

								this.changeView('EditSecondaryContactVW');

							}
						},
						'#EditPrimaryContactVW':{
							'activate':function(){
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
						}

						
        }); //end control
    },
		removeContact:function(contactView){
			var pcontact = Ext.getCmp(contactView);
			var store = contactView=='EditPrimaryContactVW'?this.getCustPrimaryContactSTStore():this.getCustSecondaryContactSTStore();
			var contactListId = contactView=='EditPrimaryContactVW'?'lstPrimaryContact':'lstSecondaryContact';
			var pcList = Ext.getCmp(contactListId);
			store.remove(pcontact.getRecord());

			pcList.refresh();
			this.changeView('CustInfoVW','right');
		
		},
		createContact:function(contactView){
			console.log('tap btnPCAction');
			var pcontact = Ext.getCmp(contactView);
			var store = contactView=='EditPrimaryContactVW'?this.getCustPrimaryContactSTStore():this.getCustSecondaryContactSTStore();
			var contactListId = contactView=='EditPrimaryContactVW'?'lstPrimaryContact':'lstSecondaryContact';
			store.create(pcontact.getValues());
			
			var pcList = Ext.getCmp(contactListId);
			store.load({
	     scope   : this,
	     callback: function(records, operation, success) {
	     //the operation object contains all of the details of the load operation
	     
				pcList.refresh();
				this.changeView('CustInfoVW','right');
				
	     }
	     });
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

			if (model.phantom) {
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
        var getter = 'get'+viewName,
        xtype=viewName.toLowerCase()+'view', 
        card
        if (!this.hasRef(viewName)) {
            this.getView(viewName);
            this.addRef({
			          ref       : viewName,
			          selector  : xtype,
			          xtype     : xtype,
			          autoCreate: true
			      });
            Ext.Viewport.add(card);
						card = this[getter]();
						card.mon(card.el,{
							scope:this,
							
							swipe:function(e){
								if(e.direction=='right'){
									this.changeView('HomeVW',e.direction)
								}
							} //end function
						});
        }
				else{
					card = this[getter]();
				}
				//set default card switch direction to -> left
				if(direction==null)
					direction='left';
 
        Ext.Viewport.getLayout().getAnimation().getOutAnimation()._direction=direction;
        Ext.Viewport.getLayout().getAnimation().getInAnimation()._direction=direction;
        Ext.Viewport.setActiveItem(card);

				if(data!=null){
					card.setRecord(data);
				}
		
    }
});

