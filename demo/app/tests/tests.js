var CallBlocking = require("nativescript-call-blocking").CallBlocking;
var callBlocking = new CallBlocking();

describe("greet function", function() {
    it("exists", function() {
        expect(callBlocking.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(callBlocking.greet()).toEqual("Hello, NS");
    });
});