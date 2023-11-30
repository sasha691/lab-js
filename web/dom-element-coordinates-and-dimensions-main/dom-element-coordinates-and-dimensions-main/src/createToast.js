export function createToast(element) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.style.position = 'fixed'
    toast.style.top = '20px'
    toast.style.right = '20px'
  
    if (element) {
      toast.appendChild(element)
    }
  
    return toast
  }
  