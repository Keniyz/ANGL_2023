import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css']
})
export class CurrencyMainComponent implements OnInit {
  @Input() local_currency: any ={}
  @Input() net_object: any ={}

  public fieldType: 'currencyin' | 'currencyout' = 'currencyin';

  my_currency_form: FormGroup = new FormGroup({
    typeofcurrency2 : new FormControl('UAH',[
      Validators.required
    ]),
    currencyin : new FormControl('1', [
      Validators.required,
      Validators.minLength(1)
    ]),
    typeofcurrency1 : new FormControl('USD',[
      Validators.required
    ]),
    currencyout : new FormControl('0')
  })

   value = 'Clear me';
   searchValue:number=0;
   
   ngOnInit(): void {
    //console.log("ngAfterViewInit=",this.local_currency.length);
   }
   constructor(){
    //console.log("constructor=",this.local_currency.length);
   }

   submited(form: any){
      //console.log("form=",form);
      const toFind = form.value.typeofcurrency1;
      console.log('field= ', this.fieldType);        
      const founded = this.net_object.find((obj: any) => {
        return obj.cc === toFind
      })

      const result_currency = form.value.currencyin * founded.rate;
      const result_currency_out = form.value.currencyout/founded.rate;
      if(this.fieldType!='currencyin'){
        this.my_currency_form.patchValue({currencyin: result_currency_out.toFixed(2)})
      }else{
        this.my_currency_form.patchValue({currencyout: result_currency.toFixed(2)})
      }
   }
   
}
