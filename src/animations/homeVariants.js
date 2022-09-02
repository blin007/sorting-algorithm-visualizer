const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

export default homeVariants;