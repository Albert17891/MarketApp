import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.css']
})
export class AddGoodsComponent {
       
    goodsForm:FormGroup;

     constructor(private formBuilder:FormBuilder){
         this.goodsForm=this.formBuilder.group({
          name:['',Validators.required],
          quantity:[0,[Validators.required,Validators.min(0)]],
          price:[0,[Validators.required,Validators.min(0)]],
          place:['',Validators.required]
         })
     }

     onSubmit(){
        
     }
}
