import {Http, Response, RequestOptionsArgs,Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

/*
  Generated class for the Http provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable() 
export class HttpService {
    /**
     * @description http服务实例
     * @field
     */
    private http:Http;
    
    /**
     * @constructor
     */
    constructor(http:Http) {
        this.http = http;
    };
    /**
     * @description get请求，通过params的方式来获取参数
     * @param {string} url 请求地址
     * @param {Object} params 请求参数
     * @returns {Observer<Function>} this.http.get 
     */
    get(url:string, params:Object) {
        let search:string='';
        for (var key in params)
        {
            search += key + '=' + params[key] + '&';
        }
        
        let opts:RequestOptionsArgs={search:search.substr(0,search.length-1)};
        return this.http.get(url, opts)
            .map(this.extractData)
            .catch(this.handleError);
    }
    /**
     * @description post请求，通过body的方式来获取参数
     * @param url 请求地址
     * @param params 请求参数
     * @returns {Observable<Function>} this.http.post 
     */
    post(url:string, params:Object) {
        return this.http.post(url, JSON.stringify(params))
            .map(this.extractData)
            .catch(this.handleError);
    }
    /**
     * @description put请求，通过body的方式来获取参数
     * @param {string} url 请求地址
     * @param {Object} params 请求参数
     * @returns {Observable<Function>} this.http.put
     */
    put(url:string, params:Object) {
        return this.http.put(url, JSON.stringify(params))
            .map(this.extractData)
            .catch(this.handleError);
    }
    /**
     * @description delete请求，通过body的方式来获取参数
     * @param {string} url 请求地址
     * @param {Object} params 请求参数
     * @returns {Observable<Function>} this.http.delete
     */
    delete(url:string, params:Object) {
        let body:string='';
        let opts:RequestOptionsArgs={body:JSON.stringify(params)};
        return this.http.delete(url, opts)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    dataCache(data:any){
        return Observable.of(data);
    }
    /**
     * @description 处理response返回
     */
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }
    
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

