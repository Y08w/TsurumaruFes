window.onload = function () {
    const spinner = document.getElementById('loading');
    setTimeout(() => {
     spinner.classList.add('loaded');       
    }, 1400);

}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 150, // 100pxだけ上に余白
      behavior: "smooth"
    });
  });
});