# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jshenlive/lotide`

**Require it:**

`const _ = require('@jshenlive/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: find the first element of array
* `tail(...)`: gets the elements in an array without the head
* `middle(...)`: gets the middle element/elements of an array
* `countLetters(...)`: return an object with number of each letter in give string
* `countOnly(...)`: count the number of occurances with given string and array
* `findKey(...)`: find specific key of given object with given callback
* `flatten(...)`: flattens given nested array
* `letterPositions(...)`: returns object with letter positions of given string
* `map(...)`: maps given array with given callback function
* `takeUntil(...)`: take elements of given array until specifics given by callback
* `without(...)`: return an array without the given elements in the given array
