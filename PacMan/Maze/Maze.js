'use strict';
import Brick from '../model/Brick';
import Movement from '../model/Movement';

let maze;

maze = [
    [
        new Brick(new Movement(0,1,1,0), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,1,0,1), 10, false, false)
    ],
    [
        new Brick(new Movement(1,1,1,0), 10, false, false), 
        new Brick(new Movement(0,1,1,1), 10, false, false), 
        new Brick(new Movement(0,1,1,1), 10, false, false), 
        new Brick(new Movement(0,1,0,1), 10, false, false), 
        new Brick(new Movement(0,1,1,0), 10, false, false),
        new Brick(new Movement(1,1,0,1), 10, false, false)
    ],
    [
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,0,1,0), 10, false, false), 
        new Brick(new Movement(1,1,0,1), 10, false, false), 
        new Brick(new Movement(1,1,0,0), 10, false, false)
    ],
    [
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,1,1,0), 0, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(1,1,0,1), 10, false, false),
        new Brick(new Movement(1,1,0,0), 10, false, false)
    ],
    [
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(1,1,0,0), 10, false, false), 
        new Brick(new Movement(0,1,1,0), 10, false, false), 
        new Brick(new Movement(1,1,0,1), 10, false, false),
        new Brick(new Movement(1,1,0,0), 10, false, false)
    ],
    [
        new Brick(new Movement(1,1,1,0), 10, false, false), 
        new Brick(new Movement(1,0,1,1), 10, false, false), 
        new Brick(new Movement(1,0,1,1), 10, false, false), 
        new Brick(new Movement(1,0,0,1), 10, false, false), 
        new Brick(new Movement(1,0,1,0), 10, false, false),
        new Brick(new Movement(1,1,0,1), 10, false, false)
    ],
    [
        new Brick(new Movement(1,0,1,0), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(0,0,1,1), 10, false, false), 
        new Brick(new Movement(1,0,0,1), 10, false, false)
    ]
];