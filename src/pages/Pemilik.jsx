import LOGO from "../assets/img/tuneland-logo.png";
import DELETE from "../assets/img/trash.png";
import avatar from "../assets/img/avatar.png";
import infinit from "../assets/img/Infinit.png";
import kampusmerdeka from "../assets/img/kampusmerdeka.png";
import "./Pemilik.css";

export const Pemilik = () => {
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
            <a href="#">
              <li className="active">Alat Musik Anda</li>
            </a>
            <a href="/pemilik2">
              <li>Pengajuan Sewa</li>
            </a>
          </ul>
        </div>

        <div className="table p-5 rounded">
          <div className="2btn d-flex justify-content-end mb-5">
            <button className="btn bg-primary rounded text-light me-3  ps-4 pe-4">
              + Add Item
            </button>
            <button className="btn bg-danger rounded text-light  ps-3 pe-3">
              <img src={DELETE} alt="" />
            </button>
          </div>
          <div className="data">
            <table className="data-table">
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>ID</th>
                <th>Nama Barang</th>
                <th>Tersedia</th>
                <th>Nama Penyewa</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>001</td>
                <td>Gitar Klasik C80</td>
                <td>Tersedia</td>
                <td>Marchanda Balqis</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>002</td>
                <td>Gitar Klasik C80</td>
                <td>Tersedia</td>
                <td>Adinda Eka M.W</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>003</td>
                <td>Gitar Klasik C80</td>
                <td>Tersedia</td>
                <td>Unima Hia</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>004</td>
                <td>Gitar Klasik C80</td>
                <td>Tersedia</td>
                <td>Angel Maria</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>005</td>
                <td>Gitar Klasik C80</td>
                <td>Tersedia</td>
                <td>Khabil Putra P.</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>006</td>
                <td>Gitar Klasik C80</td>
                <td>Tersedia</td>
                <td>Fikri Agus Tiyanto</td>
              </tr>
            </table>
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
