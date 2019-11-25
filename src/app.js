import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy food for parrots", highPriority: true},
        {name: "Feed lions", highPriority: true},
        {name: "Homework", highPriority: false}
      ],
      newTask: ""
    },
    methods:{
      saveNewTask: function (){
        this.todos.push({
          name: this.newTask,
          highPriority: true
        });
        this.newTask = "";
      }
    },
  });
});
