import { RouterModule, Routes } from "@angular/router";

import { EncodingComponent } from "./encoding.component";
import { DecodingComponent } from "./decoding.component";

export const processingRoutes: Routes = [
    {
        path: "encode",
        pathMatch: "full",
        component: EncodingComponent
    },
    {
        path: "decode",
        pathMatch: "full",
        component: DecodingComponent
    }
];