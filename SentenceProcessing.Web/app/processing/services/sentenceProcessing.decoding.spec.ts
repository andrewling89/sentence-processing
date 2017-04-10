import { SentenceProcessingService } from "./sentenceProcessingService";

describe("Decoding a sentence with all lower-case characters and no wrapping from Z to A", () => {
    it("is correctly decoded", () => {
        var originalSentence = "gshugx plph ithlph xhuu";
        var expectedOutput = "andrew ling coding test";

        var actualOutput = new SentenceProcessingService().decodeSentence(originalSentence);

        expect(actualOutput).toBe(expectedOutput);
    });

    describe("Decoding a sentence with all upper-case characters and no wrapping from Z to A", () => {
        it("is correctly decoded", () => {
            var originalSentence = "GSHUGX PLPH ITHLPH XHUU";
            var expectedOutput = "ANDREW LING CODING TEST";

            var actualOutput = new SentenceProcessingService().decodeSentence(originalSentence);

            expect(actualOutput).toBe(expectedOutput);
        });
    });

    describe("Decoding a sentence with mixed upper and lower-case characters and no wrapping from Z to A", () => {
        it("is correctly decoded", () => {
            var originalSentence = "gShUgX pLpH iThLpH xHuU";
            var expectedOutput = "aNdReW lInG cOdInG tEsT";

            var actualOutput = new SentenceProcessingService().decodeSentence(originalSentence);

            expect(actualOutput).toBe(expectedOutput);
        });
    });

    describe("Decoding a sentence with letters, numbers and special characters", () => {
        it("is correctly decoded", () => {
            // Numbers and special characters are decoded as-is.
            var originalSentence = "gS3U!X p4p/ iThLpH xHuU";
            var expectedOutput = "aN3R!W l4n/ cOdInG tEsT";

            var actualOutput = new SentenceProcessingService().decodeSentence(originalSentence);

            expect(actualOutput).toBe(expectedOutput);
        });
    });

    describe("Decoding a sentence with wrapping from Z to A", () => {
        it("is correctly decoded", () => {
            var originalSentence = "hfdbzxaa";
            var expectedOutput = "zyxwvuyz";

            var actualOutput = new SentenceProcessingService().decodeSentence(originalSentence);

            expect(actualOutput).toBe(expectedOutput);
        });
    });
});