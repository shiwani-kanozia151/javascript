// +++++++++++++++++++++++++++++ JS EXECUTION CONTEXT +++++++++++++++++++++++++++++++++++++++++++

// BROWSER AND NODE JS SABKA EXCUTION CONTEXT THODA DIFFERENT HOTA HAI.. *******************


/*

 1. GLOBAL EXECUTION CONTEXT(this)
 2. FUNCTIONAL EXECUTION CONTEXT
 3. EVAL EXECUTION CONTEXT


 CODE --> EXECUTE IN 2 PHASE 
 1. Memory creation phase
 2. execution phase

 let val1 = 10
 let val2 = 5
 function addNum(num1, num2){
  let total = num1+num2
  return total
 }

let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

***************** understanding how this code executes in javascript **************************************
1. global execution  ---> (this) total = 15 yha pe return hoga
2. Memory Phase
 val1 = undefined
 val2 = undefined
 addNum = definition(all content of that function)
 result1 = undefined
 result2 = undefined

3. Execution Phase
  val1 =10
  val2 = 5
  result1 --> addNum (new variable env + execution thread pura new box hoga yha again memory phase and execution phase hoga)
                memory phase                execution context
                 val1=undefined              val1 = 10,
                 val2=undefined              val2 = 5 
                 total=undefined             num1 = 10
                                             num2 = 5
                                             total = 15

                now this execution phase delete ho jaega memory se..
    
                
   result2 -->addNum(new env + execution thread banega )             
                       
   

*********************** CALL STACK *********************************
 

 */