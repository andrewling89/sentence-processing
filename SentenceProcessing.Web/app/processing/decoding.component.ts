import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { SentenceProcessingService } from "./services/sentenceProcessingService";

@Component({
    selector: 'decoding',
    templateUrl: './app/processing/decoding.component.html'
})
export class DecodingComponent {
    private encodedSentence = new FormControl('', Validators.required);
    private decodedSentence = new FormControl('');

    private decodingForm = this.formBuilder.group({
        encodedSentence: this.encodedSentence,
        decodedSentence: this.decodedSentence
    });

    constructor( @Inject(SentenceProcessingService) private sentenceProcessingService: SentenceProcessingService,
                 @Inject(FormBuilder) private formBuilder: FormBuilder, ) {
    }

    private decodeSentence(e: Event) {
        e.preventDefault();

        this.decodedSentence.setValue(this.sentenceProcessingService.decodeSentence(this.encodedSentence.value));
    }
}