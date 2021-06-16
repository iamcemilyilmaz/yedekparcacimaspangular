using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using yedekparcacim.Models;
using yedekparcacim.ViewModel;

namespace yedekparcacim.Controllers
{
    public class ServisController : ApiController
    {
        db01Entities1 db = new db01Entities1();
        SonucModel sonuc = new SonucModel();
        #region İsletme

        
        [HttpGet]
        [Route("api/isletmeliste")]
        public List<IsletmeModel> isletmeListe()
        {

            
                List<IsletmeModel> liste = db.Isletme.Select(x => new
                IsletmeModel()
                {
                    isletmeId = x.isletmeId,
                    adres = x.adres,
                    isletmeIsim = x.isletmeIsim,
                    kategori = x.kategori,
                    mail = x.mail,
                    parola = x.parola,
                    TelNo = x.TelNo,
                }).ToList();

                return liste;

        }

        [HttpGet]
        [Route("api/isletmelistebyId/{Id}")]
        public IsletmeModel isletmeListebyId(int Id)
        {

            IsletmeModel liste = db.Isletme.Where(s=>s.isletmeId==Id).Select(x => new
            IsletmeModel()
            {
                isletmeId = x.isletmeId,
                adres = x.adres,
                isletmeIsim = x.isletmeIsim,
                kategori = x.kategori,
                mail = x.mail,
                parola = x.parola,
                TelNo = x.TelNo,
            }).FirstOrDefault();

            return liste;

        }

        [HttpGet]
        [Route("api/isletmeGiris/{mail}/{parola}")]
        public IsletmeModel isletmeGiris(string mail, string parola)
        {


            IsletmeModel liste = db.Isletme.Where(s => s.mail == mail && s.parola == parola).Select(x => new
                IsletmeModel()
            {
                isletmeId = x.isletmeId,
                adres = x.adres,
                isletmeIsim = x.isletmeIsim,
                kategori = x.kategori,
                mail = x.mail,
                parola = x.parola,
                TelNo = x.TelNo,
            }).FirstOrDefault();

            return liste;

        }

        [HttpPost]
        [Route("api/IsletmeEkle")]
        public SonucModel IsletmeEkle(IsletmeModel model)
        {

            Isletme yeni = new Isletme();
            yeni.isletmeId = model.isletmeId;
            yeni.adres = model.adres;
            yeni.isletmeIsim = model.isletmeIsim;
            yeni.kategori = model.kategori;
            yeni.mail = model.mail;
            yeni.parola = model.parola;
            yeni.TelNo = model.TelNo;

            db.Isletme.Add(yeni);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "İşletme Eklendi";

            return sonuc;
        }


        [HttpDelete]
        [Route("api/IsletmeSil/{IsletmeId}")]
        public SonucModel IsletmeSil(int IsletmeId)
        {
            Isletme kayit = db.Isletme.Where(s => s.isletmeId == IsletmeId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "İşletme Bulunamadı!";
                return sonuc;
            }
            db.Isletme.Remove(kayit);
            db.SaveChanges();

            sonuc.islem = true;
            sonuc.mesaj = "İşletme Silindi";
            return sonuc;
        }


        [HttpPut]
        [Route("api/Isletmeduzenle")]
        public SonucModel IsletmeDuzenle(IsletmeModel model)
        {
            Isletme kayit = db.Isletme.Where(s => s.isletmeId == model.isletmeId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kullanıcı Bulunamadı!";
                return sonuc;
            }
            kayit.isletmeId = model.isletmeId;
            kayit.adres = model.adres;
            kayit.isletmeIsim = model.isletmeIsim;
            kayit.kategori = model.kategori;
            kayit.mail = model.mail;
            kayit.parola = model.parola;
            kayit.TelNo = model.TelNo;



            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "İşletme Güncellendi";

            return sonuc;
        }

