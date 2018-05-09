const anagram = require("../lib/anagrams");

describe("anagram",()=>{
    it("should return [] when input empty", ()=> {
        expect(anagram()).toEqual([]);
    })

    it("should return ['a'] when input 'a'", ()=> {
        expect(anagram('a')).toEqual(['a']);
    })

    it("should return ['ab','ba'] when input 'ab'", ()=> {
        expect(anagram('ab')).toEqual(['ab','ba']);
    })

    it("should return [6] when input 'abc'", ()=> {
        expect(anagram('abc')).toEqual(['abc','acb','bac','bca','cab','cba']);
    })


})