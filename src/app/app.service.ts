import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class appService {
    baseURL = "https://newsapi.org/v2/";
    apiKey = "a7501ae5de3c4970a28456954096cf46";

    constructor(private http: HttpClient) {

    }

    getTopHeadlines() {
        return this.http.get(this.baseURL + 'top-headlines?country=in&apiKey=' + this.apiKey)
    }

    getEverything(query) {
        return this.http.get(this.baseURL + 'everything?q='+query+'&apiKey=' + this.apiKey)
    }
}   