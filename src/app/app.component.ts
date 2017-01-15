import { Component } from '@angular/core';

import { ApiService } from "../services/api.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private title = 'Camping manager';

    constructor(private service: ApiService){
        this.service.list().subscribe(
            response => console.log(response)
        );
    }



}
