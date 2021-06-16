import { Favoriler } from './../models/Favoriler';
import { ApiService } from './../services/api.service';
import { UrunKayit } from './../models/UrunKayit';
import { sehirler } from './../models/sehir';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urunListele',
  templateUrl: './urunListele.component.html',
  styleUrls: ['./urunListele.component.scss']
})
export class UrunListeleComponent implements OnInit {
  sehir:sehirler[];
  urun:UrunKayit[];
  favorim:Favoriler=new Favoriler();
  isletmeIsim:string;
  kategori:string;
  kullaniciID:number;
  x:string="konum";
  y:string="kategori";
  constructor( 
      public apiServis: ApiService,
    ) { }

  ngOnInit() {
    this.sehirListe();
    this.urunListele();
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.kullaniciID=user.kullaniciId;
    console.log("hey: "+user)
    this.rolKontrol();
    this.kategori=user.kategori;
    
   // console.log(this.isletmeIsim);
    //console.log(this.kategori);

  }

  rolKontrol(){ 
    if(this.kullaniciID>1){} 
  else{ location.pathname="IsletmeUrunListele"; }  
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

  favoriEkle(id:number){
    var tarih = new Date();
   this.favorim.FavoriKullaniciId=this.kullaniciID;
   this.favorim.FavoriTarih = tarih.getDate().toString();
   this.favorim.FavoriUrunId=id;
   this.apiServis.favoriEkle(this.favorim).subscribe((s:Favoriler)=>{
     console.log("favori Eklenmiştir..");
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
