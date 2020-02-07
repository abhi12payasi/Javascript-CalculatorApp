var CalculatorModel = function(id){
       this.id = "cal"+id;
       this.className = "cal";
       this.options = {
            type: 'Basic',
            numericButtons: [7,8,9,4,5,6,1,2,3,"00",0] ,
            operatorButtons: [ "+","-","*","/","reset","back",".","="]
       }
}