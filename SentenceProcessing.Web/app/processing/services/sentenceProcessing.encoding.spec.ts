import { SentenceProcessingService } from "./sentenceProcessingService";

describe("Encoding a sentence with all lower-case characters and no wrapping from Z to A", () => {
    it("is correctly encoded", () => {
        var originalSentence = "andrew ling coding test";
        var expectedOutput = "gshugx plph ithlph xhuu";

        var actualOutput = new SentenceProcessingService().encodeSentence(originalSentence);

        expect(actualOutput).toBe(expectedOutput);
    });
});

describe("Encoding a sentence with all upper-case characters and no wrapping from Z to A", () => {
    it("is correctly encoded", () => {
        var originalSentence = "ANDREW LING CODING TEST";
        var expectedOutput = "GSHUGX PLPH ITHLPH XHUU";

        var actualOutput = new SentenceProcessingService().encodeSentence(originalSentence);

        expect(actualOutput).toBe(expectedOutput);
    });
});

describe("Encoding a sentence with mixed upper and lower-case characters and no wrapping from Z to A", () => {
    it("is correctly encoded", () => {
        var originalSentence = "aNdReW lInG cOdInG tEsT";
        var expectedOutput = "gShUgX pLpH iThLpH xHuU";

        var actualOutput = new SentenceProcessingService().encodeSentence(originalSentence);

        expect(actualOutput).toBe(expectedOutput);
    });
});

describe("Encoding a sentence with letters, numbers and special characters", () => {
    it("is correctly encoded", () => {
        // Numbers and special characters are encoded as-is.

        var originalSentence = "aN3R!W l4n/ cOdInG tEsT";
        var expectedOutput = "gS3U!X p4p/ iThLpH xHuU";

        var actualOutput = new SentenceProcessingService().encodeSentence(originalSentence);

        expect(actualOutput).toBe(expectedOutput);
    });
});

describe("Encoding a sentence with wrapping from Z to A", () => {
    it("is correctly encoded", () => {
        var originalSentence = "zyxwvuyz";
        var expectedOutput = "hfdbzxaa";

        var actualOutput = new SentenceProcessingService().encodeSentence(originalSentence);

        expect(actualOutput).toBe(expectedOutput);
    });
});