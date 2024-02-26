export default class Rover {
    private _position : [number, number];
    private _orientation : "North" | "South" | "East" | "West";
    constructor(position : [number, number], orientation : "North"|"South"|"East"|"West"){
        this._position = position;
        this._orientation = orientation;
    } 

    get orientation(){
        return this._orientation;
    }

    get position(){
        return this._position;
    }

    moveForward() {
        if(this._orientation === "North"){
            this._position[1] += 1;
        }
        if(this._orientation === "South"){
            this._position[1] -= 1;
        }
        if(this._orientation === "West"){
            this._position[0] -= 1;
        }
        if(this._orientation === "East"){
            this._position[0] += 1;
        }
    }

    moveBackward() {
        if(this._orientation === "North"){
            this._position[1] -= 1;
        }
        if(this._orientation === "South"){
            this._position[1] += 1;
        }
        if(this._orientation === "West") {
            this._position[0] += 1;
        }
        if(this._orientation === "East"){
            this._position[0] -= 1;
        }
    }
}