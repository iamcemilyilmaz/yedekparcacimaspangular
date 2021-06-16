import { UrunKayit } from './../models/UrunKayit';
import { sehirler } from './../models/sehir';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isletmeUrunlistele',
  templateUrl: './isletmeUrunlistele.component.html',
  styleUrls: ['./isletmeUrunlistele.component.css']
})
export class IsletmeUrunlisteleComponent implements OnInit {
  sehir:sehirler[];
  urun:UrunKayit[];
  isletmeIsim:string;
  isletmeID:number;
  kategori:string;
  x:string="konum";
  y:string="kategori";
  constructor( 
      public apiServis: ApiService,
    ) { }

  ngOnInit() {
  
    var user: any  = JSON.parse(localStorage.getItem("user"));

    this.sehirListe();
    this.urunListele();
    this.isletmeIsim=user.isletmeIsim;
    this.isletmeID=user.isletmeId;
    this.rolKontrol();
  
    this.kategori=user.kategori;
    this.rolKontrol();
    console.log(this.isletmeIsim);
    console.log(this.kategori);

  }

  rolKontrol(){ 
    if(this.isletmeID>1){} 
  else{ location.pathname=""; }  
}

  sehirListe(){
    this.apiServis.sehirListele().subscribe((d:sehirler[])=>{
this.sehir=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  urunListele(){
    this.apiServis.UrunListele().subscribe((x:UrunKayit[])=>{
this.urun=x;
console.log(x);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  filtreleme(x,y){

    if(x!="konum" && y=="kategori"){ this.urunListelebyAdres(x); }
    if(x=="konum" && y!="kategori"){ this.urunListelebyKategori(y); }
    if(x!="konum" && y!="kategori"){ this.urunListelebyKategoriandAdres(y,x); }

  }
  urunListelebyAdres(sehir:string){
    this.apiServis.UrunListeleAdres(sehir).subscribe((x:UrunKayit[])=>{
this.urun=x;
console.log(x);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  
  urunListelebyKategori(kategori:string){
    this.apiServis.UrunListeleKategori(kategori).subscribe((x:UrunKayit[])=>{
this.urun=x;
console.log(x);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }
    urunListelebyKategoriandAdres(kategori:string,adres:string){
      this.apiServis.UrunListeleKategoriandAdres(kategori,adres).subscribe((x:UrunKayit[])=>{
  this.urun=x;
  console.log(x);
      }, err => {
        console.log("Başarısız.. "+Error);
  
      });
    }
  
}
