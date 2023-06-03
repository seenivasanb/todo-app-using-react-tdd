import { redirect, Link } from "react-router-dom";

const PlusStickButtonComponent = () => {
  const redirectToHome = () => {    
    console.log("Open Add Todo");
    redirect("/addtodo")
  }

  return (
    <Link to={"/addTodo"}>
      <button 
      className="absolute grid bottom-4 right-4 bg-teal-500 text-white text-4xl w-12 h-12 rounded-full"
      onClick={redirectToHome}
      >+</button>
    </Link>
  )
}

export default PlusStickButtonComponent