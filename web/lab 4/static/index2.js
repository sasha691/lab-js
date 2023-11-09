const block = document.getElementById('resizeRotateBlock');
const sizeRange = document.getElementById('sizeRange');
const rotateRange = document.getElementById('rotateRange');

sizeRange.addEventListener('input', () => {
  const newSize = sizeRange.value + 'px';
  block.style.width = newSize;
  block.style.height = newSize;
});

rotateRange.addEventListener('input', () => {
  const newRotation = rotateRange.value + 'deg';
  block.style.transform = `rotate(${newRotation})`;
});
