/* App */
const app = new Vue ({
    el: '#app',
    data:  {
        tasks: [],
        inputTask: '',
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = '';
        }
    } 
});