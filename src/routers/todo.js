
const IndexPage = () => import("../pages/todo/IndexPage.vue")
const TodoListPage = () => import("../pages/todo/TodoListPage.vue")
const TodoAddPage = () => import("../pages/todo/TodoAddPage.vue")
const TodoReadPage = () => import("../pages/todo/TodoReadPage.vue")
const TodoEditPage = () => import("../pages/todo/TodoEditPage.vue")



const todoRouting = { path: "/todo", 
  component: IndexPage,
  children: [
    {path: "list", component: TodoListPage},
    {path: "", redirect: '/todo/list'},
    {path: "read/:mno", component: TodoReadPage},
    {path: "edit/:mno", component: TodoEditPage},
    { path: "add", component: TodoAddPage},
  ]
}

export default todoRouting