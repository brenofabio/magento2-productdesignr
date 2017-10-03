var DD_control_image = DD_Control_Base_Model.extend({
    init: function (obj) {
        this._super(obj);
    },
    _addControls: function () {
        this.addDelete();
        this.addRotate();
        this.addSize();
    },
    
    addDelete: function() {
        var self = this;
        var _delete = this.obj.addDeleteBase();
        _delete.get().on('click', function() {
            self.removeBase();
        });
    },
    
    addRotate: function() {
        var _rotate = this.obj.addRotateBase();
    },
    
    addSize: function() {
        var _size = this.obj.addSizeBase();
    }
});
