// SOURCE: http://stackoverflow.com/a/35769110/3713362
export class SpecHelper {
    public static getMockStorage(): any {
        return (function () {
            var store = {};

            return {
                getItem: function (key) {
                    return store[key];
                },
                setItem: function (key, value) {
                    store[key] = value.toString();
                },
                clear: function () {
                    store = {};
                }
            };
        })();
    }
}