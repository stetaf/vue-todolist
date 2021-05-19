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
        noTask: '',
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
        }
    },
    mounted: function() {

    }
});