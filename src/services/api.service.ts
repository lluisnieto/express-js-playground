import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
            (response) => console.log('Register sent.')
        );

        return this.list();
    }

    public remove(id): Observable<Camping[]> {
        let url = this.apiUrl + '/' + id;
        this.http.delete(url).subscribe(
            (response) => console.log('Register deleted.')
        );

        return this.list();
    }

    public update(item): Observable<Camping[]> {
        let url = this.apiUrl + '/' + item._id;
        this.http.put(url, item).subscribe(
            (response) => console.log('Register updated.')
        );

        return this.list();
    }
}
