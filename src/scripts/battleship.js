class Ship {
    constructor(length, coords){
        this.length = length;
        this.hitCounter = 0;
        this.sunk = false;
        this.coords = coords;
    };

    //increments the hit counter
    hit(){
        this.hitCounter+=1;
    };

    //checks if the ship is sunk
    isSunk(){
        if (this.length ==this.hitCounter){
            return true;
        }else{
            return false;
        }
    };
};

class Gameboard {
    constructor(){
        this.shipArray=[];
        this.boardArray = this.initBoard();
    }
    canPlace(length,coords){
        let ship = new Ship(length, coords);
    };
    //creates a 10 by 10 grid for the ships
    initBoard(){

    };

    placeShip(length,coords){ 
        let ship = new Ship(length, coords);
        this.shipArray.push(ship);
        return ship;
    };
};

module.exports= {Gameboard};