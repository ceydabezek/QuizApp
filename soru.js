function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}
let sorular = [
    new Soru("1-Which is a javascript package management application?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Which one cannot be evaluated within the scope of frontend?", { a: "css.js", b: "html", c: "javascript", d: "sql" }, "d"),
    new Soru("3-Which one is considered as a backend?", { a: "Node.js", b: "Typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Which javascript programming language does not use?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];
