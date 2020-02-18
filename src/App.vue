<template>
  <div id="app" class="flex min-h-screen pt-20 pb-32 bg-gray-200">
    <div class="flex w-full justify-center">
      <div
        class="bg-white w-full mx-8 pt-8 shadow-md rounded-xl pb-10 lg:w-1/4 lg:mx-0"
      >
        <div class="flex flex-col">
          <div class="text-center text-4xl uppercase font-bold tracking-wide">
            mis tareas
          </div>
          <!-- Add ToDo -->
          <form class="mx-8 mt-8" @submit.prevent.enter="add">
            <input
              id="addTodoInput"
              ref="addTodoInput"
              autofocus
              v-model="description"
              class="w-full py-4 border rounded px-2 border-blue-700 focus:outline-none focus:border-blue-500"
              type="text"
            />
            <div class="flex justify-center w-full">
              <button
                id="addTodoBtn"
                class="shadow-lg bg-purple-700 text-white rounded-full py-3 px-8 mt-3 font-medium tracking-wide focus:outline-none focus:shadow-outline hover:bg-purple-600 active:bg-purple-500"
                type="submit"
              >
                Agregar
              </button>
            </div>
          </form>
          <!-- Tasks -->
          <div class="flex flex-wrap mt-10 px-6 w-full">
            <div
              id="emptyTodos"
              v-if="todos.length === 0"
              class="text-blue-800 w-full text-center font-normal tracking-wide"
            >
              Empezá a agregar tus tareas tareas...
            </div>
            <div
              id="clearAll"
              v-else
              @click="todos = []"
              class="text-blue-800 w-full text-right text-sm font-normal tracking-wide cursor-pointer mb-4 hover:text-blue-500"
            >
              Limpiar...
            </div>

            <!-- Task -->
            <div
              :class="{ 'overflow-y-scroll': todos.length > 0 }"
              class="h-80 w-full"
            >
              <div
                v-for="(todo, index) in todos"
                :key="index"
                class="flex items-center justify-between w-full mb-8"
              >
                <div
                  class="flex w-full cursor-pointer"
                  @click="todo.done = !todo.done"
                >
                  <input
                    class="hidden checkbox"
                    type="checkbox"
                    :checked="todo.done"
                  />
                  <span class="checkbox-label text-justify font-medium" />

                  <div
                    class="text-lg font-medium"
                    :class="{ 'line-through': todo.done }"
                  >
                    {{ todo.description }}
                  </div>
                </div>
                <div class="flex items-center">
                  <button
                    @click="remove(index)"
                    class="ti-trash text-2xl text-red-700 mr-4 hover:text-red-500 active:text-red-400 focus:outline-none"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      description: "",
      todos: []
    };
  },
  methods: {
    add() {
      if (!this.description) return;

      this.todos.push({
        description: this.description,
        done: false
      });
      this.description = "";
      this.$refs.addTodoInput.focus();
    },
    remove(index) {
      // eslint-disable-next-line no-unused-vars
      const newTodos = this.todos.filter((td, i) => i !== index);
      this.todos = newTodos;
    }
  }
};
</script>

<style scoped>
.checkbox + .checkbox-label:before {
  @apply text-blue-700 font-bold mr-3 text-lg cursor-pointer;
  content: "\e6e8"; /* outline box icon*/
  font-family: "themify";
}

.checkbox:checked + .checkbox-label:before {
  @apply text-blue-700 font-bold mr-3 text-lg cursor-pointer;
  content: "\e64c"; /* check */
  font-family: "themify";
}
</style>
