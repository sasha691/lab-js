export function createBlurredCoverElement(elementToCover) {
    const cover = document.createElement('div');
    cover.classList.add('cover');
  
    const elementRect = elementToCover.getBoundingClientRect();
    cover.style.position = 'absolute';
    cover.style.top = `${elementRect.top + window.scrollY}px`;
    cover.style.left = `${elementRect.left + window.scrollX}px`;
    cover.style.width = `${elementRect.width}px`;
    cover.style.height = `${elementRect.height}px`;
  
    return cover;
  }
  