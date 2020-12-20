let Personne = function(nom,age,sex){
    this.nom = nom;
    this.age = age;
    this.sex = sex;
    this.getName = function(){
        return ("nom : " + this.nom +  " ,age : " + this.age);
    }
    this.setAge = function (add){
        this.age += add;
    }
}

let tab = [new Personne("yann",19,"H"),
           new Personne("emma",18,"F"),
           new Personne("charline",20,"F"),
           new Personne("micka",70,"H")];

function createDiv(indexTab){
    let div = document.createElement("div");
    div.innerHTML = tab[indexTab].getName();
    document.body.appendChild(div)
}

for(let i in tab){
    createDiv(i);
}
