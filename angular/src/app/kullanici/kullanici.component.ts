import { sonuc } from './../models/sonuc';
import { ApiService } from './../services/api.service';
import { kullanicilar } from './../models/kullanicilar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css']
})
export class KullaniciComponent implements OnInit {

  cevap:string;
  ilceGosterim:boolean=false;
  kullanicim:kullanicilar=new kullanicilar();
  sonucum:sonuc=new sonuc();
  girisDurum:string;
  girisSonuc:boolean=false;
  constructor(
    public apiServis: ApiService,
    public router:Router

  ) { }

  ngOnInit() {
  }

  
  kullaniciKayit(){
    this.apiServis.kullaniciEkle(this.kullanicim).subscribe((s:sonuc) =>{
     this.sonucum.mesaj="kayıt Başarılı";
     this.sonucum.islem=true;
    }, err => {
     console.log("Başarısız.. "+Error);
     this.sonucum.mesaj="kayıt Başarısız";
     this.sonucum.islem=true;
   });
 
     }

     kullaniciGiris(mail:string,parola:string){
       this.apiServis.kullaniciGiris(mail,parola).subscribe((k:kullanicilar)=>{
        this.cevap="Giriş Başarılı";
        console.log(k);
        localStorage.clear();
        try{
          if(k.adSoyad!="")
        localStorage.setItem("user", JSON.stringify(k));
        location.pathname="urunListele";
      }
      catch{
        this.girisDurum="Giriş Başarısız..";
        this.girisSonuc=true;
        console.log("başaramadın");
      }
       })
     }
}
