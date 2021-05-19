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
        trashedTasks: [],
        inputTask: '',
        errorTask: '',
        noTask: '',
        noCompleted: '',
        noTrashed: '',
        content: ''
    },
    methods: {
        addTask() {
            if ((this.inputTask.length > 5) && (this.inputTask.match(/^\s+$/) === null)) {
                this.tasks.push(this.inputTask);
                this.inputTask = '';
                this.errorTask = '';
            } else {
                this.errorTask = 'border: 2px solid red; outline: red;';
            }
        },
        removeTask(index) {
            this.trashedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        updateTask(e, index) {
            this.content = e.target.innerText;
            this.tasks[index] = this.content;
        },
        completeTask(index) {
            this.completedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        undoTask(index) {
            this.tasks.push(this.completedTasks[index]);
            this.completedTasks.splice(index, 1);
        },
        restoreTask(index) {
            this.tasks.push(this.trashedTasks[index]);
            this.trashedTasks.splice(index, 1);
        },
        emptyTrash() {
            if (confirm("Are you sure you want to clear the trash list ?")) this.trashedTasks = [];
        }
    },
    mounted: function() {
        let el = document.querySelector('.addTask > input');
        el.addEventListener("keydown", (event) => {
            if (event.key == "Enter") this.addTask();
        });
    }
});