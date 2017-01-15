import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Camping } from "../models/camping.model";


@Injectable()
export class ApiService {

    public apiUrl: string = 'http://localhost:3000/api/camping';

    constructor(private http: Http){}

    public list(): Observable<Camping[]>{
        return this.http.get(this.apiUrl).map((res:Response) => res.json());
    }

    public add(): Observable<Camping[]> {
        let emptyReg = new Camping;
        this.http.post(this.apiUrl, emptyReg).subscribe(
            (response) => console.log('Register added.')
        );

        return this.list();
    }

    public remove(id: string): Observable<Camping[]> {
        let url = this.apiUrl + '/' + id;
        this.http.delete(url).subscribe(
            (response) => console.log('Register deleted.')
        );

        return this.list();
    }

    public update(items): Observable<Camping[]> {
        let url: string;
        for (let i = 0, len = items.length; i < len; i++) {
            url = this.apiUrl + '/' + items[i]._id;
            this.http.put(url, items[i]).subscribe(
                (response) => console.log('Register "' + items[i]._id + '" updated.')
            );
        }

        return this.list();
    }
}
