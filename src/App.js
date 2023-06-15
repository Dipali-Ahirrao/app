
function App(){

  return(
    <>
      <Message />
    </>
    
  )
}

function Message(){
  let name = "Dipali";
  let list = [ "Delhi", "Nashik", "Mumbai"];

 
  return(
    <>
      <h1>static data (variable) : {name}</h1>

      {/** consumer function */}

      {   list.forEach((item) => 
        item )
      } 
      
      {/** map method is transformer it take input and return output 
       * 
       * output comes in one line there is lack of readiability
      */}

      {
        list.map((item) => item)
      }

      


    </>
    
  )
}

export default App;
