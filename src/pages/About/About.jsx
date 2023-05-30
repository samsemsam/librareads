import React from 'react';
import './About.css';
import aboutWira from '../../images/wira.JPG';
import aboutRiffa from '../../images/riffa.JPG';
import aboutAthar from '../../images/athar.JPG';
import aboutSam from '../../images/sam.JPG';

const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
<div className='about-text'>
          <h2 className='fs-26 ls-1'>About Us</h2>
          <p className='fs-17'>LibraReads adalah sebuah website yang menyediakan koleksi buku yang dapat Anda baca secara online. 
          Temukan berbagai judul menarik dari berbagai genre di perpustakaan digital kami. 
          Nikmati pengalaman membaca yang menyenangkan dengan fitur unggulan kami, 
          yaitu kemampuan untuk melihat preview yang jelas dari setiap buku sebelum Anda memutuskan untuk membacanya secara lengkap. 
          Kami juga menawarkan fitur menarik lainnya, yaitu pilihan untuk memilih buku secara acak, 
          memberikan kejutan menyenangkan setiap kali Anda ingin mengeksplorasi buku baru. 
          Bergabunglah dengan kami dan jelajahi dunia pengetahuan dan hiburan melalui buku-buku digital kami yang menginspirasi.</p>
          <br /><br />
          <h2 className='about-title fs-26 ls-1'>Our Team</h2>
        </div>
        <div className='about-card'>
          <div className='about-content'>
            <div className='about-imgBx'>
              <img src={aboutWira} alt='' />
            </div>
            <div className='about-contentBx'>
              <h4>Mohammad Wira Darma</h4>
              <h5>00000082390</h5>
            </div>
            <div className='about-sci'>
              <a href='https://github.com/JohnJonnzz'>
                <i className='fa fa-github'></i>
              </a>
              <a href='https://www.instagram.com/wgi_361/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://steamcommunity.com/profiles/76561198382830245'>
                <i className='fa fa-steam'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='about-content'>
            <div className='about-imgBx'>
              <img src={aboutRiffa} alt='' />
            </div>
            <div className='about-contentBx'>
              <h4>Riffa Putra</h4>
              <h5>00000082581</h5>
            </div>
            <div className='about-sci'>
              <a href='https://github.com/reeves63'>
                <i className='fa fa-github'></i>
              </a>
              <a href='https://www.instagram.com/rf.ptrrr/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://steamcommunity.com/profiles/76561198434537025/'>
                <i className='fa fa-steam'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='about-content'>
            <div className='about-imgBx'>
              <img src={aboutAthar} alt='' />
            </div>
            <div className='about-contentBx'>
              <h4>Raditya Athar Ilazuard</h4>
              <h5>00000082732</h5>
            </div>
            <div className='about-sci'>
              <a href='https://github.com/StillFrost75'>
                <i className='fa fa-github'></i>
              </a>
              <a href='https://www.instagram.com/raditya_athar75/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://steamcommunity.com/id/kobayakawa75'>
                <i className='fa fa-steam'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='about-content'>
            <div className='about-imgBx'>
              <img src={aboutSam} alt='' />
            </div>
            <div className='about-contentBx'>
              <h4>Sammuel Tedjosurya</h4>
              <h5>00000081039</h5>
            </div>
            <div className='about-sci'>
              <a href='https://github.com/samsemsam'>
                <i className='fa fa-github'></i>
              </a>
              <a href='https://www.instagram.com/samtss_/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://steamcommunity.com/id/Kaganeka'>
                <i className='fa fa-steam'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;