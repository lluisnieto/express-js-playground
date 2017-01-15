import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Camping } from "../../models/camping.model";

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

    private items: Camping[];

    constructor(private service: ApiService){
        this.service.list().subscribe(
            response => this.items = response
        );
    }

    ngOnInit() {
    }

}
