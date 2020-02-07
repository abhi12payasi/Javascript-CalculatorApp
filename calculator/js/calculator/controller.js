var CalculatorController = function(id,options){
    var calculatorModel, calculatorView, display, numericButtons=[], operatorButtons=[];
    var init = function(){
        renderCalculator(); // "App Initialized:::::::::!!!!"
    }

    var renderCalculator = function(){
        //model
        calculatorModel = new CalculatorModel(id);

        //display
        var displayId= "display"+id;
        //getting display
        display = new DisplayController(displayId).getDisplayView(); //returning display
        //Handling enter event
        display.handleEnterEvent = function() {
            calculate();
        }

        //creating number buttons
        setNumericButtons(calculatorModel);
        //creating operator buttons
        setOperatorButtons(calculatorModel);

        calculatorView = new CalculatorView(calculatorModel, display, numericButtons, operatorButtons);
        //appending calculator to DOM
        calculatorView.render();

    }
    // here i is used for looping and also becoming id of buttons
    var setNumericButtons = function(model) {
        var val, btnId, btnCtl;
        for(var i = 0;i<model.options.numericButtons.length;i++){
            val = model.options.numericButtons[i];
            btnId = "numbtn"+i;
            btnCtl = new NumericButtonController(btnId,val,options);
            var btnElement = btnCtl.getButtonView();
            btnElement.className += " numbtn";
            btnCtl.handleClickEvent = function(event, id, value) {
                if(value!='=') {
                    displayClickedButton(value);
                }
            }
            numericButtons.push(btnElement);
        }
    }
    var setOperatorButtons = function(model) {
        var val, btnId, btnCtl;
        for(var i = 0;i<model.options.operatorButtons.length;i++){
            val = model.options.operatorButtons[i];
            btnId = "opbtn"+val;
            if(val == "reset") val = "C";
            if(val == "back") val = "←";
            btnCtl = new OperatorButtonController(btnId,val,options);
            var btnElement = btnCtl.getButtonView();
            btnElement.className += " opbtn";
            btnCtl.handleClickEvent = function(event, id, value) {
                if(value!='=' && value!='C' && value!='←') {
                    displayClickedButton(value);
                } else if(value == 'C'){ // clear display
                    reset();
                }
                else if(value == '←'){ // one back button
                    back();
                }
                else calculate();
            }
            operatorButtons.push(btnElement);
        }
    }
    var displayClickedButton = function(value) {
        if(display.value!=0){
            display.value += value;
        } else{
            display.value = value;
        }
    }
    var reset = function() {
        display.value = "0";
    }
    var back = function() {
        var expr = display.value;
        display.value = expr.substring(0,expr.length-1);
    }
    var calculate = function(){
        var expr = display.value ;
        var result = eval(expr);
        display.value = result; //expr +" = "+ result;
    }
    init();
    return this;
}