const App = Vue.createApp({
    data() {
    return {
        taskName: "",
        dateData: "",
        priorities: ["低", "中", "高"],
        priority: "",
        done: false,
        lists: [],
        sort: "desc",
        filter: "all",
        search: "",
        tasklist: [],
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
            this.priority = "";
        }
    },
    watch:{
        lists:{
            handler(newTask){
                console.log(newTask);
                localStorage.setItem("newTasks", JSON.stringify(newTask));
            },
            deep: true,
        }
    },
    computed:{
        dataFormat(){
            return(now) => {
                const d = new Date(now);
                const year = d.getFullYear();
                const month = d.getMonth();
                const date = d.getDate();
                const day = d.getDay();
                const dataArray = ['日', '月', '火', '水', '木', '金', '土'];
                return `${year}年${month + 1}月${date}日${dataArray[day]}曜日`;
            }
        },
        results(){
            return this.tasklist.filter((val) => {
                if(this.filter == "all"){
                    return true;
                }else{
                    return this.filter == val.priority;
                }
            }).filter((val) => {
                return val.title.includes(this.search);
            }).sort((a, b) => {
                const dataA = new Date(a.publish);
                const dataB = new Date(b.publish);
                if(this.sort == "asc"){
                    return dataA - dataB;
                }else{
                    return dataB - dataA;
                }
            });
        },
    },
    craeted(){
        const tasks = JSON.parse(localStorage.getItem("newTasks"));
        this.tasklist = tasks ? tasks : [];
        localStorage.setItem("newTasks", JSON.stringify(tasks));
    },
});
App.mount("#app");