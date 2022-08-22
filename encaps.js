class person{

constructor(name,id){


    this.name=name;
    this.id=id;
}
add_address(add){

    this.add=add;
}

getDetails(){

   
    console.log( (this.name) + " and ID IS " + (this.id)+ " CITY IS " + (this.add));
}


}

let person1=new person('MUKUL', 21);
person1.getDetails();
person1.add_address('DELHI');
console.log(person1);
console.log(person1.name);

