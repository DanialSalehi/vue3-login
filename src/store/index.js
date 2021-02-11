import { createStore } from 'vuex';

export default createStore({
  state: {
    jwt: 's',
    stt: 'Home',
    Todos: [
      { user: 'demo', txt: 'demotext', done: false },
      { user: 'demo2', txt: 'demotext', done: false },
      { user: 'demo4', txt: 'demotext', done: false },
      { user: 'demo4', txt: 'demotext', done: false },
      { user: 'demo3', txt: 'demotext', done: false },
      { user: 'demo', txt: 'demotext', done: false }
    ]
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      if (todo.user === '') {
        return false;
      }
      state.Todos.push(todo);
    }
  },
  actions: {
    //may be some axios methods
    createTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    },
    getAllTodos: state => {
      return state.Todos;
    },
    getTodoByUser: state => user => {
      return state.Todos.filter(todo => todo.user === user);
    },
    getUsers(state, getters) {
      let users = [];
      for (let index = 0; index < getters.getAllTodos.length; index++) {
        users[index] = getters.getAllTodos[index].user;
      }
      users = Array.from(new Set(users));
      return users;
    }
  }
});
