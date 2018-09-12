<template>
  <div>
    <h1>Todos</h1>
    <input
      autofocus autocomplete="off"
      placeholder="Add new todo"
      v-model="newTodo"
      >
      <button @click="addTodoChild">Click</button>
    <!-- <Todos /> -->
    {{newTodo}}
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: 'Todos',
  data() {
    return {
      newTodo : ''
    }
  },
  methods: {
    addTodoChild: () => {
      console.log(this.newTodo)
      // a.$emit('addTodo', a.newTodo);
    }
  },
  mounted() {
    console.log(this.$emit)
  }
}
</script>
