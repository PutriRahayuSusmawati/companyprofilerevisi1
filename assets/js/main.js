/**
* Template Name: Consulting
* Template URL: https://bootstrapmade.com/bootstrap-consulting-website-template/
* Updated: May 01 2025 with Bootstrap v5.3.5
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /*
   * Pricing Toggle
   */

  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    pricingSwitch.addEventListener('change', function() {
      const pricingItems = container.querySelectorAll('.pricing-item');

      if (this.checked) {
        monthlyText.classList.remove('active');
        yearlyText.classList.add('active');
        pricingItems.forEach(item => {
          item.classList.add('yearly-active');
        });
      } else {
        monthlyText.classList.add('active');
        yearlyText.classList.remove('active');
        pricingItems.forEach(item => {
          item.classList.remove('yearly-active');
        });
      }
    });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }

    window.addEventListener('load', function () {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});

  });

  window.addEventListener('load', function () {
  // Jika tidak ada hash, scroll ke atas
  if (!window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    // Jika ada hash, delay sedikit untuk stabilisasi layout
    setTimeout(() => {
      const section = document.querySelector(window.location.hash);
      if (section) {
        const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
        window.scrollTo({
          top: section.offsetTop - scrollMarginTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
});


  

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


// DUA BAHASA
 const translations = {
    id: {
      beranda: "Beranda",
      tentang: "Tentang",
      tentang_kami: "Tentang Kami",
      dampak_kami: "Dampak Kami",
      inovasi: "Inovasi & Keberlanjutan",
      product:"Produk Kami",
      kegiatan: "Kegiatan Kami",
      kontak: "Hubungi Kami",
      headline: "Transformasi Peternakan Domba dengan Inovasi & Keberlanjutan",
      subheadline: "Memberdayakan petani kecil, menurunkan emisi, dan menciptakan nilai dari hulu ke hilir.",
      button: "Jelajahi Lebih Lanjut",
      about:"Tentang Kami",
      about1:"Didirikan pada tahun 2024, PT Mitra Ternak Berkelanjutan adalah perusahaan agribisnis yang berorientasi pada misi membangun ekosistem peternakan domba yang modern, inklusif, dan berkelanjutan di Indonesia. Visi kami adalah membentuk model peternakan terintegrasi dan tahan iklim yang dapat berkontribusi terhadap ketahanan pangan nasional, mengurangi beban pada sistem petani kecil tradisional, serta mendorong keberlanjutan lingkungan.",
      about2:"Misi kami adalah memberdayakan petani kecil dan generasi muda melalui inovasi, teknologi, dan kemitraan di seluruh rantai nilai peternakan mulai dari pembibitan, pakan, pengelolaan limbah, hingga hilirisasi produk. Dengan menggabungkan kearifan lokal dan praktik modern, kami bertujuan meningkatkan kesejahteraan petani, menjamin kesejahteraan hewan, dan mengurangi dampak lingkungan.",
      aktivitas: "Apa yang Kami Lakukan",
      hulu: "Hulu: Pembibitan & Kemitraan",
      hulu2: "Kami menyediakan akses ke bibit domba unggul, menerapkan model kemitraan ternak yang transparan, dan memberikan pendampingan teknis kepada mitra peternak. Sistem pendampingan lapangan kami memastikan peternak menerapkan praktik budidaya yang baik dan memperoleh manfaat dari sistem pelaporan serta pembagian hasil yang terstruktur.",
      penghubung: "Penghubung: Pakan & Kesejahteraan Hewan",
      penghubung2: "Program inovasi pakan kami memanfaatkan limbah pertanian lokal seperti batang jagung dan hijauan untuk memproduksi silase. Ini meningkatkan ketersediaan pakan sepanjang tahun, menekan biaya, dan berkontribusi pada penurunan emisi metana sebesar 27%. Kami juga menggunakan perlakuan probiotik alami untuk meningkatkan kesehatan ternak dan mengurangi ketergantungan pada bahan kimia.",
      hilir: "Hilir: Pemasaran & Inovasi Produk",
      hilir2:"Strategi hilir kami difokuskan pada penguatan akses pasar melalui dua merek layanan utama: Mitra Bhakti Aqiqah, yang menyediakan daging domba higienis dan dapat dilacak untuk kebutuhan ibadah aqiqah; dan Bisa Qurban, layanan musiman yang memungkinkan pelaksanaan kurban secara etis dan transparan selama Idul Adha. Kedua platform ini mendukung peningkatan pendapatan petani kecil sekaligus mempromosikan praktik peternakan yang berkelanjutan.",
      nilai: "Nilai Tambah: Pengelolaan Limbah",
      nilai2: "Kami mengelola limbah ternak bukan sebagai beban, tetapi sebagai sumber daya. Melalui proses fermentasi, pengeringan, dan pemadatan, kami mengubah kotoran domba menjadi dua produk bernilai tinggi: pupuk organik yang menyuburkan tanah tanpa bahan kimia sintetis, dan briket kotoran yang menjadi bahan bakar ramah lingkungan untuk rumah tangga pedesaan dan industri kecil. Model pengelolaan limbah terintegrasi ini mendukung pertanian sirkular, mengurangi pencemaran lingkungan, dan menciptakan pendapatan tambahan bagi petani. ",
      dampak:"Dampak Kami Hingga 2030",
      penurunan:"Penurunan emisi metana sebesar 27% melalui sistem pakan berbasis silase dan konsentrat",
      peningkatan:"Peningkatan produktivitas domba sebesar 35% melalui nutrisi dan perawatan yang lebih baik",
      kotoran:"100% kotoran domba didaur ulang menjadi produk organik bernilai",
      pengurangan:"Pengurangan biaya pakan hingga 40% melalui pemanfaatan limbah pertanian",
      lebih:"Lebih dari 5.000 petani kecil terlibat dalam praktik peternakan berkelanjutan",
      innovation:"Inovasi & Keberlanjutan",
      kami:"Kami menyelaraskan praktik bisnis kami dengan Tujuan Pembangunan Berkelanjutan (SDGs) PBB, khususnya yang berkaitan dengan:",
      produksi:"Produksi dan konsumsi yang bertanggung jawab",
      aksi:"Aksi iklim melalui pengurangan emisi",
      penghidupan:"Penghidupan pedesaan yang berkelanjutan",
      pemberdayaan:"Pemberdayaan petani kecil dan pemuda dalam agribisnis",
      ekonomi:"Ekonomi sirkular dan pertanian regeneratif",
      liputan:"Liputan Media",
      liputan2:"Kami merasa terhormat telah mendapatkan perhatian dari media lokal dan nasional yang mengapresiasi inovasi dan dampak kami dalam peternakan berkelanjutan:",
      more:"selengkapnya",
      contact:"Hubungi Kami",
      contact2:"Mari bersama membangun masa depan peternakan yang berkelanjutan dan inklusif.",
      contact3:"Lokasi:",
      contact4:"Tuban, Jawa Timur, Indonesia, 62382",
      footer:"2025 PT Mitra Ternak Berkelanjutan.",
      foote2:"Hak cipta dilindungi. | Dirancang untuk praktik peternakan berkelanjutan.",
      produk:"Produk Kami"
    },
    en: {
      beranda: "Home",
      tentang: "About",
      tentang_kami: "About Us",
      dampak_kami: "Our Impact",
      inovasi: "Innovation & Sustainability",
      product:"Our Products",
      kegiatan: "Our Activities",
      kontak: "Contact",
      headline: "Transforming Sheep Farming with Innovation & Sustainability",
      subheadline: "Empowering smallholder farmers, reducing emissions, and creating value from upstream to downstream.",
      button: "Explore More",
      about:"About Us ",
      about1:"Founded in 2024, PT Mitra Ternak Berkelanjutan is a purpose-driven agribusiness committed to building a modern, inclusive, and sustainable sheep farming ecosystem in Indonesia. Our vision is to establish an integrated and climate-resilient livestock model that contributes to national food security, reduces the burden on traditional smallholder farming systems, and promotes environmental sustainability.",
      about2:"Our mission is to empower smallholder farmers and youth through innovation, technology, and partnership across the livestock value chain, including breeding and feeding, waste management and product commercialization. By combining traditional knowledge with modern practices, we aim to improve farmer livelihoods, ensure animal welfare, and reduce environmental impact.",
      aktivitas: "What We Do ",
      hulu:"Upstream: Breeding & Partnerships ",
      hulu2: "We provide access to high-quality sheep breeds, implement a transparent livestock partnership model, and deliver technical assistance to farmer partners. Our field mentoring system ensures farmers apply good animal husbandry practices and benefit from structured reporting and profit-sharing mechanisms.",
      penghubung: "Midstream: Feed & Animal Welfare ",
      penghubung2: "Our feed innovation program utilises local agricultural waste, such as corn stalks and forage, to produce silage. This improves feed availability year-round, reduces costs, and contributes to a 27% reduction in methane emissions. We also apply natural probiotic treatments to promote livestock health and reduce the need for chemical inputs.",
      hilir: "Downstream: Market & Product Innovation ",
      hilir2:"Our downstream strategy focuses on strengthening market access through two key service brands: Mitra Bhakti Aqiqah, offering hygienic and traceable sheep meat for Islamic birth ceremonies (aqiqah); and Bisa Qurban, a seasonal service enabling ethical and transparent livestock sacrifice during Eid al-Adha. These platforms support smallholder incomes while promoting sustainable livestock practices.",
      nilai: "Value Added: Waste Management ",
      nilai2: "We manage animal waste not as a liability, but as a resource. Through fermentation, drying, and compaction processes, we transform sheep manure into two high-value products: organic fertilizer that enriches soil without synthetic chemicals, and manure briquettes that serve as an eco-friendly alternative fuel for rural households and small industries. This integrated waste management model contributes to circular agriculture, reduces environmental pollution, and provides additional income streams for farmers. ",
      dampak:"Our Impact by 2030",
      penurunan:"27% reduction in methane emissions through a feed system based on silage and concentrate",
      peningkatan:"35% increase in sheep productivity through improved nutrition and care",
      kotoran:"100% of sheep manure recycled into high-value organic products",
      pengurangan:"Up to 40% reduction in feed costs through the use of agricultural waste",
      lebih:"Over 5,000 small-scale farmers engaged in sustainable livestock farming practices",
      innovation:"Innovation & Sustainability ",
      kami:"We align our business practices with the UN Sustainable Development Goals (SDGs), especially those related to:",
      produksi:"Responsible production and consumption",
      aksi:"Climate action through emission reduction",
      penghidupan:"Sustainable rural livelihoods",
      pemberdayaan:"Empowerment of smallholder farmers and youth in agribusiness",
      ekonomi:"Circular economy and regenerative agriculture",
      liputan:"Media Coverage ",
      liputan2:"We are honored to have received media attention from local and national outlets that recognized our innovation and impact in sustainable livestock farming:",
      more:"more",
      contact:"Contact Us ",
      contact2:"Let’s build a future of sustainable and inclusive livestock together.",
      contact3:"Location:",
      contact4:"Tuban, East Java, Indonesia, 62382",
      footer:"2025 PT Mitra Ternak Berkelanjutan.",
      footer2:"All rights reserved. | Designed for sustainable livestock practices.",
      produk:"Our Products"
    }
  };

  function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
    document.getElementById("currentLang").innerText = lang.toUpperCase();
    // Simpan preferensi ke localStorage (optional)
    localStorage.setItem('language', lang);
  }

  // Default ke ID saat pertama kali, atau ambil dari localStorage
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('language') || 'id';
    changeLanguage(savedLang);
  });

// dropdown
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navmenu .dropdown > a').forEach(function (dropdownLink) {
    dropdownLink.addEventListener('click', function (e) {
      // Cegah aksi default agar tidak trigger tutup menu
      e.preventDefault();
      e.stopPropagation(); // ← ini penting untuk mencegah event bubbling yang menutup menu!

      const parentLi = this.parentElement;
      const dropdownMenu = parentLi.querySelector('ul');

      // Tutup dropdown lain (opsional)
      document.querySelectorAll('.navmenu .dropdown ul').forEach(function (ul) {
        if (ul !== dropdownMenu) {
          ul.classList.remove('dropdown-active');
        }
      });

      // Toggle dropdown yang diklik
      dropdownMenu.classList.toggle('dropdown-active');

      const icon = this.querySelector('.toggle-dropdown');
      if (icon) {
        icon.classList.toggle('rotated');
      }
    });
  });
});

  //  document.addEventListener('DOMContentLoaded', function () {
 
  //   document.querySelectorAll('.navmenu .dropdown > a').forEach(function (dropdownLink) {
  //     dropdownLink.addEventListener('click', function (e) {
  //       e.preventDefault(); 

  //       const parentLi = this.parentElement;
  //       const dropdownMenu = parentLi.querySelector('ul');

     
  //       dropdownMenu.classList.toggle('dropdown-active');

  //       const icon = this.querySelector('.toggle-dropdown');
  //       if (icon) {
  //         icon.classList.toggle('rotated');
  //       }
  //     });
  //   });
  // });

  window.onload = function () {
    window.scrollTo(0, 0);
  };
 


 const items = document.querySelectorAll('.impact-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));



  