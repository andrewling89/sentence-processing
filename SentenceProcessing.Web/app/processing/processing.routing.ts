import { RouterModule, Routes } from "@angular/router";

import { EncodingComponent } from "./encoding.component";

export const processingRoutes: Routes = [
    {
        path: "encode",
        pathMatch: "full",
        component: EncodingComponent
    }
];