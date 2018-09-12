import Vue from 'vue'
import App from './App.vue'

import Todo from "./models/todo";


Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

var app = new Vue({
  data: {
    todosList: [],
    id: 0
  },
  methods: {
    addTodo: () => {
      
      let todo = new Todo({
        id: this.id++,
        name: this.newTodo,
        starteDate: Date.now(),
        completeDate: null
      });
      this.todosList.push(todo);
    },
    editTodo: (key, editedTodo) => {
      for (let item in this.todosList) {
        if (item.id == key) {
          item.name = editedTodo;
        }
      }
    }
  },
  render: h => h(App)

})

app.$mount('#app')