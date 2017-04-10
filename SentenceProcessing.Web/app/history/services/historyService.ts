import { Injectable } from "@angular/core";

@Injectable()
export class HistoryService {
    private static historyLocalStorageKey = "SentenceProcessingHistory";

    constructor() { }

    public addAction(action: Action): void {

    }

    public retrieveHistory(): Action[] {
        return [];
    }
};