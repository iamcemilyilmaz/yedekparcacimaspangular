using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace yedekparcacim.ViewModel
{
    public class KullanicilarModel
    {
        public int kullaniciId { get; set; }
        public string adSoyad { get; set; }
        public string mail { get; set; }
        public string parola { get; set; }
        public string kullaniciTel { get; set; }
    }
}