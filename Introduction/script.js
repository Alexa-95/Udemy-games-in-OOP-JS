/*
budowa obiektu: właściwości(dane) i metody(zachowanie)
const stundent = {
    name: 'Anna'
    showName: function(){
        console.log(`Cześć ${this.name}!`)
    }
}

-- to samo ale za pomoca new i konstruktowa
    const studnet = new Objext()
--po utworzeniu dodajemy właściwości
    student.name = 'Anna'
    student.showName = function(){
        console.log(`Cześć ${this.name}!`)
    }
INSTANCJA to obiekt stworzony zgodnie z wzorcem w konstruktorze.
Powstahjący obiekt jest niezaleznym bytem, który posiada własne
właściwości i metody nadale mu przez obiekt wzorcowy (funkcja konstruktora)
oraz ma dostęp do metor i właściwości będacych w posiadaniu takiego obiektu wzorcowego (poprzez odwołanie się do prototypu konstruktowa)

--Funkcja - konstruktor (wzorzec, instrukcja)
const Animal = funkcja(name,species){
    this.name = name;
    this.species = species;
};
Animal.prototype.eating = () => { };
--Tworzenie instancji:
const dog = new Animal('Reksio', 'wyżeł');

-- Metody w funkcji konstruktora
const Animal = funkcion(name){
    this.name = name;
    this.children = [];
    this.addChildren = funktion(childName){
        this.children.push(childName);
    };
};
const hamster = new Animal('bobik');
const cat = new Animal('Miałczek');
hamster.addChildren("dzi dzi");

--Metody w prototypie
const Animal = function(name) {
    this.name - name;
    this.children = [];
};
Animal.prototype.addChildren = function(childName){
    this.children=push(childName)
};
const hamster = new Animal('bobik');
const cat = new Animal('Miałczek');
hamster.addChildren("dzi dzi");

KLASA 
class Student {
    //metoda constructor
}
const John = new Student();  <=John bedzie pustym obiektem {}, bedzie miec połączenie z prototypem klasy Animal

--Tworzenie klasy
class Animal  {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.eat = function(){
            console.log(this.name + 'mniam mniam);
        }
    }
    //a poza konstruktorem można też tworzyć funkcje:
    eat(){
        console.log(this.name + " auuuuu jakie to dobre!")
    }
}
--tworzenie instancji
    const dog = new Animal("muszka", "york");
    typeof Animal //function
*/