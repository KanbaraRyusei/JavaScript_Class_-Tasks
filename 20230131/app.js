const App = Vue.createApp({
    data() {
    return {
        taskName: "",
        dateData: "",
        priorities: ["低", "中", "高"],
        priority: "",
        done: false,
        lists: [],
    };
    },
    methods:{
        addTask(){
            if(this.taskName == "" || this.dateData == "" || this.priority == ""){
                return;
            }
            var tasks = {
                id: Date.now(),
                done: this.done,
                taskName: this.taskName,
                date: this.dateData,
                priority: this.priority,
                publish: new Date(),
            };
            this.lists.push(tasks);
            this.resetTask();
        },
        resetTask(){
            this.taskName = "";
            this.dateData = "";
            this.priority = 1;
        }
    },
    watch:{
        lists:{
            handler(newTask, oldtask){
                sessionStorage.setItem("newTasks", JSON.stringify(newTask));
            },
            deep: true,
        }
    }
});
App.mount("#app");