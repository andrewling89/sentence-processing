import { RouterModule, Routes } from "@angular/router";

import { HistoryComponent } from "./history.component";

export const historyRoutes: Routes = [
    {
        path: "history",
        pathMatch: "full",
        component: HistoryComponent
    }
];