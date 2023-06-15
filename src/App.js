
function App(){

  return(
    <>
      <Message name="Dipali"/>
      <Message name ="Yamini" age = "27"/>
      <Message id="1" name="Rani" age = "27"/>
    </>
    
  )
}

function Message(para){
  console.log(para);
  return(
    <>

     { /**<h1>Hello {para} </h1> */} 

      <h1>Hello {para.name}</h1>
      <h1>Hello {para.name} {para.age}</h1>
      
    </>
    
  )
}

export default App;
