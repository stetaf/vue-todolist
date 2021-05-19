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
                this.saveLists();
            } else {
                this.errorTask = 'border: 2px solid red; outline: red;';
            }
        },
        removeTask(index) {
            this.trashedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
            this.saveLists();
        },
        updateTask(e, index) {
            this.content = e.target.innerText;
            this.tasks[index] = this.content;
            this.saveLists();
        },
        completeTask(index) {
            this.completedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
            this.saveLists();
        },
        undoTask(index) {
            this.tasks.push(this.completedTasks[index]);
            this.completedTasks.splice(index, 1);
            this.saveLists();
        },
        restoreTask(index) {
            this.tasks.push(this.trashedTasks[index]);
            this.trashedTasks.splice(index, 1);
            this.saveLists();
        },
        emptyTrash() {
            if (confirm("Are you sure you want to clear the trash list ?")) this.trashedTasks = [];
            this.saveLists();
        },
        loadLists() {
            if (localStorage.todo) this.tasks = JSON.parse(localStorage.getItem("todo"));
            if (localStorage.compl) this.completedTasks = JSON.parse(localStorage.getItem("compl"));
            if (localStorage.trash) this.trashedTasks = JSON.parse(localStorage.getItem("trash"));    
        },
        saveLists() {
            localStorage.setItem("todo", JSON.stringify(this.tasks));
            localStorage.setItem("compl", JSON.stringify(this.completedTasks));
            localStorage.setItem("trash", JSON.stringify(this.trashedTasks));
        }
    },
    mounted: function() {
        this.loadLists();
        let el = document.querySelector('.addTask > input');
        el.addEventListener("keydown", (event) => {
            if (event.key == "Enter") this.addTask();
        });
    }
});