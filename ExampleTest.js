var Example;
(function (Example) {
    var Tests;
    (function (Tests) {
        describe("Example", function () {
            var httpBackend;
            var http;
            beforeEach(inject(function ($httpBackend, $http) {
                httpBackend = $httpBackend;
                http = $http;
            }));
            it("should not fail", function () {
                var endpoint = "/foo/bar";
                httpBackend.expectPOST(endpoint).respond({});
                http.post(endpoint, {});
                expect(function () { return httpBackend.verifyNoOutstandingExpectation(); }).not.toThrow();
            });
            it("1", function () { return expect(1).toBeTruthy(); });
            it("2", function () { return expect(1).toBeTruthy(); });
            it("3", function () { return expect(1).toBeTruthy(); });
            it("4", function () { return expect(1).toBeTruthy(); });
            it("5", function () { return expect(1).toBeTruthy(); });
            it("6", function () { return expect(1).toBeTruthy(); });
            it("7", function () { return expect(1).toBeTruthy(); });
            it("8", function () { return expect(1).toBeTruthy(); });
            it("9", function () { return expect(1).toBeTruthy(); });
            it("a", function () { return expect(1).toBeTruthy(); });
            it("b", function () { return expect(1).toBeTruthy(); });
            it("c", function () { return expect(1).toBeTruthy(); });
            it("d", function () { return expect(1).toBeTruthy(); });
            it("e", function () { return expect(1).toBeTruthy(); });
            it("f", function () { return expect(1).toBeTruthy(); });
            // Following line is not necessary for 4.1.0 to choke. But it does cause 4.2.0 to choke. 
            it("g", function () { return expect(1).toBeTruthy(); });
            describe("should not cause test to fail", function () {
            });
        });
    })(Tests = Example.Tests || (Example.Tests = {}));
})(Example || (Example = {}));
//# sourceMappingURL=ExampleTest.js.map