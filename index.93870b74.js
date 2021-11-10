function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=n.parcelRequire9acc;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},n.parcelRequire9acc=s),s.register("bXuNP",(function(n,t){var i,s;e(n.exports,"register",(()=>i),(e=>i=e)),e(n.exports,"resolve",(()=>s),(e=>s=e));var o={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)o[n[t]]=e[n[t]]},s=function(e){var n=o[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s("bXuNP").register(JSON.parse('{"5cfsh":"index.93870b74.js","7LyfZ":"ganaste.713d8f50.png","3FmfU":"perdiste.9f10fab8.png","6iI1H":"empate.9e14d05e.svg","9jygc":"piedra2.7de8c9a2.png","65FuI":"papel2.5f334517.png","ifnge":"tijera2.00169574.png"}'));const o={data:{currentGame:{computerPlay:"",myPlay:""},history:{user:0,computer:0}},listeners:[],init(){const e=localStorage.getItem("saved-state"),n=JSON.parse(e);if(null==n){const e=this.getState();this.setState(e)}else this.setState(n)},getState(){return this.data},setState(e){this.data=e;for(const n of this.listeners)n(e);localStorage.setItem("saved-state",JSON.stringify(e))},setMove(e){console.log(e);const n=this.getState();n.currentGame.myPlay=e,this.setState(n)},setComputerMove(e){console.log(e);const n=this.getState();n.currentGame.computerPlay=e,this.setState(n)},whoWins(e,n){const t=this.getState(),i=["tijera"==e&&"papel"==n,"piedra"==e&&"tijera"==n,"papel"==e&&"piedra"==n].includes(!0),s=["papel"==e&&"tijera"==n,"piedra"==e&&"papel"==n,"tijera"==e&&"piedra"==n].includes(!0);return i?(t.history.user++,"Ganaste"):s?(t.history.computer++,"Perdiste"):"Empate"},subscribe(e){this.listeners.push(e)}};function a(e){const n=document.createElement("div");n.className="welcome",n.innerHTML='\n  <div class="welcome__title">\n    <my-text tag="h1">Piedra Papel ó Tijera</my-text>\n  </div> \n  <my-button class="welcome__button">Empezar</my-button>\n \n  <div class="welcome__hands">\n    <my-hands></my-hands> \n  </div>\n  ';return n.querySelector(".welcome__button").addEventListener("click",(()=>{e.goTo("/instructions")})),n}const r=[{path:/\/welcome/,component:a},{path:/\/dwf-m5-desafio-final/,component:a},{path:/\/instructions/,component:function(e){const n=document.createElement("div");return n.className="instructions",n.innerHTML='\n    <div class="instructions__text">\n      <my-text tag="p">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n    </div> \n    <my-button class="instructions__btn">¡Jugar!</my-button>\n   \n    <div class="instructions__hands">\n      <my-hands ></my-hands>\n    </div>\n    ',n.querySelector(".instructions__btn").addEventListener("click",(()=>{e.goTo("/play")})),n}},{path:/\/play/,component:function(e){const n=document.createElement("div");n.className="play",n.innerHTML='\n    <div class="play__computer">\n      <computer-hands class="computer-choices"></computer-hands>\n    </div>\n    <my-countdown></my-countdown>\n    <div class="play__hands">\n      <user-hands></user-hands>\n    </div>\n    ';const t=document.createElement("style");return t.innerHTML="\n      .computer-choices {\n        display: none;\n      }\n  \n    ",setInterval((()=>{t.innerHTML='\n      .computer-choices {\n        display: "initial";\n      }\n    '}),4e3),setTimeout((()=>{e.goTo("/results")}),1e3),n.appendChild(t),n}},{path:/\/results/,component:function(e){const n=o.getState(),t=function(){if(""!=n.currentGame.myPlay){const e=n.currentGame.myPlay,t=n.currentGame.computerPlay;return o.whoWins(e,t)}return"Empate"}(),i=n.history.user,s=n.history.computer,a=document.createElement("div");return a.className=`results ${t}`,a.innerHTML=`\n    <my-stars tag="${t}" class="star"></my-stars>\n    <div class="score">\n      <my-text tag="h3" class="score-title">Score</my-text>\n      <div class="score-contain">\n        <my-text tag="h4">Vos: ${i}</my-text>\n        <my-text tag="h4">Máquina: ${s}</my-text>\n      </div>\n    </div>\n    <my-button class="return">Volver a Jugar</my-button>\n  `,a.querySelector(".return").addEventListener("click",(()=>{o.setMove(""),e.goTo("/instructions")})),a}}];class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("button");e.textContent=this.textContent,e.className="button";const n=document.createElement("style");n.innerHTML='\n    * {\n      box-sizing: border-box;\n    }\n    .button {\n      width: 100%;\n      color: var(--color-button-text);\n      padding: 8px 0;\n      font-size: 45px;\n      font-family: "Odibee Sans", cursive;\n      background-color: var(--color-button);;\n      border: 10px solid #001997;\n      border-radius: 10px;\n    }\n    \n    ',this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("my-button",c);class d extends HTMLElement{constructor(){super(),this.tags=["h1","h3","h4","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag)}connectedCallback(){this.render()}render(){const e=document.createElement(this.tag);e.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n        h1 {\n          font-size: 80px;\n          font-weight: 700;\n          color: var(--color-title);\n          margin: 0;\n          text-align: left;\n          line-height: 90px;\n          text-aling:center;\n          max-width:350px\n          \n        }\n        @media(min-width: 769px){\n          h1{\n            font-size: 50px;\n            line-height: 100px;\n            text-align:center\n          }\n        }\n        h3 {\n          font-size: 55px;\n          margin: 0;\n        }\n        h4 {\n          font-size: 45px;\n          font-weight: 600;\n          margin: 0;\n        }\n        p {\n          font-size: 40px;\n          text-align: center;\n          font-weigth: 600;\n          margin: 0;\n          color:var(--color-title)\n        }\n        @media(min-width: 769px){\n          p {\n            font-size: 38px;\n            width: 350px;\n            margin: 0 auto;\n            color:var(--color-title)\n           \n          }\n        }\n      ",this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("my-text",d);var l;s.register("kPq84",(function(n,t){var i;e(n.exports,"getBundleURL",(()=>i),(e=>i=e));var s={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var n=s[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),s[e]=n),n}})),l=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("7LyfZ");var p;p=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("3FmfU");var h;h=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("6iI1H");class m extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.tag=this.getAttribute("tag")}connectedCallback(){this.starChoice(),this.render()}starChoice(){"Ganaste"==this.tag?this.img=l:"Perdiste"==this.tag?this.img=p:this.img=h}render(){const e=document.createElement("div");e.className="container",e.innerHTML=`\n    <img class="star" src=${this.img} alt="star">\n    <my-text tag="h4" class="text">${this.tag}</span>\n    `;const n=document.createElement("style");n.innerHTML="\n    * {\n      box-sizing: border-box;\n    }\n    \n    .container {\n      width: 300px;\n      height: 300px;\n      position: relative;\n    }\n    \n    .star {\n      height: 300px;\n    }\n    .text {\n      position: absolute;\n      top: 90px;\n      left: 70px;\n      transform: rotate(-30deg)\n    }\n    ",this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("my-stars",m);class u extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("div");e.className="container",e.innerHTML='\n      <div class="container__countdown"></div>\n      ';const n=e.querySelector(".container__countdown");let t=4;const i=setInterval((()=>{t--,n.innerHTML=`\n          <h1 class="count">${t.toString()}</h1>\n        `,t<=0&&(clearInterval(i),this.shadow.removeChild(e))}),1e3),s=document.createElement("style");s.innerHTML="\n      .container {\n        width: 100%;\n      }\n      .container__countdown {\n        width: 243px;\n        margin: 0 auto;\n        height: 243px;\n        position: relative;\n        border: 23px solid #000000;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        animation: loading 4s linear;\n      }\n      @keyframes loading {\n        0% {\n          border-top: 24px solid grey;\n          border-right: 24px solid black;\n          border-bottom: 24px solid black;\n          border-left: 24px solid black;\n        }\n        25% {\n          border-top: 24px solid white;\n          border-right: 24px solid grey;\n          border-bottom: 24px solid black;\n          border-left: 24px solid black;\n        }\n        50% {\n          border-right: 24px solid white;\n          border-bottom: 24px solid grey;\n          border-left: 24px solid black;\n        }\n        75% {\n          border-bottom: 24px solid white;\n          border-left: 24px solid grey;\n        }\n        \n        100% {\n          border-top: 24px solid white;\n          border-right: 24px solid white;\n          border-bottom: 24px solid white;\n          border-left: 24px solid white;\n        }\n      }\n      .count {\n        font-size: 100px;\n        margin: auto;\n      }\n    \n      ",this.shadow.appendChild(s),this.shadow.appendChild(e)}}customElements.define("my-countdown",u);var g;g=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("9jygc");var x;x=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("65FuI");var f;f=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("ifnge");class y extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type")}connectedCallback(){this.render()}render(){const e=document.createElement("div");e.className="container",e.innerHTML=`\n    <img class="piedra" src=${g}>\n    <img class="papel" src=${x}>\n    <img class="tijera" src=${f}>\n    `;const n=document.createElement("style");n.innerHTML="\n    .container {\n      display: flex;\n      justify-content: space-around;\n      min-width: 250px;\n      height: auto;\n      align-items: flex-end;\n      overflow: hidden;\n    }\n    .tijera, .piedra, .papel {\n      height: 150px;\n      color: rgb(248, 208, 156);\n    }\n    @media(min-width: 769px){\n      .tijera, .piedra, .papel {\n        height: 200px;\n      }\n    }\n    ",this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("my-hands",y);class b extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type")}connectedCallback(){this.render()}render(){const e=document.createElement("div");e.className="container",e.innerHTML=`\n    <img class="piedra" src=${g}>\n    <img class="papel" src=${x}>\n    <img class="tijera" src=${f}>\n    `;const n=document.createElement("style");n.innerHTML="\n      .container {\n        display: flex;\n        justify-content: space-between;\n        width: 300px;\n        align-items: flex-end;\n        overflow: hidden;\n        margin:0px  auto;\n        position:absolute\n      }\n      @media(min-width: 769px){\n        .container {\n          width: 400px;\n        }\n      }\n      .piedra, .papel, .tijera {\n        height: 180px;\n        position: relative;\n        top: 2px;\n      }\n      @media(min-width: 769px){\n        .piedra, .papel, .tijera {\n          height: 200px;\n        }\n      }\n    ",this.shadow.appendChild(n),this.shadow.appendChild(e);e.querySelector(".piedra").addEventListener("click",(()=>{n.innerHTML="\n        .piedra {\n          height: 300px;\n        }\n        \n        @media(min-width: 1200px){\n          .piedra {\n            height: 400px;\n          }\n        }\n        .tijera, .papel {\n          display: none;\n        }\n      ",o.setMove("piedra")}));e.querySelector(".papel").addEventListener("click",(()=>{n.innerHTML="\n        .papel {\n          height: 300px;\n        }\n        @media(min-width: 1200px){\n          .papel {\n            height: 400px;\n          }\n        }\n        .tijera, .piedra {\n          display: none;\n        }\n      ",o.setMove("papel")}));e.querySelector(".tijera").addEventListener("click",(()=>{n.innerHTML="\n        .tijera {\n          height: 300px;\n        }\n        @media(min-width: 1200px){\n          .tijera {\n            height: 400px;\n          }\n        }\n        .piedra, .papel {\n          display: none;\n        }\n      ",o.setMove("tijera")}))}}customElements.define("user-hands",b);class w extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type")}connectedCallback(){this.render()}render(){const e=document.createElement("div");e.className="container";const n=Math.floor(3*Math.random()+1);1==n?(e.innerHTML=`\n      <img class="piedra" src=${g}>\n      `,o.setComputerMove("piedra")):2==n?(e.innerHTML=`\n      <img class="papel" src=${x}>\n      `,o.setComputerMove("papel")):3==n&&(e.innerHTML=`\n      <img class="tijera" src=${f}>\n      `,o.setComputerMove("tijera"));const t=document.createElement("style");t.innerHTML="\n      .piedra, .papel, .tijera {\n        transform:rotate(180deg);\n        height: 300px;\n      }\n      @media(min-width: 1200px){\n        .piedra, .papel, .tijera {\n          height: 400px;\n        }\n      }\n    ",this.shadow.appendChild(t),this.shadow.appendChild(e)}}customElements.define("computer-hands",w),function(){o.init();!function(e){function n(e){history.pushState({},"",e),t(e)}function t(t){for(const i of r)if(i.path.test(t)){const t=i.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/"==location.pathname?n("/welcome"):t(location.pathname),location.host.includes("github.io")&&n("/desafio-m5"),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".container"))}();
//# sourceMappingURL=index.93870b74.js.map