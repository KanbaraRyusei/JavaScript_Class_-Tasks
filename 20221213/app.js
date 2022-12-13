const App = Vue.createApp({
  data(){
    return{
      navlist: ["図鑑", "対戦", "ショップ", "道具", "ポケモン"],
      isMenuActive:false,
      menuClass: "is-drawerActive"
    };
  },
  methods:{
    menunOpen(){
      this.isMenuActive = !this.isMenuActive;
    }
  }
}
)

App.mount("#app");

// class Toggle {
//   constructor(selector, target) {
//     this.node = document.querySelector(selector);
//     this.target = document.querySelector(target);
//     this.objectName = selector.substring(4);
//     this.node.addEventListener("click", this._show.bind(this));
//   }
//   _show() {
//     //aria-expandedの属性切り替え
//     //文字列で定義されているので属性はboolean型にならない
//     //今ついている属性と逆が入る true !== false true , false !== false false
//     const isExpanded = this.node.getAttribute("aria-expanded") !== "false";
//     this.node.setAttribute("aria-expanded", !isExpanded);
//     //指定した親要素に is-〇〇Activeクラスをつけたり外したり
//     this.target.classList.toggle(`is-${this.objectName}Active`);
//   }
// }

// new Toggle(".js-drawer", "body");
// new Toggle(".js-chara", "body");
