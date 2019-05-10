let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

const mapStateToProps = state => {
  return {
    todos: getVisibilityTodos(state.todos, state.visibilityFilter)
  }
}
