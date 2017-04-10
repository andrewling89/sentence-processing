var exports: any = {};

// Local storage mocks.
// SOURCE: http://stackoverflow.com/a/14381941/3713362
beforeEach(function () {
    var store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
        return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
        return store[key] = value + '';
    });

    spyOn(localStorage, 'clear').and.callFake(function () {
        store = {};
    });
});