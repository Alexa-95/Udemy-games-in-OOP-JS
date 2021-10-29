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


THIS 
Wiązanie this z obiektem następuje w chwili wywołania funkcji a nie w chwili jej utworzenia
Funkcja strzałkowa NIE tworzy własnego this'a - będzie się odnosić do obiektu globalnego

const car = {
    name: 'polonez',
    year: 1999
    age () {
        console.log(`Wiek samochodu to ${2021 - this.year}`)
    }
}
car.age(); //Wiek samochodu to 22

HERMETYZACJA
-grupowanie metod i właściwości w obiekcie
-kontrolowaniem dostępu do danych zajmuje się sam obiekt
-metody get i set służą do pobierania i dostępu do danych
-implementacja staje się ukryta a dostęp do danych w jednym obiekcie 
jest udostępniany innemu obiektowi za pomocą interfejsu

ABSTRAKCJA
Realizujący określone przez projekt zadania (uproszczony model rzeczywistości) oparty na obiekcie
Obiekty te mają określona budowę, interfejs i implementację, cel, procesy oraz posiadające relację z innymi obiektami.

KOMPOZYCJA - relacja między obiektami
-Asocjacja: każdy obiekt tej relacji istnieje niezależnie, istnienie jednego obiektu nie jest potrzebne do istnienia drugiego
-Agregacja: obiekt składa się z innych obiektów(agreguje je). Sens istnienia agregatu (obiektu głównego) polega na posiadaniu obiektów, które przechowuje

MODULES
umożliwa pisanie kodu w kilku plikach(modułach) oraz import i eksport danych między nimi
<script src="script.js" type="module"></script> 
//plik_dodatkowy.js
export const add = (a,b) => a + b;
export let number = 100;

//main.js
import { add, number } from plik_dodatkowy.js
const result add(2,3) //wynik to 5

ścieżki:
    ./   katalog bieżący
   ../   katalog nadrzędny
     /   katalog główny


     import * as params from './params.js'    <= import * tworzy nowy obiekt który nazywamy params i w nim możemy się odwołać do wszystkich właściwości w importowanym pliku

*/