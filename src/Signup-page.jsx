import "./signup.css";
import LOGO from "./assets/img/tuneland-logo.png";
import GAMBAR from "./assets/img/gitaris.png";

const Signup = () => {
  return (
    <section className="login d-flex">
      <div className="login-left w-50 h-100">
        <div className="logo-tunelend top-0 start-0 ">
          <img src={LOGO} alt="" />
        </div>
        <div className="gambar w-100 d-flex justify-content-center align-items-center ">
          <img src={GAMBAR} alt="" />
        </div>

        <div className="footer w-75">
          <p className="text-light mt-5">
            Lanjutkan hobi anda dengan solusi dari kami, sewa dan sewakan alat
            musik yang anda miliki.
          </p>
        </div>
      </div>
      <div className="login-right w-50 h-100">
        <div className="d-flex justify-content-center align-items-center h-100 ">
          <div className="col-7">
            <div className="header">
              <h1>Selamat datang,</h1>
              <p>Silahkan daftar menggunakan email dan password anda</p>
            </div>

            <div className="login-form">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="masukkan email anda"
              />

              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="masukkan password"
              />
              <label htmlFor="konfirmasi" className="form-label">
                Konfirmasi Password
              </label>
              <input
                type="password"
                className="form-control"
                id="konfirmasi"
                placeholder="masukkan password"
              />
              <button className="signin text-light">Masuk</button>
              <p className="text-center">
                Dengan mendaftar, Anda menyetujui{" "}
                <span>Persyaratan Layanan</span> dan{" "}
                <span>Kebijakan Privasi </span> kami.
              </p>
              <div className="text-center">
                <span className=" d-inline ">
                  Sudah punya akun?{" "}
                  <a href="#" className="signup d-inline">
                    masuk
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
