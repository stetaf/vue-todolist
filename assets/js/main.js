/* App */
const app = new Vue ({
    el: '#app',
    data:  {
        tasks: [
            'Learn HTML',
            'Learn JS',
            'Learn VUE'
        ],
        inputTask: '',
        noTask: ''
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    } 
});