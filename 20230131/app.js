const App = Vue.createApp({
    data() {
    return {
        taskName: "",
        dateData: "",
        priorities: ["低", "中", "高"],
        lists: [],
    };
    },
});
App.mount("#app");