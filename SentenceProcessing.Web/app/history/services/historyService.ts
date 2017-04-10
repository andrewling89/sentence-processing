import { Injectable, Optional } from "@angular/core";

@Injectable()
export class HistoryService {
    public static historyLocalStorageKey = "SentenceProcessingHistory";

    constructor(@Optional() private storage: Storage = null) {
        if (storage == null) {
            storage = window.localStorage;
        }
    }

    public addAction(action: Action): void {
        var history = this.retrieveHistory();

        history.push(action);

        this.storage.setItem(HistoryService.historyLocalStorageKey, JSON.stringify(history));
    }

    public retrieveHistory(): Action[] {
        var history = this.storage.getItem(HistoryService.historyLocalStorageKey);

        if (history == null) {
            return [];
        } else {
            return JSON.parse(history);
        }
    }
};