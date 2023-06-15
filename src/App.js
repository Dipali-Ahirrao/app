
function App(){

  return(
    <>
      <Message name="Dipali"/>
      <Message name ="Yamini" age = "27"/>
      <Message id="1" name="Rani" age = "27"/>
    </>
    
  )
}

function Message({age ,name}){
 
  return(
    <>

     { /**<h1>Hello {para} </h1> */} 

      <h1>Hello {name}</h1>
      <h1>Hello {age}</h1>
      <h1>Hello {name} {age}</h1>
      
    </>
    
  )
}

export default App;
