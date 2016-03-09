
module Example.Tests {
    describe("Example", () => {

        var httpBackend: ng.IHttpBackendService;
        var http: ng.IHttpService;
        beforeEach(inject(($httpBackend, $http) => {
            httpBackend = $httpBackend;
            http = $http;
        }));

        it("should not fail", () => {
            var endpoint = "/foo/bar";
            httpBackend.expectPOST(endpoint).respond({});

            http.post(endpoint, {});

            expect(() => httpBackend.verifyNoOutstandingExpectation()).not.toThrow();
        });

        it("1", () => expect(1).toBeTruthy());
        it("2", () => expect(1).toBeTruthy());
        it("3", () => expect(1).toBeTruthy());
        it("4", () => expect(1).toBeTruthy());
        it("5", () => expect(1).toBeTruthy());
        it("6", () => expect(1).toBeTruthy());
        it("7", () => expect(1).toBeTruthy());
        it("8", () => expect(1).toBeTruthy());
        it("9", () => expect(1).toBeTruthy());
        it("a", () => expect(1).toBeTruthy());
        it("b", () => expect(1).toBeTruthy());
        it("c", () => expect(1).toBeTruthy());
        it("d", () => expect(1).toBeTruthy());
        it("e", () => expect(1).toBeTruthy());
        it("f", () => expect(1).toBeTruthy());
        // Following line is not necessary for 4.1.0 to choke. But it does cause 4.2.0 to choke. 
        it("g", () => expect(1).toBeTruthy());

        describe("should not cause test to fail", () => {
        });
    });
}
