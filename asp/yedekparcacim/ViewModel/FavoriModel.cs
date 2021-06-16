using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace yedekparcacim.ViewModel
{
    public class FavoriModel
    {
        public int FavoriId { get; set; }
        public int FavoriUrunId { get; set; }
        public int FavoriKullaniciId { get; set; }
        public System.DateTime FavoriTarih { get; set; }
        public UrunKayitModel urunler { get; set; }
    }
}