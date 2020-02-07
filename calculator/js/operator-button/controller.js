var OperatorButtonController = function(id,value,options){
    ButtonController.call(this, id, value, options);
    var init = function(){

    }
    init();
    return this;
}
OperatorButtonController.prototype = Object.create(ButtonController.prototype);
OperatorButtonController.prototype.constructor = OperatorButtonController;