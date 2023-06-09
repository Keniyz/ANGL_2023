import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My first step';
  word ='Конвертація валюти згідно НБУ';
  net_object: any=0;
  currency_object: any=0;

  constructor(public api: CurrencyService) {

  }
 
  ngOnInit(): void {
    this.getCurrency();
  }
  
  getCurrency(){
    this.api.getCurrency().subscribe((data: any) => {
      this.net_object = data;
      localStorage.setItem("data", JSON.stringify(data))
      this.currency_object=JSON.parse(localStorage.getItem("data") || '{}')
    });
  }
/*
  currency_object: any = [
    { 
    "r030":36,"txt":"Австралійський долар","rate":24.4351,"cc":"AUD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":124,"txt":"Канадський долар","rate":27.0979,"cc":"CAD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":156,"txt":"Юань Женьміньбі","rate":5.2598,"cc":"CNY","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":203,"txt":"Чеська крона","rate":1.6875,"cc":"CZK","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":208,"txt":"Данська крона","rate":5.3474,"cc":"DKK","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":344,"txt":"Гонконгівський долар","rate":4.6628,"cc":"HKD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":348,"txt":"Форинт","rate":0.107365,"cc":"HUF","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":356,"txt":"Індійська рупія","rate":0.44505,"cc":"INR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":360,"txt":"Рупія","rate":0.0024792,"cc":"IDR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":376,"txt":"Новий ізраїльський шекель","rate":10.0309,"cc":"ILS","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":392,"txt":"Єна","rate":0.27103,"cc":"JPY","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":398,"txt":"Теньге","rate":0.081597,"cc":"KZT","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":410,"txt":"Вона","rate":0.027414,"cc":"KRW","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":484,"txt":"Мексиканське песо","rate":2.0757,"cc":"MXN","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":498,"txt":"Молдовський лей","rate":2.0547,"cc":"MDL","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":554,"txt":"Новозеландський долар","rate":22.7658,"cc":"NZD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":578,"txt":"Норвезька крона","rate":3.4257,"cc":"NOK","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":643,"txt":"Російський рубль","rate":0.46844,"cc":"RUB","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":702,"txt":"Сінгапурський долар","rate":27.4004,"cc":"SGD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":710,"txt":"Ренд","rate":1.9029,"cc":"ZAR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":752,"txt":"Шведська крона","rate":3.5439,"cc":"SEK","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":756,"txt":"Швейцарський франк","rate":40.8793,"cc":"CHF","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":818,"txt":"Єгипетський фунт","rate":1.1834,"cc":"EGP","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":826,"txt":"Фунт стерлінгів","rate":45.7821,"cc":"GBP","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":840,"txt":"Долар США","rate":36.5686,"cc":"USD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":933,"txt":"Білоруський рубль","rate":13.2919,"cc":"BYN","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":944,"txt":"Азербайджанський манат","rate":21.5426,"cc":"AZN","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":946,"txt":"Румунський лей","rate":8.0761,"cc":"RON","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":949,"txt":"Турецька ліра","rate":1.8655,"cc":"TRY","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":960,"txt":"СПЗ (спеціальні права запозичення)","rate":49.1593,"cc":"XDR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":975,"txt":"Болгарський лев","rate":20.3713,"cc":"BGN","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":978,"txt":"Євро","rate":39.8287,"cc":"EUR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":985,"txt":"Злотий","rate":8.785,"cc":"PLN","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":12,"txt":"Алжирський динар","rate":0.27031,"cc":"DZD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":50,"txt":"Така","rate":0.34176,"cc":"BDT","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":51,"txt":"Вірменський драм","rate":0.09458,"cc":"AMD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":214,"txt":"Домініканське песо","rate":0.67228,"cc":"DOP","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":364,"txt":"Іранський ріал","rate":0.00087068,"cc":"IRR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":368,"txt":"Іракський динар","rate":0.027915,"cc":"IQD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":417,"txt":"Сом","rate":0.41783,"cc":"KGS","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":422,"txt":"Ліванський фунт","rate":0.002438,"cc":"LBP","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":434,"txt":"Лівійський динар","rate":7.6759,"cc":"LYD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":458,"txt":"Малайзійський ринггіт","rate":8.1948,"cc":"MYR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":504,"txt":"Марокканський дирхам","rate":3.6257,"cc":"MAD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":586,"txt":"Пакистанська рупія","rate":0.12892,"cc":"PKR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":682,"txt":"Саудівський ріял","rate":9.7498,"cc":"SAR","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":704,"txt":"Донг","rate":0.0015584,"cc":"VND","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":764,"txt":"Бат","rate":1.07161,"cc":"THB","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":784,"txt":"Дирхам ОАЕ","rate":9.9585,"cc":"AED","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":788,"txt":"Туніський динар","rate":12.0181,"cc":"TND","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":860,"txt":"Узбецький сум","rate":0.0032105,"cc":"UZS","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":901,"txt":"Новий тайванський долар","rate":1.18911,"cc":"TWD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":934,"txt":"Туркменський новий манат","rate":10.4482,"cc":"TMT","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":941,"txt":"Сербський динар","rate":0.34232,"cc":"RSD","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":972,"txt":"Сомоні","rate":3.3504,"cc":"TJS","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":981,"txt":"Ларі","rate":14.6673,"cc":"GEL","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":986,"txt":"Бразильський реал","rate":7.3434,"cc":"BRL","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":959,"txt":"Золото","rate":73316.75,"cc":"XAU","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":961,"txt":"Срібло","rate":872.35,"cc":"XAG","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":962,"txt":"Платина","rate":39680.22,"cc":"XPT","exchangedate":"15.05.2023"
     }
    ,{ 
    "r030":964,"txt":"Паладій","rate":57259.11,"cc":"XPD","exchangedate":"15.05.2023"
     }
]
*/
}
