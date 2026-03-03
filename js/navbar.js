let galleryImages = [];
let currentIndex = 0;

function openImage(src) {
  openGallery([src]); // otomatis jadi array 1 gambar
}

function openGallery(images) {
  galleryImages = images;
  currentIndex = 0;
  document.getElementById("popupImage").src = galleryImages[currentIndex];
  document.getElementById("imageModal").style.display = "flex";

  // sembunyikan tombol kalau cuma 1 gambar
  toggleNavButtons();
}

function closeGallery() {
  document.getElementById("imageModal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  document.getElementById("popupImage").src = galleryImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("popupImage").src = galleryImages[currentIndex];
}

function toggleNavButtons() {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (galleryImages.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}

document.getElementById("imageModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeGallery();
  }
});

