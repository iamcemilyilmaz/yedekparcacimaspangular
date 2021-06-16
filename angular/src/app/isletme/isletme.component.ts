import { sonuc } from './../models/sonuc';
import { Isletme } from './../models/Isletme';
import { ilceler } from './../models/ilce';
import { sehirler } from './../models/sehir';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isletme',
  templateUrl: './isletme.component.html',
  styleUrls: ['./isletme.component.css']
})
export class IsletmeComponent implements OnInit {
  frm:FormGroup;
  sehir:sehirler[];
  ilce:ilceler[];
  isletmem:Isletme=new Isletme();
  isletmeGiris:Isletme=new Isletme;
  ilceGosterim:boolean=false;
  girisDurum:string;
  girisSonuc:boolean=false;
  sonuc:string="";
  islem:boolean=false;
  constructor(
    public apiServis: ApiService,
    public router:Router
  ) { }

  ngOnInit() {
    this.sehirListe();
  }

  sehirListe(){
    this.apiServis.sehirListele().subscribe((d:sehirler[])=>{
this.sehir=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  isletmeKayit(){
   this.apiServis.isletmeEkle(this.isletmem).subscribe((s:sonuc) =>{
    this.sonuc="Kayıt Başarılı";
    this.islem=true;
   }, err => {
    console.log("Başarısız.. "+Error);

  });

    }
 
  

  ilceListe(sehirId:number){
    this.apiServis.ilceListele(sehirId).subscribe((d:ilceler[])=>{
this.ilce=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  girisYap(mail:string,parola:string){
    this.apiServis.isletmeGiris(mail,parola).subscribe((d:Isletme)=>{
      this.isletmeGiris=d;
      try{
      if(this.isletmeGiris.isletmeIsim!=""){
      localStorage.setItem("user", JSON.stringify(d));
      location.pathname="IsletmeUrunListele";
    }
  }
    catch{
this.girisDurum="Giriş Başarısız..";
this.girisSonuc=true;
console.log("başaramadın");
    }
    //  this.router.navigate(["IsletmeUrunListele"]);
      
      console.log(d);
          }, err => {
            console.log("Başarısız.. "+Error);
      
          });
        }
   
}
