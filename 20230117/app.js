Vue.createApp({
    data(){
        return{
            items: ["About", "Works", "Profile", "Countact"],
            isActive: false,
        };
    },
    methods:{
        drawer(){
            //isActiveのtrue/falseを反転させる
            this.isActive = !this.isActive;
        },
    },
}).mount("#app");