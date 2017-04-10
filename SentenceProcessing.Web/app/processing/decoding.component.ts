import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { SentenceProcessingService } from "./services/sentenceProcessingService";
import { HistoryService } from "../history/services/historyService";
import { ActionTypes } from "../history/models/actionTypes";

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
                 @Inject(HistoryService) private historyService: HistoryService,
                 @Inject(FormBuilder) private formBuilder: FormBuilder) {
    }

    private decodeSentence(e: Event) {
        e.preventDefault();

        var output = this.sentenceProcessingService.decodeSentence(this.encodedSentence.value);
        this.decodedSentence.setValue(output);

        this.historyService.addAction({
            actionType: ActionTypes.Decode,
            input: this.encodedSentence.value,
            output: output,
            actionTime: new Date().toISOString()
        });
    }
}