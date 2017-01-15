import {Component, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    private title = 'Camping manager';

}
