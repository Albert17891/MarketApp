import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goods} from '../interfaces/goods';
import { AppConfig } from '../AppConfig';
import { Observable } from 'rxjs';
import { GoodsRequest } from '../interfaces/GoodsRequest';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient) { }

  addProduct(goodsRequest:GoodsRequest){
    const url=`${AppConfig.apiUrl}Goods/add-goods`;


       this.http.post(url,goodsRequest).subscribe(res=>{

       });
  }

  getProduct(id:string):Observable<Goods[]>{
 
    const url=`${AppConfig.apiUrl}Goods/get-my-goods`;

    const params = { id: id };
    
    return this.http.get<Goods[]>(url, { params: params });
  }
}
