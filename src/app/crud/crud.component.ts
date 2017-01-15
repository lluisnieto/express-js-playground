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
    private flagAddDisabled: boolean = false;

    constructor(private service: ApiService){
        this.service.list().subscribe(
            response => this.items = response
        );
    }

    disableAdd(): void {
        this.flagAddDisabled = true;
    }
    enableAdd(): void {
        this.flagAddDisabled = false;
    }

    addRegister(): void {
        this.service.add().subscribe(
            response => this.items = response
        );
    }

    removeRegister(id): void {
        this.service.remove(id).subscribe(
            response => this.items = this.items.filter(function( obj ) {
                return obj._id !== id;
            })
        );
    }

    updateRegs(e, items): void {
        e.preventDefault();
        this.service.update(items).subscribe(
            function(response){
                this.items = response;
            }
        );
        this.enableAdd();
    }

}
