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
}
