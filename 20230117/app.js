Vue.createApp({
    data(){
        return{
            items: ["About", "Works", "Profile", "Countact"],
            isActive: false,
        };
    },
    methods:{
        drawer(){
            this.isActive = !this.isActive;
        },
    },
}).mount("#app");