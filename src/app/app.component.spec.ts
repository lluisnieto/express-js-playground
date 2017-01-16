/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { TopbarComponent } from "./topbar/topbar.component";
import { CrudComponent } from "./crud/crud.component";
import { ApiService } from "../services/api.service";



describe('AppComponent', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, HttpModule ],
            declarations: [
                AppComponent,
                TopbarComponent,
                CrudComponent
            ],
            providers: [
                ApiService
            ]
        });
        TestBed.compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
