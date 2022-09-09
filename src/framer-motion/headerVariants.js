const headerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 1.5,
      duration: 0.6,
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut'
    }
  },
    hover: {
        scale: 1.2,
        boxShadow: "0 0 20px 0px rgb(52, 103, 235)",
        textShadow: "0 0 rgb(19, 31, 66)"
    },
    tap: {
        scale: .9,
    },
}

export default headerVariants;