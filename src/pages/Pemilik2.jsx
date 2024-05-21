import LOGO from "../assets/img/tuneland-logo.png";
import avatar from "../assets/img/avatar.png";
import infinit from "../assets/img/Infinit.png";
import kampusmerdeka from "../assets/img/kampusmerdeka.png";
import "./Pemilik2.css";

export const Pemilik2 = () => {
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
      <section className=" main-container">
        <div className="welcome-title ">
          <h2>
            Selamat datang, <span>Aca!</span>
          </h2>
        </div>

        <div className="tabs-item d-flex">
          <ul className="list-item d-flex ">
            <a href="/pemilik">
              <li>Alat Musik Anda</li>
            </a>
            <a href="#">
              <li className="active">Pengajuan Sewa</li>
            </a>
          </ul>
        </div>

        <div className="content p-5 rounded">
          <div className="title-content">
            <h4 className="fw-bold">Pengajuan Sewa Alat Musik</h4>
            <p className="text-secondary">
              Pengajuan sewa yang perlu di verifikasi
            </p>
          </div>

          <div className="data d-grid">
            <div className="row list">
              <p className="col name-list fw-bold">Marchanda Balqis</p>
              <button className="col btn-list ">Detail</button>
            </div>
            <div className="row list">
              <p className="col name-list fw-bold">Adinda Eka M.W</p>
              <button className="col btn-list">Detail</button>
            </div>
            <div className="row list">
              <p className="col name-list fw-bold">Unima Hia</p>
              <button className="col btn-list">Detail</button>
            </div>
            <div className="row list">
              <p className="col name-list fw-bold">Angel Maria</p>
              <button className="col btn-list">Detail</button>
            </div>
            <div className="row list">
              <p className="col name-list fw-bold">Khabil Putra P</p>
              <button className="col btn-list">Detail</button>
            </div>
            <div className="row list">
              <p className="col name-list fw-bold">Fikri Agus T</p>
              <button className="col btn-list">Detail</button>
            </div>
          </div>
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
