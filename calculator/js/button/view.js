var ButtonView = function(model){
       var buttonElement;
       var init = function(){
            createButtonElement();
       }
       var createButtonElement = function() {
            buttonElement = document.createElement("button");
            buttonElement.type = "button";
            buttonElement.innerHTML = model.value;
            buttonElement.id= model.id;
            buttonElement.className = "btn";
//          buttonElement.style.height = model.options.height;
//          buttonElement.style.width = model.options.width;
       }
       init();
       return buttonElement;
}