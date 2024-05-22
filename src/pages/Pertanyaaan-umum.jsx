import LOGO from "../assets/img/tuneland-logo.png";
import avatar from "../assets/img/avatar.png";
import infinit from "../assets/img/Infinit.png";
import kampusmerdeka from "../assets/img/kampusmerdeka.png";
import GAMBAR from "../assets/img/FAQ.png";
import "./Pertanyaan-umum.css";

export const FAQ = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-nav nav d-flex">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LOGO} alt="logotunelend" width="110" height="40" />
          </a>
          <div className="d-flex" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <a
                  className="nav-link text-navbar"
                  aria-current="page"
                  href="#"
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-navbar" href="/tentangkami">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-navbar" href="#">
                  Pertanyaan Umum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-navbar" href="#">
                  Penyewa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-navbar" href="#">
                  Pemilik
                </a>
              </li>

              <a className="icon text-navbar mb-2 mt-2 mb-lg-0 " href="#">
                <img src={avatar} alt="" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
      {/* end nav */}
      {/* main */}
      <section className=" main-container p-3 ">
        <div className="wrapper">
          <div className="faq  mb-3">
            <h1 className="fw-bold mb-3">Pertanyaan Umum</h1>
            <input type="checkbox" id="faq-head" />
            <label htmlFor="faq-head">
              Bagaimana cara pemilik alat musik untuk menyewakan alat musik
              mereka?
            </label>
            <div className="faq-text">
              <p className="p-3">
                Pemilik alat musik dapat mendaftar ke TuneLend secara gratis
                serta menambahkan daftar alat musik yang mereka miliki, dan
                menetapkan harga sewa. Setelah diverifikasi, alat musik mereka
                akan tersedia untuk disewakan.
              </p>
            </div>
          </div>
          <div className="faq mb-3">
            <input type="checkbox" id="faq-head2" />
            <label htmlFor="faq-head2">
              Apa manfaat bagi penyewa alat musik yang menggunakan TuneLend?
            </label>
            <div className="faq-text">
              <p className="p-3">
                Penyewa dapat dengan mudah menemukan berbagai alat musik yang
                mereka butuhkan dengan harga yang lebih terjangkau.
              </p>
            </div>
          </div>
          <div className="faq mb-3">
            <input type="checkbox" id="faq-head3" />
            <label htmlFor="faq-head3">
              Bagaimana TuneLend menjaga keamanan dan privasi informasi
              pengguna?
            </label>
            <div className="faq-text">
              <p className="p-3 ">
                TuneLend mengutamakan keamanan dan privasi informasi pengguna
                dengan menerapkan berbagai langkah perlindungan, termasuk
                enkripsi data, verifikasi pengguna, dan pemantauan aktivitas.
                Selain itu, TuneLend tidak akan membagikan informasi pribadi
                pengguna kepada pihak ketiga tanpa persetujuan mereka, sesuai
                dengan kebijakan privasi yang ketat.
              </p>
            </div>
          </div>
        </div>

        <div className="img-faq">
          <img src={GAMBAR} alt="" />
        </div>
      </section>
      {/* end main */}

      {/* footer */}
      <section
        className="align-items-center bekgron-gambar bekgron-gambar-fixed"
        id="footer"
      >
        <div className="container ratakiri font-putih">
          <div className="row">
            <div className="col-5">
              {" "}
              <img src={LOGO} alt="logotunelend" width="110" height="40" />{" "}
              <br />
              TuneLend merupakan website yang membantu masyarakat kota Malang
              untuk melanjutkan hobi bermusik dengan solusi dari kami, sewa dan
              sewakan alat musik yang anda miliki.
            </div>
            <div className="col">
              <br />
              Navigasi
              <a className="nav-link" href="#">
                Beranda
              </a>
              <a className="nav-link" href="#">
                Tentang
              </a>
              <a className="nav-link" href="#">
                Pertanyaan Umum
              </a>
            </div>
            <div className="col">
              <br />
              Ikuti kami
              <a className="nav-link" href="#">
                Instagram
              </a>
              <a className="nav-link" href="#">
                Tiktok
              </a>
              <a className="nav-link" href="#">
                X
              </a>
            </div>
            <div className="col">
              <br />
              Hubungi kami
              <a className="nav-link" href="#">
                +62 8212-3476-131 (Admin)
              </a>
              <a className="nav-link" href="#">
                tunelend@gmail.com
              </a>
            </div>
          </div>
          <img
            src={kampusmerdeka}
            className="img-fluid rounded-start gambar-kecil"
            alt="kampusmerdeka"
          />
          <img
            src={infinit}
            className="img-fluid rounded-start gambar-kecilinfinit"
            alt="kampusmerdeka"
          />
          <hr />
          <div className="ratatengah">© 2024 Semar(T). All Rights Reserved</div>
          <br />
        </div>
      </section>
    </section>
  );
};
