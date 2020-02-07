var DisplayView = function(model){
    var displayElement;
    var init = function(){
        createDisplayElement();
    }
    var createDisplayElement = function(){
        displayElement = document.createElement("input");
        displayElement.type= "text";
        displayElement.value = "0";
//        displayElement.style.width = model.options.width;
//        displayElement.style.height = model.options.height;

        displayElement.className = model.className;
        displayElement.id = model.id;
    }
    init();
    return displayElement;
}