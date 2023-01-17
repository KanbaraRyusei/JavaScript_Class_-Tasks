const App = Vue.createApp({
    data(){
        return{
            priorities: ["低", "中", "高"],
            priority:"",
            items: ["質問", "相談", "共有事項", "提案", "その他"],
            selected: "",
            contactlist: ["メルマガを購読する", "Twitterをフォローする", "Instagramをフォローする"],
            message: "",
            gender: "",
            sendlist: [],
            isExpanded: false,
            isShow: true,
            isMobile: true,
            bloodType: "A",
            works: ["Game", "Scenario", "Character Design", "Document", "Program"]
        }
    }
    }
);

App.mount("#app");
// const Counter = {
//     data(){
//         return {
//             counter: 0,
//         }
//     },
//     mounted(){
//         setInterval(() => {
//             this.counter++; 
//         },1000);
//     }
// };

// const AttibuteBindid = {
//     data(){
//         return{
//             message:"あなたの地域の時間は" + new Date().toLocaleString(),
//         };
//     },

// };

// const EventHandling = {
//     data(){
//         return {
//             message:"Hello vue.js",
//         };
//     },
//     methods: {
//         reverseMessage() {
//             this.message = this.message.split('').reverse().join("");
//         }
//     }
// };

// const TwoWayBinding = {
//     data() {
//         return {
//             message:"hello Vue!"
//         };
//     }
// };

// const ConditionalRenderling = {
//     data() {
//         return {
//             isShow:true,
//         };
//     },
//     methods:{
//         change() {
//             this.isShow = !this.isShow;
//         }
//     }
// };

// // v-for
// const ListRenderling = {
//     data() {
//         return {
//             todos:[
//                 {id:1, text:"HTMLを学ぶ"},
//                 {id:2, text:"CSSを学ぶ"},
//                 {id:3, text:"JSを学ぶ"},
//                 {id:4, text:"Vueを学ぶ"}
//             ]
//         };
//     }
// };
// Vue.createApp(Counter).mount("#counter");
// Vue.createApp(AttibuteBindid).mount("#attibute-bindid");
// Vue.createApp(EventHandling).mount("#event-handling");
// Vue.createApp(TwoWayBinding).mount("#twoway-binding");
// Vue.createApp(ConditionalRenderling).mount("#conditional-renderling");
// Vue.createApp(ListRenderling).mount("#list-renderling");