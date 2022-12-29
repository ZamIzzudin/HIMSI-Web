import React from "react";
import { Link } from 'react-router-dom'

import Logo from "../assets/img/logohimsi.png";
import Struktur from "../assets/img/struktur-organisasi.png";

import "../styles/pages/Profile.css";

const Profile = () => {
  return (
    <div class='container'>
      <div class='heading'>
        <h1 className='himsi'>Himpunan Mahasiswa Sistem Informasi</h1>
        <h2 className='namauniv'>UIN Syarif Hidayatulah Jakarta</h2>
      </div>

      <div class='logo'>
        <img src={Logo} className="profile-logo" alt="Logo" />
      </div>


      {/* -------------------------- Bagian Visi ------------------------- */}
      <div class='visi'>
        <h1 className="visi-judul"> <span class="dot"></span> Visi <span class="dot"></span> </h1>
        <p className='visi-p'> Mewujudkan HIMSI sebagai wadah pemersatu yang kolaboratif dan
          adaptif guna meningkatkan potensi, kemampuan, dan wawasan, serta kepribadian
          mahasiswa SI.</p>
      </div>


      {/*---------------------------- Bagian Misi-------------------- */}
      <div class='misi'>
        <h1 className="misi-judul"> <span class="dot"></span> Misi <span class="dot"></span> </h1>
        <br></br>

        {/*--------------- Bagian Misi 1 ---------------------- */}
        <div class="flex-container">
          <div className='misi-number'>1</div>
          <p className='misi-paragraf'>Menjadikan kerjasama tim dan kolaborasi sebagai pondasi dalam menyelenggarakan maupun mengikuti segala kegiatan HIMSI maupun luar HIMSI.</p>
        </div>
        <br></br>


        {/*--------------- Bagian Misi 2 ---------------------*/}
        <div class="flex-container">
          <div className='misi-number'>2</div>
          <p className='misi-paragraf' >Mengoptimalkan potensi mahasiswa HIMSI dengan penyaluran minat bakat mahasiswa sesuai tujuan yang akan dicapai.</p>
        </div>
        <br></br>


        {/*---------------- Bagian Misi 3 -------------------- */}
        <div class="flex-container">
          <div className='misi-number'>3</div>
          <p className='misi-paragraf'>Meningkatkan rasa kepedulian anggota HIMSI untuk terjun langsung ke masyarakat.</p>
        </div>
        <br></br>


        {/*---------------- Bagian Misi 4----------------------- */}
        <div class="flex-container">
          <div className='misi-number'>4</div>
          <p className='misi-paragraf'>Aktif menerima, mengevaluasi, dan menyampaikan aspirasi kepada pihak terkait sesuai dengan kebutuhan.</p>
        </div>
        <br></br>


        {/*----------------- Bagian Misi 5 ----------------------*/}
        <div class="flex-container">
          <div className='misi-number'>5</div>
          <p className='misi-paragraf'>Menjalin silaturahmi yang baik antar keluarga besar HIMSI, serta para individu dan organisasi yang terlibat di dalamnya. </p>
        </div>
      </div>

      {/*------------------------- Bagian Bidang dan Divisi------------------------- */}

      <div class='bidang'>
        <h1 className="bidang-judul"> Bidang & Divisi </h1>
        <br></br>
      </div>

      {/*------------------------ Bagian Struktur Organisasi---------------------------- */}

      <div class='struktur'>
        <h1 className='struktur-judul'> <span class="dot"></span> Struktur Organisasi <span class="dot"></span> </h1>
      </div>

      <div class="logo">
        <img src={Struktur} className="struktur-logo" alt="Logo" />
      </div>


      {/*-------------------------- Bagian Struktur Anggota ----------------------------*/}
      <div className="cta-box">
        <button className="btn">
          <Link to={`/struktur-anggota`}>Read More ➜</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
