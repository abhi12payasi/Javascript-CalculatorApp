var ButtonController = function(id,value,options){
    var buttonModel, buttonView, scope = this;

    var init = function(){
        buttonModel = new ButtonModel(id,value,options);
        buttonView = new ButtonView(buttonModel);
        buttonView.onclick = function(event){
            scope.handleClickEvent(event,id,value);
        }
    }
    this.handleClickEvent = function(event,id,value){

    }
    this.getButtonView = function(){
        return buttonView;
    }
    init();
    return scope;
}