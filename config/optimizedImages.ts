export interface NuxtConfigurationOptimizedImages {
  optimizedImages: Boolean
  optimizeImagesInDev?: Boolean
  handleImages?: String[]
  mozjpeg?: {}
  webp?: {}
}

const optimizedImages: NuxtConfigurationOptimizedImages = {
  optimizedImages: true,
  handleImages: ["jpeg", "jpg", "png", "svg", "webp"],
  mozjpeg: {
    quality: 90,
  },
  webp: {
    quality: 90,
    method: 6,
    autoFilter: true,
  },
}

export default optimizedImages
