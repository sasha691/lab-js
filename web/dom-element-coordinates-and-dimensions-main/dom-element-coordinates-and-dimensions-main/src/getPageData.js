export function getPageData() {
    const doc = document.documentElement
    const body = document.body
  
    const result = {
      windowHeight: window.innerHeight || doc.clientHeight || body.clientHeight,
      windowWidth: window.innerWidth || doc.clientWidth || body.clientWidth,
      documentHeight: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        doc.clientHeight,
        doc.scrollHeight,
        doc.offsetHeight
      ),
      documentWidth: Math.max(
        body.scrollWidth,
        body.offsetWidth,
        doc.clientWidth,
        doc.scrollWidth,
        doc.offsetWidth
      ),
      currentScrollFromTop: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
      currentScrollFromLeft: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
    }
  
    return result
  }
  