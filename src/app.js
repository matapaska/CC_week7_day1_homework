import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: "#app",
    data: {
      todos: ["Buy food for parrots", "Feed lions", "Homework" ],
      newTask: ""
    },
    methods:{
      saveNewTask: function (){
        this.todos.push(this.newTask);
        this.newTask = "";
      }
    },
  });
});
