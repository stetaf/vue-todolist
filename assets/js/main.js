/* App */
const app = new Vue ({
    el: '#app',
    data:  {
        tasks: [
            'Learn HTML',
            'Learn JS',
            'Learn VUE'
        ],
        completedTasks: [],
        inputTask: '',
        noTask: '',
        noCompleted: '',
        content: ''
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        updateTask(e, index) {
            this.content = e.target.innerText;
            this.tasks[index] = this.content;
        },
        completeTask(index) {
            this.completedTasks.push(this.tasks[index]);
            this.removeTask(index);
        },
        undoTask(index) {
            this.tasks.push(this.completedTasks[index]);
            this.completedTasks.splice(index, 1);
        }
    },
    mounted: function() {

    }
});