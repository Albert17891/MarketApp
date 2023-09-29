import { Component, OnInit } from '@angular/core';
import { goodsType } from '../interfaces/goodsType';
import { place } from '../interfaces/placeType';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  ngOnInit(){
    this.goodsType=[
      {name:'კარდოფილი',code:'1'},
      {name:'ვაშლი',code:'2'}
    ];

    this.placeType=[
      {name:"ახალციხე"},
      {name:"საძელი"}
    ]
  }

  goodsType:goodsType[] | undefined;
  selectedType:goodsType | undefined;

  placeType!:place[];
  selectedPlace!:place;

  quantity!:number;

  price!:number;
}
