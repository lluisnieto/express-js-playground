/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { CrudComponent } from './crud.component';
import { ApiService } from "../../services/api.service";


describe('CrudComponent', () => {
    let component: CrudComponent;
    let fixture: ComponentFixture<CrudComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, HttpModule ],
            declarations: [ CrudComponent ],
            providers: [
                ApiService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
