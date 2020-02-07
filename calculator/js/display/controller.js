var DisplayController = function(id){
    var displayModel;
    var displayView;
    var init = function(){
        displayModel = new DisplayModel(id);
        displayView = new DisplayView(displayModel);
        displayView.addEventListener("keydown" , function(event) {
            if(event.code == 'Enter'){
                this.handleEnterEvent();
            }
        });
    }
    this.getDisplayView = function(){
         return displayView;
    }
    this.handleEnterEvent = function() {

    }
    init();
    return this;
}