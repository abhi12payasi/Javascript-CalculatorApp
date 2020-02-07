var CalculatorView = function(model,display,numericButtons,operatorButtons){
     var calcView, scope = this;
     var init = function(){
        renderCalculator();
     }

     var renderCalculator = function(){
        calcView = document.createElement("div");
        calcView.id = model.id;
        calcView.className = model.className;
        //display view
        var caption = document.createElement("p");
        caption.innerHTML = "Calculator "+model.id.substring(3,model.id.length);
        caption.style.textAlign = "center";
        calcView.appendChild(caption);

        var displayView = document.createElement("div");
        displayView.appendChild(display);
        calcView.appendChild(displayView);
        //numeric button view
        var numericButtonGroup = document.createElement("div");
        numericButtonGroup.className = "numBtnContainer";
        for(var i=0;i<numericButtons.length;i++){
            numericButtonGroup.appendChild(numericButtons[i]);
        }
        calcView.appendChild(numericButtonGroup);

        //operator button view
        var operatorButtonGroup = document.createElement("div");
        operatorButtonGroup.className = "opBtnContainer";
        for(var i=0;i<operatorButtons.length;i++){
            operatorButtonGroup.appendChild(operatorButtons[i]);
        }
        calcView.appendChild(operatorButtonGroup);
        scope.render();
     }
     this.render = function () {
        document.body.appendChild(calcView);
     }

     init();
     return scope;
}