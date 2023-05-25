import { ref } from 'vue'
import { userEventListener } from '../userEventListener'
const inBrowser = typeof window !== 'undefined' && document.documentElement;

export function getRootScrollTop(): number {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function getRootScrollLeft(): number {
  return (
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0
  );
}

const useWindowChange = () => {
  const width = ref(0)
  const height = ref(0)
  const scrollX = ref(0)
  const scrollY = ref(0)

  const updateSize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
    scrollX.value = getRootScrollLeft()
    scrollY.value = getRootScrollTop()
  }

  if (inBrowser) {
    updateSize()
    userEventListener('resize', updateSize, { event: window })
    userEventListener('scroll', updateSize, { event: window })

  }

  return {
    width,
    height,
    scrollX,
    scrollY
  }



}


export { useWindowChange }