        #endregion
        #region UrunKayit
        [HttpGet]
        [Route("api/UrunListele")]

        public List<UrunKayitModel> UrunListele()
        {
            List<UrunKayitModel> liste = db.UrunKayit.Select(x => new UrunKayitModel()
            {
                urunId = x.urunId,
                aracmarka = x.aracmarka,
                durum = x.durum,
                marka = x.marka,
                ucret = x.ucret,
                urunisim = x.urunisim,
                isletmeurunId=x.isletmeurunId

            }).ToList();

            foreach (var item in liste)
            {
                item.isletmeler =isletmeListebyId(item.isletmeurunId);
            }
            return liste;

        }

        [HttpGet]
        [Route("api/UrunListelebyIsletme/{id}")]

        public List<UrunKayitModel> UrunListelebyIsletme(int id)
        {
            List<UrunKayitModel> liste = db.UrunKayit.Where(s=>s.isletmeurunId==id).Select(x => new UrunKayitModel()
            {
                urunId = x.urunId,
                aracmarka = x.aracmarka,
                durum = x.durum,
                marka = x.marka,
                ucret = x.ucret,
                urunisim = x.urunisim,
                isletmeurunId = x.isletmeurunId

            }).ToList();

            foreach (var item in liste)
            {
                item.isletmeler = isletmeListebyId(item.isletmeurunId);
            }
            return liste;

        }


        [HttpGet]
        [Route("api/UrunListeleAdres/{adres}")]

        public List<UrunKayitModel> UrunListeleAdres(string adres)
        {
            List<UrunKayitModel> liste = db.UrunKayit.Where(s=> s.Isletme.adres==adres).Select(x => new UrunKayitModel()
            {
                urunId = x.urunId,
                aracmarka = x.aracmarka,
                durum = x.durum,
                marka = x.marka,
                ucret = x.ucret,
                urunisim = x.urunisim,
                isletmeurunId = x.isletmeurunId

            }).ToList();

            foreach (var item in liste)
            {
                item.isletmeler = isletmeListebyId(item.isletmeurunId);
            }
            return liste;

        }

        [HttpGet]
        [Route("api/UrunListeleKategori/{kategori}")]

        public List<UrunKayitModel> UrunListeleKategori(string kategori)
        {
            List<UrunKayitModel> liste = db.UrunKayit.Where(s => s.Isletme.kategori == kategori).Select(x => new UrunKayitModel()
            {
                urunId = x.urunId,
                aracmarka = x.aracmarka,
                durum = x.durum,
                marka = x.marka,
                ucret = x.ucret,
                urunisim = x.urunisim,
                isletmeurunId = x.isletmeurunId

            }).ToList();

            foreach (var item in liste)
            {
                item.isletmeler = isletmeListebyId(item.isletmeurunId);
            }
            return liste;

        }



        [HttpGet]
        [Route("api/UrunListelebyId/{id}")]

        public UrunKayitModel UrunListelebyId(int id)
        {
            UrunKayitModel liste = db.UrunKayit.Where(s => s.urunId == id).Select(x => new UrunKayitModel()
            {
                urunId = x.urunId,
                aracmarka = x.aracmarka,
                durum = x.durum,
                marka = x.marka,
                ucret = x.ucret,
                urunisim = x.urunisim,
                isletmeurunId = x.isletmeurunId,
         

            }).FirstOrDefault();
             
           
                liste.isletmeler = isletmeListebyId(liste.isletmeurunId);
            
         

            return liste;

        }

        [HttpGet]
        [Route("api/UrunListeleKategoriandAdres/{kategori}/{adres}")]

