'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var playerSchema = Schema( {
    name: String, 
    Catches:Number,
    Goals: Number,
    Assisists: Number, 
    Defensive_plays: Number,
    Points_played:Number, 

} );

module.exports = mongoose.model( 'Player', playerSchema );
