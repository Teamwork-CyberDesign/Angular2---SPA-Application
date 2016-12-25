import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AjaxRequesterService<T> {
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public get(url: string): Observable<T[]> {
        return this.http.get(url)
            .map(res => JSON.parse(res.json()));
    }

    public post(url: string, item: any, headers?: any): Observable<T> {
        let parsedHeaders = AjaxRequesterService.prepareHeaders(headers);

        return this.http
            .post(url, JSON.stringify(item), { headers: parsedHeaders })
            .map(res => JSON.parse(res.json()));
    }

    public put(url: string, item: any, headers?: any): Observable<T> {
        let parsedHeaders = AjaxRequesterService.prepareHeaders(headers);

        return this.http
            .put(url, JSON.stringify(item), { headers: parsedHeaders })
            .map(res => JSON.parse(res.json()));
    }

    private static prepareHeaders(options?: any): Headers {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        if (options) {
            for (let header of Object.keys(options)) {
                headers.append(header, options[header]);
            }
        }

        return headers;
    }
}
