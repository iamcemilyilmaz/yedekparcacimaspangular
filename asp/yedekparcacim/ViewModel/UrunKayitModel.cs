using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace yedekparcacim.ViewModel
{
    public class UrunKayitModel
    {

        public int urunId { get; set; }
        public string aracmarka { get; set; }
        public string durum { get; set; }
        public string marka { get; set; }
        public int ucret { get; set; }
        public string urunisim { get; set; }
        public int isletmeurunId { get; set; }

        public IsletmeModel isletmeler { get; set; }

    }
}