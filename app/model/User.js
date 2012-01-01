/*
Ext.require('PET.model.Order', function() {

Ext.define('PET.model.User', {
    extend: 'Ext.data.Model',
    id: 'NestedLoadingUsers',
    fields: ['id', 'name'],
    hasMany: {
        model: 'PET.model.Order',
        name: 'orders'
    },
    proxy: {
        type: 'ajax',
        url : 'userData.json'
    }
});

});*/



Ext.require('PET.model.Order', function() {

Ext.define('PET.model.User', {
    extend: 'Ext.data.Model',
    id: 'NestedLoadingUsers',
    fields: ['id', 'name'],
    hasMany: {
        model: 'PET.model.Order',
        name: 'orders'
    },
    proxy: {
        type: 'ajax',
        url : 'userData.json'
    }
});

});

