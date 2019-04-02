'use strict';
/**
 * A brick's movement Property in the PacMan Grid(Maze)
 * Defines Walls and movable next position using
 * xl,xr,yu,yd
 */
export default class Movement {
    /** Constructor
     * @param {boolean}     xl  Left along the X axis.
     * @param {boolean}     xr  Right along the X axis.
     * @param {boolean}     yu  Up along the Y axis.
     * @param {boolean}     yd  Down along the Y axis
     */
    constructor(xl, xr, yu, yd){
        this.xl = xl;
        this.xr = xr;
        this.yu = yu;
        this.yd = yd;
    }

}