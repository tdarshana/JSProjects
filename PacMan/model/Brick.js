'use strict';

import Movement from 'Movement.js';

class Brick{
    /**
     * @param {Movement}    movement    Allowed Movement vector for the Brick
     * @param {number}      amount      Amount of Score in the Brick
     * @param {boolean}     status      Whether PacMan is in this Brick or not
     * @param {boolean}     type        Special Brick or Not
     */
    constructor(movement, amount, status, type){
        this.Movement = movement;
        this.amount = amount;
        this.status = status;
        this.type = type;
    }
}