Current = "0"; 
Operator = "0";
function clearallfield() {
   Current = "0"; 
   Operator = "0";
   Operation = "0"; 
   document.Calculator.Display.value = Current;
}
function clearcurrent()                //CLEAR ENTRY
 { 
  Current = "0";
  document.Calculator.Display.value = Current;
 }
 function square()                //SQUARE ROOT
 { 
  Current = document.Calculator.Display.value = Math.sqrt(Current);
  Operation = "0";                //clear operation
  Operator  = "0";              //clear Operator
 }
function back() {
	len = document.Calculator.Display.value.length;
    if (len == 1)
        {
          cur = document.Calculator.Display.value; 
          Current = cur.substring(0, len -1);
          Current = "0";
          document.Calculator.Display.value = Current;

        }
    else {
        cur = document.Calculator.Display.value; 
    Current = cur.substring(0, len -1);
    document.Calculator.Display.value = Current;

    }

}
function AddNumbers(num)          //ADD A DIGIT TO DISPLAY (kept as 'Current')
 {       
 		
        if ((eval(Current) == 0) && (Current.indexOf(".") == -1))
           { Current = num; }
        else
            Current = Current + num;
   
   document.Calculator.Display.value = Current;
 }

 function Period()                  //PUT IN "." if appropriate.
 {
  if ( Current.length == 0)     //no leading ".", use "0."
    { 
        Current = "0.";
    } 
  else
    {  if ( Current.indexOf(".") == -1)
         { 
            Current = Current + ".";
          };   
    };
  document.Calculator.Display.value = Current;
 }

function Operations(op)            //STORE OPERATION e.g. + * / etc.
 {
  if (op.indexOf("*") > -1) { Operation = 1; };       //codes for *
  if (op.indexOf("/") > -1) { Operation = 2; };       // slash (divide)
  if (op.indexOf("+") > -1) { Operation = 3; };       // sum
  if (op.indexOf("-") > -1) { Operation = 4; };       // difference

  Operator = Current;                 //store value
  Current = "0";                     //or we could use "0"
  document.Calculator.Display.value = Current;
 }

function Calculate()            //PERFORM CALCULATION (= button)
 { 
  if (Operation == 1) { Current = eval(Operator) * eval(Current); };
  if (Operation == 2) { Current = eval(Operator) / eval(Current); };
  if (Operation == 3) { Current = eval(Operator) + eval(Current); };
  if (Operation == 4) { Current = eval(Operator) - eval(Current); };
  Operation = "0";                //clear operation
  Operator  = "0";              //clear Operator
  document.Calculator.Display.value = Current;
 }