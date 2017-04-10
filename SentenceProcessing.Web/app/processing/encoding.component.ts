import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { SentenceProcessingService } from "./services/sentenceProcessingService";
import { HistoryService } from "../history/services/historyService";
import { ActionTypes } from "../history/models/actionTypes";

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
                 @Inject(HistoryService) private historyService: HistoryService,
                 @Inject(FormBuilder) private formBuilder: FormBuilder) {
    }

    private encodeSentence(e: Event) {
        e.preventDefault();

        var output = this.sentenceProcessingService.encodeSentence(this.sentence.value);
        this.encodedSentence.setValue(output);

        this.historyService.addAction({
            actionType: ActionTypes.Encode,
            input: this.sentence.value,
            output: output,
            actionTime: new Date().toISOString()
        });
    }
}