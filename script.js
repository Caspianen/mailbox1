const hug = document.getElementById("hug");
const hugGif = document.getElementById("hugGif");

hug.addEventListener("click", () => {
  hugGif.classList.add("show");
  setTimeout(() => {
    hugGif.classList.remove("show");
    setTimeout(() => {
      hugGif.style.display = "none";
    }, 400); // sembunyikan setelah animasi hilang
  }, 3500); // lama muncul 3.5 detik
});
