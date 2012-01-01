Ext.require(['PET.model.ContactMD','PET.model.AddressMD']);
Ext.define('PET.model.CustInfoMD',{
		extend:'Ext.data.Model',
		fields:[
		{name:'claimPaymentMethod',type:'string'}
		],
		//hasMany:[{model:'PET.model.ContactMD',name:'primaryContacts'},
		//{model:'PET.model.AddressMD',name:'ratingAddress'}]

		//hasMany:{model:'PET.model.ContactMD',name:'secondaryContacts'}

		//hasOne:{model:'PET.model.AddressMD',name:'ratingAddress'},
		//hasOne:{model:'PET.model.AddressMD',name:'mailingAddress'}

    associations: [
        {type: 'hasMany', model: 'PET.model.ContactMD',    name: 'primaryContacts'},
				//{type: 'hasMany', model: 'PET.model.ContactMD',    name: 'secondaryContacts'}
				//{type: 'hasOne', model:'PET.model.AddressMD', name:'ratingAddress'}
				//{type: 'hasOne', model:'PET.model.AddressMD', name:'mailingAddress'}
    ]

});