        public List<UrunKayitModel> UrunListeleKategoriandAdres(string kategori,string adres)
        {
            List<UrunKayitModel> liste = db.UrunKayit.Where(s => s.Isletme.kategori == kategori && s.Isletme.adres == adres).Select(x => new UrunKayitModel()
            {
                urunId = x.urunId,
                aracmarka = x.aracmarka,
                durum = x.durum,
                marka = x.marka,
                ucret = x.ucret,
                urunisim = x.urunisim,
                isletmeurunId = x.isletmeurunId

            }).ToList();

            foreach (var item in liste)
            {
                item.isletmeler = isletmeListebyId(item.isletmeurunId);
            }
            return liste;

        }


        [HttpPost]
        [Route("api/urunekle")]
        public SonucModel urunEkle(UrunKayitModel model)
        {
            
            UrunKayit yeni = new UrunKayit();
            yeni.urunId = model.urunId;
            yeni.aracmarka = model.aracmarka;
            yeni.durum = model.durum;
            yeni.marka = model.marka;
            yeni.ucret = model.ucret;
            yeni.urunisim = model.urunisim;
            yeni.isletmeurunId = model.isletmeurunId;

            db.UrunKayit.Add(yeni);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ürün Eklendi";

            return sonuc;
        }


        [HttpDelete]
        [Route("api/UrunSil/{UrunId}")]
        public SonucModel UrunSil(int UrunId)
        {
            UrunKayit kayit = db.UrunKayit.Where(s => s.urunId == UrunId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Ürün Bulunamadı!";
                return sonuc;
            }

            if (db.Favoriler.Count(s => s.FavoriUrunId == UrunId) > 0)
            {
                List<Favoriler> liste3 = db.Favoriler.Where(s => s.FavoriUrunId == UrunId).ToList();
                db.Favoriler.RemoveRange(liste3);
            }

            db.UrunKayit.Remove(kayit);
            db.SaveChanges();

            sonuc.islem = true;
            sonuc.mesaj = "Ürün Silindi";
            return sonuc;
        }


        [HttpPut]
        [Route("api/Urunduzenle ")]
        public SonucModel UrunDuzenle(UrunKayitModel model)
        {
            UrunKayit kayit = db.UrunKayit.Where(s => s.urunId == model.urunId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kullanıcı Bulunamadı!";
                return sonuc;
            }
            kayit.urunId = model.urunId;
            kayit.aracmarka = model.aracmarka;
            kayit.durum = model.durum;
            kayit.marka = model.marka;
            kayit.ucret = model.ucret;
            kayit.urunisim = model.urunisim;
            


            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ürün Güncellendi";

            return sonuc;
        }

        #endregion
        #region Kullanici
        [HttpGet]
        [Route("api/KullaniciListe")]
        public List<KullanicilarModel> KullanciListe()
        {


            List<KullanicilarModel> liste = db.Kullanicilar.Select(x => new
            KullanicilarModel()
            {
                kullaniciId = x.kullaniciId,
                adSoyad = x.adSoyad,
                mail = x.mail,
                parola = x.parola,
                kullaniciTel = x.kullaniciTel

            }).ToList();

            return liste;

        }

        [HttpGet]
        [Route("api/KullaniciGiris/{mail}/{parola}")]
        public KullanicilarModel KullaniciGiris(string mail , string parola)
        {


            KullanicilarModel liste = db.Kullanicilar.Where(k=>k.mail==mail && k.parola==parola).Select(x => new
            KullanicilarModel()
            {
                kullaniciId = x.kullaniciId,
                adSoyad = x.adSoyad,
                mail = x.mail,
                parola = x.parola,
                kullaniciTel = x.kullaniciTel

            }).FirstOrDefault();

            return liste;

        }



        [HttpPost]
        [Route("api/KullaniciEkle")]
        public SonucModel KullaniciEkle(KullanicilarModel model)
        {

            Kullanicilar yeni = new Kullanicilar();
            yeni.kullaniciId = model.kullaniciId;
            yeni.adSoyad = model.adSoyad;
            yeni.mail = model.mail;
            yeni.parola = model.parola;
            yeni.kullaniciTel = model.kullaniciTel;
           

            db.Kullanicilar.Add(yeni);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Kullanıcı Eklendi";

            return sonuc;
        }

