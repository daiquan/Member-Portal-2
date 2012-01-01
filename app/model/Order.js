Ext.require('PET.model.OrderItem', function() {

Ext.define('PET.model.Order', {
    extend: 'Ext.data.Model',
    fields: ['id', 'status'],
    hasMany: {
        model: 'PET.model.OrderItem',
        name: 'orderItems'
    }
});

});
