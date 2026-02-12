import React, { useState } from 'react';
import PhotoModal from './PhotoModal';
import './PhotoGallery.css';

const ValentineDate = () => {
  const [butterflies, setButterflies] = useState([]);

  const createButterfly = () => {
    const newButterfly = {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.8,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 2,
      rotation: Math.random() * 360
    };
    setButterflies(prev => [...prev, newButterfly]);

    setTimeout(() => {
      setButterflies(prev => prev.filter(b => b.id !== newButterfly.id));
    }, 15000);
  };

  const handleConfirmClick = () => {
    // Create 30 butterflies!
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        createButterfly();
      }, i * 50);
    }

    // Trigger confetti
    if (window.confetti) {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6, x: i * 0.1 }
          });
        }, i * 100);
      }
    }
  };

  return (
    <div className="date-card">
      {/* Butterflies Container */}
      <div className="butterflies-container">
        {butterflies.map(butterfly => (
          <div
            key={butterfly.id}
            className="butterfly"
            style={{
              left: `${butterfly.left}%`,
              top: `${butterfly.top}%`,
              transform: `scale(${butterfly.scale}) rotate(${butterfly.rotation}deg)`,
              animation: `fly ${butterfly.duration}s ease-in-out ${butterfly.delay}s forwards`
            }}
          >
            🦋
          </div>
        ))}
      </div>

      <h3>Our Valentine's Date ❤️</h3>
      <p className="date-info">📅 February 14th at 7:00 PM</p>
      <p className="location-info">📍 Our favorite restaurant SS Hydrabad polam</p>
      <div className="date-details">
        <p>🎁 Don't forget to bring:</p>
        <ul>
          <li>💝 Your beautiful smile</li>
          <li>🌹 A red rose</li>
          <li>📸 Camera for memories</li>
        </ul>
      </div>
      
      {/* Message appears when butterflies start */}
{butterflies.length > 0 && (
  <div className="gowtham-message-banner">
    <div className="banner-stars">✨ ⭐ ✨</div>
    <div className="banner-content">
      <span className="banner-emoji">🦋💕</span>
      <h2>Im on the way!</h2>
      <span className="banner-emoji">💕🦋</span>
    </div>
    <div className="banner-heartbeat">❤️</div>
    <p className="banner-subtitle">Getting ready for you papa... 🥰</p>
  </div>
)}
      
      <button 
        className="confirm-btn"
        onClick={handleConfirmClick}
      >
        Can't wait! 🥰
      </button>
    </div>
  );
};


const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // ✅ USING PUBLIC FOLDER - NO IMPORTS NEEDED!
const photos = [
    { id: 2, src: "/photos/img28.jpeg", caption: "Our first temple date 💕 🙏" },
    { id: 3, src: "/photos/img27.jpeg", caption: "Beautiful smile 😊 ✨" },
    { id: 4, src: "/photos/img26.jpeg", caption: "Unoda family yoda oru date 👨‍👩‍👧‍👦 💕" },
    { id: 5, src: "/photos/img25.jpeg", caption: "Thapakulamm la ratanam 💍 ❤️" },
    { id: 6, src: "/photos/img24.jpeg", caption: "Madurai la promise pane la that day 🤝 🌟" },
    { id: 7, src: "/photos/img23.jpeg", caption: "Otty road la first click 📸 💝" },
    { id: 8, src: "/photos/img29.jpeg", caption: "First Movie date 🎬 🍿" },
    { id: 9, src: "/photos/img22.jpeg", caption: "Yetha nathu kiss nu therla but good moment 💋 😘" },
    { id: 10, src: "/photos/img21.jpeg", caption: "Rainy day la oru travel ☔ 🌧️" },
    { id: 11, src: "/photos/img20.jpeg", caption: "Chill morning kiss 💋 ☀️" },
    { id: 12, src: "/photos/img19.jpeg", caption: "Romantic ah vu iruku comedy yavum iruku 😂 ❤️" },
    { id: 13, src: "/photos/img18.jpeg", caption: "Yenamalai kovil la 🙏 ✨" },
    { id: 14, src: "/photos/img17.jpeg", caption: "Palarunu kanathulaye arachela 🍳 👩‍🍳" },
    { id: 15, src: "/photos/img16.jpeg", caption: "Nyt tu ternimal one la 🚗 🌙" },
    { id: 16, src: "/photos/img15.jpeg", caption: "Race course la sothunathu 🎪 🎡" },
    { id: 17, src: "/photos/img14.jpeg", caption: "Yena panrathunu theriyama oru science Museum poitum la that moment 🏛️ 🖼️" },
    { id: 18, src: "/photos/img13.jpeg", caption: "Unga akka mrg la azhugu kutty ya vanthu mayakuna moment 💃 🎉" },
    { id: 19, src: "/photos/img12.jpeg", caption: "Race Course tower la nyt ride 🎡 🌃" },
    { id: 20, src: "/photos/img11.jpeg", caption: "Palani temple la kovam ah iruthalum pose kudutha that moment 😤 📸" },
    { id: 21, src: "/photos/img10.jpeg", caption: "Intha nal na yadi solrathu ne va unta na ragasiyam ah solre 🤫 💕" },
    { id: 22, src: "/photos/img9.jpeg", caption: "Face ah poncher paniyum nama kovai vizha la sothitu irutha moment 🎭 🎪" },
    { id: 23, src: "/photos/img8.jpeg", caption: "Yenga annan pavam avanala couple sotha mudiyama feel pani nammaku photograper ahna moment 📷 😂" },
    { id: 24, src: "/photos/img7.jpeg", caption: "Yenoda birthday ku shoe vaga sothuna moment 👟 🎂" },
    { id: 25, src: "/photos/img6.jpeg", caption: "Insta la pathutu oru murugan kovil poi arupadai la pray pana moment 🙏 📱" },
    { id: 26, src: "/photos/img5.jpeg", caption: "Semmozhi park la aditu irutha day 🌳 ☀️" },
    { id: 27, src: "/photos/img4.jpeg", caption: "Night first tym prozon mall la movie ponom 🎬 🌙" },
    { id: 28, src: "/photos/img3.jpeg", caption: "New year ku park murugan kovil ponum la that click 🎆 🙏" },
    { id: 29, src: "/photos/img2.jpeg", caption: "Neyum nanum nama baby yum in future la but na ipave predict pani AI ta pic capture pante 👶 🤖 💕" },
];

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-header">
          <h1 className="gallery-title">Yay! Papa YES solita jolly! 🎉</h1>
          <div className="heart-rain">❤️ 💖 💝 💕 💗</div>
          <p className="gallery-subtitle">Our beautiful journey together papa paru...</p>
        </div>

        <div className="photos-grid">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="photo-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="polaroid">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="photo-img"
                  loading="lazy"
                />
                <div className="photo-label">
                  <span>{photo.caption}</span>
                  <span className="heart-icon">❤️</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <LoveMessage />
        <ValentineDate />
        <LoveLetter />
        <FuturePlans />
      </div>

      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  );
};

