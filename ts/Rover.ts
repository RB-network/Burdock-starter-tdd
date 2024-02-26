export default class Rover {
    private _position : [Number, Number];
    private _orientation : "North" | "South" | "East" | "West";
    constructor(position : [Number, Number], orientation : "North"|"South"|"East"|"West"){
        this._position = position;
        this._orientation = orientation;
    } 

    get orientation(){
        return this._orientation;
    }

    get position(){
        return this._position;
    }
}