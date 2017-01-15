import {Component} from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Camping } from "../../models/camping.model";

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent {

    private items: Camping[];

    constructor(private service: ApiService){
        this.service.list().subscribe(
            response => this.items = response
        );
    }

    addRegister() {
        this.service.add().subscribe(
            response => this.items = response
        );
    }

    removeRegister(id) {
        this.service.remove(id).subscribe(
            response => this.items = response
        );
    }

    updateRegs(item) {
        this.service.update(item).subscribe(
            response => this.items = response
        );
    }


}