// ========== COMPONENTS FOR MORE CONTENT ==========

const LoveMessage = () => (
  <div className="love-section">
    <h2>Every moment with you is magical ✨</h2>
    <div className="floating-hearts-container">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="floating-heart-icon">❤️</span>
      ))}
    </div>
    <p className="love-text">
      Thank you for being my Valentine!<br />
      Can't wait to create more beautiful memories with you!
    </p>
  </div>
);

// const ValentineDate = () => (
//   <div className="date-card">
//     <h3>Our Valentine's Date ❤️</h3>
//     <p className="date-info">📅 February 14th at 7:00 PM</p>
//     <p className="location-info">📍 Our favorite restaurant SS Hydrabad polam</p>
//     <div className="date-details">
//       <p>🎁 Don't forget to bring:</p>
//       <ul>
//         <li>💝 Your beautiful smile</li>
//         <li>🌹 A red rose</li>
//         <li>📸 Camera for memories</li>
//       </ul>
//     </div>
//     <button className="confirm-btn">Can't wait! 🥰</button>
//   </div>
// );

const LoveLetter = () => (
  <div className="love-letter">
    <h3>💌 A Letter for You</h3>
    <div className="letter-content">
      <p>My Dearest Papa,</p>
      <p>From the moment we met, you've brought so much joy into my life. Every day with you feels like a beautiful dream I never want to wake up from.</p>
      <p>romba english peter pothum content ku vare yenkuda intha god kudutha beautiful life la travel pannu unga appa mari la pathuka mmudiyathu aprm ne compare panuva so na yena mari nayaro antha mari gowtham yepdi pathupano antha mari una pathukure unaku theriyum anth gowtham yepavum serika vachute irupa athu mari pathu kure.</p>
      <p>yenaku nambika irukku life long romba nala vazhuvom naraya memories earn pani santhosamm ah irupom</p>
      <p>last ah una yavolo love panre nu propose pani sola mudiyathu avolo love panre papa yenoda world ah netha papa</p>
      <p>yaru yena sonalum namma kalyanam pani vazhuratha thaduka vanthalum nama strong ah irukanum</p>
      <p>happy ah iru ne yedutha mudivu la maratha bcz ne choose pana paya heart kula ne think panatha alavuku deep ah love panra una!!</p>
      <p>itha kelu nala iruku intha dailog: You are my sunshine, my happiness, my everything. papa❤️</p>
      <p className="letter-signature">Forever yours,<br />[Gowtham Raj Kumaravel]</p>
    </div>
  </div>
);

const FuturePlans = () => (
  <div className="future-plans">
    <h3>🌟 Our Future Adventures</h3>
    <div className="plans-grid">
      <div className="plan-item">
        <span>🌴</span>
        <h4>Beach Polam</h4>
        <p>March la</p>
      </div>
      <div className="plan-item">
        <span>🏔️</span>
        <h4>Thekadi polamm elephant ride</h4>
        <p>april or may la</p>
      </div>
      <div className="plan-item">
        <span>🎡</span>
        <h4>Amusement Park wonderla or black thunder</h4>
        <p>Next treatment pathutu doctor ta kettu polam!</p>
      </div>
      <div className="plan-item">
        <span>🍝</span>
        <h4>na Cook pani thare unaku</h4>
        <p>This weekend la</p>
      </div>
    </div>
  </div>
);

export default PhotoGallery;