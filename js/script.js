// let c=document.createElement('canvas');
// console.log(c);
// let e=document.body.firstChild;
// console.log(e);
// document.body.insertBefore(c,e);

let sut={
    //P:V
    name:"Deepak",
    surname:"Prajapati",

    //Methods

    getsut:function(){
        console.log(`${this.surname}`);
    }
}

console.log(sut.name);
console.log(sut.getsut());

const getname={
    c:document.createElement("canvas"),
    cxt:null,

   st:function(){
        console.log("hello");
        let e=document.body.firstChild;
        console.log(e);
        this.c.width=window.innerWidth-10;
        this.c.height=window.innerHeight-10;
        this.cxt=this.c.getContext("2d");
        console.log(document.body.insertBefore(this.c,e))

    }
}

console.log(getname.st());

