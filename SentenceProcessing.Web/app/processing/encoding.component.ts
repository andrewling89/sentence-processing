import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { SentenceProcessingService } from "./services/sentenceProcessingService";

@Component({
    selector: 'encoding',
    templateUrl: './app/processing/encoding.component.html'
})
export class EncodingComponent {
    private sentence = new FormControl('', Validators.required);
    private encodedSentence = new FormControl('');

    private encodingForm = this.formBuilder.group({
        sentence: this.sentence,
        encodedSentence: this.encodedSentence
    });

    constructor( @Inject(SentenceProcessingService) private sentenceProcessingService: SentenceProcessingService,
                 @Inject(FormBuilder) private formBuilder: FormBuilder) {
    }

    private encodeSentence(e: Event) {
        e.preventDefault();

        this.encodedSentence.setValue(this.sentenceProcessingService.encodeSentence(this.sentence.value));
    }
}