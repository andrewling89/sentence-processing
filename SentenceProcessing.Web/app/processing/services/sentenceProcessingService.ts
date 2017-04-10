import { Injectable } from "@angular/core";

@Injectable()
export class SentenceProcessingService {
    private static uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    private static lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    private static alphabetLength = SentenceProcessingService.uppercaseLetters.length;

    constructor() { }

    public encodeSentence(sentence: string): string {
        if (sentence == null) {
            return null;
        }

        return sentence.split(" ").map(word => this.encodeWord(word)).join(" ");
    }

    private encodeWord(word: string) {
        var wordLength = word.length;

        var encodedWord = word.split("").map((char, index) => {
            var useUppercase = true;

            var mappedIndex = SentenceProcessingService.uppercaseLetters.indexOf(char);

            if (mappedIndex < 0) {
                mappedIndex = SentenceProcessingService.lowercaseLetters.indexOf(char);
                useUppercase = false;
            }

            if (mappedIndex < 0) {
                // A special character or character from another script (like Greek).
                return char;
            }

            var encodedCharacterIndex = ((wordLength - index) + mappedIndex) % SentenceProcessingService.alphabetLength;

            return useUppercase ? SentenceProcessingService.uppercaseLetters[encodedCharacterIndex] : SentenceProcessingService.lowercaseLetters[encodedCharacterIndex];
        }).join("");

        return encodedWord;
    }

    public decodeSentence(sentence: string): string {
        if (sentence == null) {
            return null;
        }

        return sentence.split(" ").map(word => this.decodeWord(word)).join(" ");
    }

    private decodeWord(word: string): string {
        var wordLength = word.length;

        var decodedWord = word.split("").map((char, index) => {
            var useUppercase = true;

            var mappedIndex = SentenceProcessingService.uppercaseLetters.indexOf(char);

            if (mappedIndex < 0) {
                mappedIndex = SentenceProcessingService.lowercaseLetters.indexOf(char);
                useUppercase = false;
            }

            if (mappedIndex < 0) {
                // A special character or character from another script (like Greek).
                return char;
            }

            var decodedCharacterIndex = (mappedIndex - (wordLength - index));

            if (decodedCharacterIndex < 0) {
                var absCharacterIndex = Math.abs(decodedCharacterIndex);
                var numberOfAlphabets = Math.floor(absCharacterIndex / SentenceProcessingService.alphabetLength) + 1;

                decodedCharacterIndex = (numberOfAlphabets * SentenceProcessingService.alphabetLength) - absCharacterIndex;
            }

            return useUppercase ? SentenceProcessingService.uppercaseLetters[decodedCharacterIndex] : SentenceProcessingService.lowercaseLetters[decodedCharacterIndex];
        }).join("");

        return decodedWord;
    }
}