import { HistoryService } from "./historyService";
import { ActionTypes } from "../models/actionTypes";

import { SpecHelper } from "../../helpers/specHelper";

// Local storage mocks.
describe("Adding an item to the history", () => {
    it("should be added to the history", () => {
        var action: Action = {
            actionType: ActionTypes.Encode,
            input: "andrew ling coding test",
            output: "gshugx plph ithlph xhuu",
            actionTime: new Date().toISOString()
        };

        var storage = SpecHelper.getMockStorage();

        new HistoryService(storage).addAction(action);

        var history = storage.getItem(HistoryService.historyLocalStorageKey);
        expect(history).toBeDefined();

        if (history != null) {
            var historyItems = JSON.parse(history);
            expect(historyItems.length).toBe(1);

            expect(historyItems[0].actionType).toBe(action.actionType);
            expect(historyItems[0].input).toBe(action.input);
            expect(historyItems[0].output).toBe(action.output);
            expect(historyItems[0].actionTime).toBe(action.actionTime);
        }
    });
});

describe("Retrieving the history", () => {
    it("should be returned", () => {
        var actions: Action[] = [{
            actionType: ActionTypes.Encode,
            input: "andrew ling coding test",
            output: "gshugx plph ithlph xhuu",
            actionTime: new Date().toISOString()
        }];

        var storage = SpecHelper.getMockStorage();
        storage.setItem(HistoryService.historyLocalStorageKey, JSON.stringify(actions));

        var history = new HistoryService(storage).retrieveHistory();
        expect(history).toBeDefined();

        if (history != null) {
            expect(history.length).toBe(1);

            expect(history[0].actionType).toBe(actions[0].actionType);
            expect(history[0].input).toBe(actions[0].input);
            expect(history[0].output).toBe(actions[0].output);
            expect(history[0].actionTime).toBe(actions[0].actionTime);
        }
    });
});