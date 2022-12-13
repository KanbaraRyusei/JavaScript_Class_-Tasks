class Toggle{
//初期設定
constructor(selector, target){
    //DOM APIを使ってHTMLのnode操作をjsでもできるようにする
    this.node = document.querySelector(selector);
    this.target = document.querySelector(target);
    //何文字以降を取得するか
    this.objectName = selector.substring(4);
    this.node.addEventListener("click", this._show.bind(this));
    }
    _show(){
        //class付与の処理を書いていく
        const isExpanded = this.node.getAttribute("aria-expanded") !== "false";
    this.node.setAttribute("aria-expanded", !isExpanded);
        //指定した親要素に is-〇〇Activeクラスをつけたり外したりする
        this.target.classList.toggle(`is-${this.objectName}Active`);
    }
}
//何をクリックしたら、どのクラスをつけるか
new Toggle(".js-drawer", "body");
new Toggle("js-chara", "body");