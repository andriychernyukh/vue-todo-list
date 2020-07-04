let app = new Vue({
  el: "#app",
  data: {
    newTask: "",
    tasks: [
      {
        isCompleted: false,
        taskValue: "Don't give up, make your dreams comes true",
      },
    ],
  },

  methods: {
    addTask(newTask) {
      if (newTask !== "") {
        this.tasks.push({ isCompleted: false, taskValue: newTask });
      }
    },
    deleteTask(index) {
      if (this.tasks[index].isCompleted) {
        this.tasks.splice(index, 1);
      }
    },
  },

  computed: {
    completedTaskCounter: function () {

      return this.tasks.filter(task => task.isCompleted).length;
    },
  },
});
