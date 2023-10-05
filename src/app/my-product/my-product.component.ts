import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../services/goods.service';
import { GoodsRequest } from '../interfaces/GoodsRequest';
import { Goods } from '../interfaces/goods';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {

 goods!:Goods[];


  constructor(private goodsService:GoodsService){}

  ngOnInit(): void {
    const userId=localStorage.getItem('UserId');

    if(userId!=null){
       this.goodsService.getProduct(userId).subscribe(data=>{
               this.goods=data;
       });
    }    
  }
    
}
