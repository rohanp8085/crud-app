const Todo =  require("../model/todoModels")

const getAllTodos = async (req , res) =>{
   const allTodos = await Todo.find()
    res.json(allTodos)
}

const getTodo = async(req,res) => {
  const newTodo =await Todo.findById(req.params.id)
  res.status(404)
  if(!newTodo){
    throw new Error("todo not found")
  }
  res.json(newTodo)
}

const createTodo = async (req , res)=>{
    const {title , task} = req.body

    
      const newTodo = await Todo.create({title , task}) 
       
      if(!newTodo){
        throw new Error("todo canot be created")
      }
      
      res.json(newTodo)
}

const deleteTodo = async (req,res)=>{
 await Todo.findByIdAndDelete(req.params.id)
    res.json({msg : "todo deleted"})
}

const updateTodo = async (req , res)=>{
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id , req.body )
  if(!updatedTodo){
    throw new Error("can't updated")
  }
    res.json(updatedTodo)
}

module.exports ={updateTodo,getAllTodos , createTodo , deleteTodo, getTodo}