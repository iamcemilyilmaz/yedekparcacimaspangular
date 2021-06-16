import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favoriler } from '../models/Favoriler';
import { Isletme } from '../models/Isletme';
import { kullanicilar } from '../models/kullanicilar';
import { UrunKayit } from '../models/UrunKayit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 apiUrl:"https://localhost:44305/api/";
  constructor(
    public http: HttpClient
  ) { }

  //LİSTELEMELER
  isletmeListele(){
    return this.http.get("isletmeListele");
  }

  isletmeListelebyId(isletmeid:number){
    return this.http.get("isletmeListelebyId/"+isletmeid);
  }
/////////////////////////////////////
  UrunListele(){
    return this.http.get("https://localhost:44305/api/UrunListele");
  }

  UrunListeleKategori(kategori:string){
    return this.http.get("https://localhost:44305/api/UrunListeleKategori/"+kategori);
  }

  UrunListeleAdres(adres:string){
    return this.http.get("https://localhost:44305/api/UrunListeleAdres/"+adres);
  }

  UrunListeleIsletme(id:number){
    return this.http.get("https://localhost:44305/api/UrunListelebyIsletme/"+id);
  }

  UrunListeleKategoriandAdres(kategori:string,adres:string){
    return this.http.get("https://localhost:44305/api/UrunListeleKategoriandAdres/"+kategori+"/"+adres);
  }

  isletmeGiris(mail:string,parola:string){
    return this.http.get("https://localhost:44305/api/isletmeGiris/"+mail+"/"+parola);
  }

  kullaniciGiris(mail:string,parola:string){
    return this.http.get("https://localhost:44305/api/KullaniciGiris/"+mail+"/"+parola);
  }

  KullaniciListele(){
    return this.http.get("KullaniciListele");
  }

  sehirListele(){
   return this.http.get("https://localhost:44305/api/sehirListele");
  }
  ////////////////////

  ilceListele(sehirId:number){
    return this.http.get("https://localhost:44305/api/ilceListele/sehirID?sehirID="+sehirId);
   }
   favoriListele(kullaniciId:number){
    return this.http.get("https://localhost:44305/api/favoriListele/"+kullaniciId);
   }

   
   isletmeEkle(isletme:Isletme){
    return this.http.post("https://localhost:44305/api/IsletmeEkle",isletme);
   }

   favoriEkle(favori:Favoriler){
    return this.http.post("https://localhost:44305/api/favoriEkle",favori);
   }

   kullaniciEkle(kullanici:kullanicilar){
    return this.http.post("https://localhost:44305/api/kullaniciEkle",kullanici);
   }

   urunEkle(urun:UrunKayit){
    return this.http.post("https://localhost:44305/api/urunEkle",urun);
   }

   isletmeGuncelle(isletme:Isletme){
    return this.http.put("IsletmeGuncelle",isletme);
   }

   kullaniciGuncelle(kullanici:kullanicilar){
    return this.http.put("kullaniciGuncelle",kullanici);
   }

   urunGuncelle(urun:UrunKayit){
    return this.http.put("Urunduzenle",urun);
   }

   isletmeSil(uyeid:number){
    return this.http.delete("IsletmeSil/"+uyeid);
   }
   kullaniciSil(uyeid:number){
    return this.http.delete("kullaniciSil/"+uyeid);
   }
   favoriSil(uyeid:number){
    return this.http.delete("https://localhost:44305/api/favoriSil/"+uyeid);
   }
   urunSil(urunID:number){
    return this.http.delete("https://localhost:44305/api/urunSil/"+urunID);
   }
    
  }
