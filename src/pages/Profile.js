import React from 'react'
import Logo from '../assets/img/logohimsi.png'
import Struktur from '../assets/img/struktur.png'
import '../styles/pages/Profile.css'


const Profile = () => {
    return (
        <div class='container'>
            <div class='heading'>
                <h1 className='himsi'>Himpunan Mahasiswa Sistem Informasi</h1>
                <br></br>   
                <h2 className='Univ'>UIN Syarif Hidayatulah Jakarta</h2>
            </div>

            <div class='logo'>
                <img src= {Logo} className="profile-logo" alt="Logo"/>
            </div>


            {/* -------------------------- Bagian Visi ------------------------- */}
            <div class='visi'>
                <h1> <span class="dot"></span> Visi <span class="dot"></span> </h1>
                <br></br>                     
                <p className='visi-p'> Mewujudkan HIMSI sebagai wadah pemersatu yang kolaboratif dan 
                    adaptif <br></br> guna meningkatkan potensi, kemampuan, dan wawasan, serta kepribadian 
                    mahasiswa SI.</p>
            </div>


            {/*---------------------------- Bagian Misi-------------------- */}
            <div class='misi'>
                <h1> <span class="dot"></span> Misi <span class="dot"></span> </h1>
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
                    <h1> Bidang & Divisi </h1>
                    <br></br>
                </div>

        {/*------------------------ Bagian Struktur Organisasi---------------------------- */}

        <div class='struktur'>
            <h1> <span class="dot"></span> Struktur Organisasi <span class="dot"></span> </h1>
        </div>
        
        
        <div class='logo'>
                <img src= {Struktur} className="struktur-logo" alt="Logo"/>
            </div>

</div>

    )
}

export default Profile 