var NumericButtonController = function(id,value,options){
    ButtonController.call(this, id, value, options);
    var init = function(){
    }
    init();
    return this;
}
NumericButtonController.prototype = Object.create(ButtonController.prototype);
NumericButtonController.prototype.constructor = NumericButtonController;