        [HttpDelete]
        [Route("api/KullaniciSil/{KullaniciId}")]
        public SonucModel KullaniciSil(int KullaniciId)
        {
            Kullanicilar kayit = db.Kullanicilar.Where(s => s.kullaniciId == KullaniciId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kullanıcı Bulunamadı!";
                return sonuc;
            }
            db.Kullanicilar.Remove(kayit);
            db.SaveChanges();

            sonuc.islem = true;
            sonuc.mesaj = "Kullanıcı Silindi";
            return sonuc;
        }

        [HttpPut]
        [Route("api/KullaniciDuzenle")]
        public SonucModel KullaniciDuzenle(KullanicilarModel model)
        {
            Kullanicilar kayit = db.Kullanicilar.Where(s => s.kullaniciId == model.kullaniciId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kullanıcı Bulunamadı!";
                return sonuc;
            }
            kayit.kullaniciId = model.kullaniciId;
            kayit.adSoyad = model.adSoyad;
            kayit.mail = model.mail;
            kayit.parola = model.parola;
            kayit.kullaniciTel = model.kullaniciTel;


            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Kullanıcı Güncellendi";

            return sonuc;
        }

        #endregion
        #region Sehir İlce

        [HttpGet]
        [Route("api/sehirListele")]
        public List<sehirModel> sehirListele()
        {
            List<sehirModel> sehirler = db.Sehirler.Select(x => new sehirModel()
            {
                sehirId = x.sehirId,
                sehirIsim = x.sehirIsim
            }).ToList();

            return sehirler;
        }


        [HttpGet]
        [Route("api/ilceListele/sehirID")]
        public List<ilceModel> ilceListele(int sehirID)
        {
            List<ilceModel> ilceler = db.ilceler.Where(s => s.ilceSehirId == sehirID).Select(x => new ilceModel()
            {
                ilceId = x.ilceId,
                ilceIsim = x.ilceIsim,
                ilceSehirId = x.ilceSehirId

            }).ToList();

            return ilceler;
        }


        #endregion
        #region Favoriler
        [HttpPost]
        [Route("api/FavoriEkle")]
        public SonucModel FavoriEkle(FavoriModel model)
        {

            Favoriler yeni = new Favoriler();
            yeni.FavoriId = model.FavoriId;
            yeni.FavoriUrunId= model.FavoriUrunId;
            yeni.FavoriKullaniciId = model.FavoriKullaniciId;
            yeni.FavoriTarih = model.FavoriTarih;
            


            db.Favoriler.Add(yeni);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Favori Eklendi";

            return sonuc;
        }

        [HttpDelete]
        [Route("api/FavoriSil/{FavoriId}")]
        public SonucModel FavoriSil(int FavoriId)
        {
            Favoriler kayit = db.Favoriler.Where(s => s.FavoriId == FavoriId).FirstOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Favoriler Bulunamadı!";
                return sonuc;
            }
            db.Favoriler.Remove(kayit);
            db.SaveChanges();

            sonuc.islem = true;
            sonuc.mesaj = "Favoriler Silindi";
            return sonuc;
        }

        [HttpGet]
        [Route("api/favoriListele/{Id}")]
        public List<FavoriModel> favoriListele(int Id)
        {

            List<FavoriModel> liste = db.Favoriler.Where(s => s.FavoriKullaniciId == Id).Select(x => new
                FavoriModel()
            {
                FavoriId = x.FavoriId,
                FavoriUrunId = x.FavoriUrunId,
                FavoriKullaniciId = x.FavoriKullaniciId,
                FavoriTarih=x.FavoriTarih


            }).ToList();

            foreach (var item in liste)
            {
                item.urunler = UrunListelebyId(item.FavoriUrunId);
            }

            return liste;

        }

        #endregion

    }

}
