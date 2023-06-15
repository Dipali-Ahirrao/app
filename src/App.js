
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

      <hr/>
      <h1>static string  and list element</h1>
      {
        list.map((item)=>`Hello ${item} `)
      }

      <hr/>
      <h1>print static string using list iteration  </h1>

      {
        list.map((item)=>"Hello World ")
      }

      <hr/>
      <h1>print static string using list iteration  </h1>

      {
        list.map((item) =>
        (
          <div>
            <span> Hello {item}</span>
          </div>

        ))
      }

      

    </>
    
  )
}

export default App;
