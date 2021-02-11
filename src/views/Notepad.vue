<template>
  <div class="row">
    <div class="column">
      <div>
        <input
          class="textaria"
          v-model="todo.user"
          type="text"
          cols="70"
          placeholder="Name"
          multi-line
        />
      </div>
      <br />
      <textarea
        class="textaria"
        v-model="todo.txt"
        rows="4"
        cols="70"
        placeholder="text..."
        multi-line
      />
      <div><h4 class="button2" @click="addTodo">Add note</h4></div>
      <br />
      <br />
      <br />
      <div>
        <h3 class="button" @click="filterTodos('0')">All</h3>
        <h3
          v-for="(user, index) in getUsers"
          :key="index"
          class=" button"
          @click="filterTodos(user)"
        >
          {{ user }}
        </h3>
      </div>
    </div>
    <div class="column">
      <div>
        <div class="card" v-for="(todo, index) in todos" :key="index">
          <div class="container">
            <h4>
              <b>{{ todo.user }}</b>
            </h4>
            <p>{{ todo.txt }}</p>

            <span :style="{ color: todo.done ? 'green' : 'red' }">
              {{ todo.done ? 'done' : 'undone' }}
            </span>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.todos = this.getAllTodos;
    console.log(this.getAllTodos);
  },
  data() {
    return {
      todo: {
        user: '',
        txt: 'text...'
      },
      todos: [],
      rawHtml: '<span style="color: red">undone</span>'
    };
  },

  computed: { ...mapGetters(['getAllTodos', 'getTodoByUser', 'getUsers']) },
  methods: {
    filterTodos(user) {
      if (user !== '0') {
        this.todos = this.getTodoByUser(user);
        console.log(this.getTodoByUser(user));
      } else {
        this.todos = this.getAllTodos;
      }
    },
    addTodo() {
      this.$store.dispatch('createTodo', this.todo);
    }
  }
};
</script>

<style scoped>
.button {
  border-radius: 20px 0px 0px 20px;
  border: 1px solid #2b64ff;
  background-color: #2b87ff;
  color: #ffffff;
  font-size: 12px;
  width: 68%;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* transition: transform 80ms ease-in; */
}
.button2 {
  border-radius: 10px;
  border: 1px solid #ff8a2b;
  background-color: #ff2b2b;
  color: #ffffff;
  font-size: 12px;
  margin-left: 10%;
  width: 60%;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
.card {
  margin: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.textaria {
  padding: 7px;
  width: 68%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 13px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.column {
  float: left;
  width: 33.33%;
  margin-left: 10%;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
</style>
