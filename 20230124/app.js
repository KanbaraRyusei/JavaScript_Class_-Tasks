Vue.createApp({
    data(){
        return{
            lastName: "",
            firstName: "",
            date: new Date(),
            nickName: "",
            error: "",
            lists: ["課題1を終わらせる", "課題2を終わらせる", "課題3を終わらせる"],
            taskName: "",
            taskError: "",
        };
    },
    methods:{
        addTask(){
            if(this.taskName == ""){
                this.taskError = "Erorr : 空白です";
                return;
            }
            this.taskError = "";
            this.lists.push(this.taskName);
        }
    },
    // 計算型プロパティ
    computed:{
        fullName(){
            return `${this.lastName} ${this.firstName}`;
        },
        nickNameData(){
            return `${this.nickName}`;
        },
        //日付の加工
        dataFormat(){
            const dataArray = ["日", "月", "火", "水", "木", "金", "土"];

            return `${this.date.getFullYear()}年${this.date.getMonth()+1}月${this.date.getDate()}日${dataArray[this.date.getDay()]}曜日`;
        },
    },
    // 変更を感知し処理を行うオプション
    watch:{
        lastName(newName, oldName){
            this.error = newName.length > 5 ? "5文字以内でお願いします" : "";
        },
        lists:{
            handler(newTask, oldtask){
                // sessionStrageにデータを一時保存する
                sessionStorage.setItem("newTasks", JSON.stringify(newTask));
            },
            deep: true,
        }
    }
}).mount("#app");