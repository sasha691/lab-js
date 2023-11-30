export function isElementScrolled(element) {
    if (!element) {
      return {
        scrollTop: null,
        scrollLeft: null,
        isScrolled: null,
      }
    }
  
    const scrollable = {
      scrollTop: element.scrollTop,
      scrollLeft: element.scrollLeft,
      isScrolled: (element.scrollTop > 0 || element.scrollLeft > 0),
    }
  
    return scrollable
  }
  