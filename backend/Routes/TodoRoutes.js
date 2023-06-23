const express = require("express")
const { getAllTodos, createTodo,deleteTodo,updateTodo ,getTodo} = require("../controllers/TodoControllers")

const router = express.Router()

router.get("/todos" , getAllTodos) 



router.get("/:id" , getTodo)

router.post("/create" , createTodo )

router.delete("/:id" ,  deleteTodo)

router.put("/:id" , updateTodo )
module.exports = router