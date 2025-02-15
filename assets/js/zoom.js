document.addEventListener('DOMContentLoaded', function () {
  const productImage = document.getElementById('product-image');
  if (productImage) {
    productImage.addEventListener('mousemove', function (e) {
      const rect = productImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      productImage.style.transformOrigin = `${x}px ${y}px`;
      productImage.style.transform = "scale(1.5)";
    });
    productImage.addEventListener('mouseleave', function () {
      productImage.style.transformOrigin = "center center";
      productImage.style.transform = "scale(1)";
    });
  }
});

