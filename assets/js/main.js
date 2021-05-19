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
        errorTask: '',
        noTask: '',
        noCompleted: '',
        content: ''
    },
    methods: {
        addTask() {
            if ((this.inputTask.length > 5) && (this.inputTask.match(/^\s+$/) === null)) {
                this.tasks.push(this.inputTask);
                this.inputTask = '';
            } else {
                this.errorTask = 'border: 2px solid red';
            }
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
        let el = document.querySelector('.addTask > input');
        el.addEventListener("keydown", (event) => {
            if (event.key == "Enter") this.addTask();
        });
    }
});