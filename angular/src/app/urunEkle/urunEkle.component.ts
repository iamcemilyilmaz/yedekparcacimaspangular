import { sonuc } from './../models/sonuc';
import { UrunKayit } from './../models/UrunKayit';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urunEkle',
  templateUrl: './urunEkle.component.html',
  styleUrls: ['./urunEkle.component.css']
})
export class UrunEkleComponent implements OnInit {

  isletmeID:number;
  urun:UrunKayit=new UrunKayit();
  sonucum:sonuc=new sonuc();
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit() {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.isletmeID=user.isletmeId;
    this.rolKontrol();
  }

  rolKontrol(){ 
    if(this.isletmeID>1){} 
  else{ location.pathname=""; }  
}
  urunEkle(){
    this.urun.isletmeurunId=this.isletmeID;
    this.apiServis.urunEkle(this.urun).subscribe((s:sonuc)=>{
      this.sonucum.islem=true;
      this.sonucum.mesaj="Ürününüz Başarıyla Paylaşıldı";
    })
  }

}
