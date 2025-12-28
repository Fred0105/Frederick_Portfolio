import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, MessageCircle } from 'lucide-react'; // Icon MessageCircle pengganti WA
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* BAGIAN KIRI */}
        <div className="contact-left">
          <h2 className="contact-title">Let's Connect.</h2>
          <p className="contact-desc">
            I'm currently open to new opportunities in <strong>Quantitative Research</strong>, <strong>Software Engineering</strong> and <strong>AI Engineer</strong>.
            <br /><br />
            Whether you have a question, a project collaboration, or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* BAGIAN KANAN */}
        <div className="contact-right">
          
          {/* 1. Email */}
          <a href="mailto:frederick_malcolm30@gmail.com" className="contact-card">
            <div className="contact-info">
              <Mail size={24} color="#0f172a" />
              <div>
                <div className="contact-label">Email Me</div>
                {/* Perbaikan: Menampilkan email asli */}
                <div className="contact-detail">frederick_malcolm30@gmail.com</div>
              </div>
            </div>
            <ArrowUpRight size={20} color="#94a3b8" />
          </a>

          {/* 2. LinkedIn */}
          {/* Perbaikan: Tambah https:// dan bersihkan URL */}
          <a href="https://www.linkedin.com/in/frederick-malcolm-281889292/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-info">
              <Linkedin size={24} color="#0077b5" />
              <div className="contact-label">LinkedIn</div>
              <div className="contact-detail">https://www.linkedin.com/in/frederick-malcolm-281889292</div>
            </div>
            <ArrowUpRight size={20} color="#94a3b8" />
          </a>

          {/* 3. GitHub */}
          <a href="https://github.com/Fred0105" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-info">
              <Github size={24} color="#0f172a" />
              <div className="contact-label">GitHub</div>
              <div className="contact-detail">https://github.com/Fred01052</div>
            </div>
            <ArrowUpRight size={20} color="#94a3b8" />
          </a>

          {/* 4. WhatsApp */}
          {/* Perbaikan: Ganti nomer HP di bawah ini (format 628...) */}
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-info">
              {/* Perbaikan: Gunakan MessageCircle karena icon Whatsapp tidak ada di Lucide */}
              <MessageCircle size={24} color="#25D366" />
              <div className="contact-label">WhatsApp</div>
              <div className="contact-detail">+62 811-7767-177</div>
            </div>
            <ArrowUpRight size={20} color="#94a3b8" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;