import { sonuc } from './../models/sonuc';
import { UrunKayit } from './../models/UrunKayit';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urunlerim',
  templateUrl: './urunlerim.component.html',
  styleUrls: ['./urunlerim.component.css']
})
export class UrunlerimComponent implements OnInit {

  isletmeId:number;
  urun:UrunKayit[];
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit() {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.isletmeId=user.isletmeId;
    this.rolKontrol();
    this.urunListele();
  }

  
  rolKontrol(){ 
    if(this.isletmeId>1){} 
  else{ location.pathname=""; }  
}
  urunListele(){
    this.apiServis.UrunListeleIsletme(this.isletmeId).subscribe((x:UrunKayit[])=>{
this.urun=x;
console.log(x);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }
  urunSil(id:number){
this.apiServis.urunSil(id).subscribe((s:sonuc)=>{
  s.mesaj="başarılı";
  console.log(s.mesaj);
  this.urunListele();
});
  }
}
