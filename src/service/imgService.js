const IMAGE_BASE_URL = "https://firebasestorage.googleapis.com/v0/b/portfolio-371bd.appspot.com/o/";

export const aboutMeImg = (name, extension = "png") => `${IMAGE_BASE_URL}about-me%2F${name.toString()}.${extension.toString()}?alt=media`

export const advertsThumbnail = (name, extension = "jpeg") => `${IMAGE_BASE_URL}adverts%2Fthumbnail%2F${name.toString()}.${extension.toString()}?alt=media`

export const advertsOriginal = (name, extension = "jpeg") => `${IMAGE_BASE_URL}adverts%2Foriginal%2F${name.toString()}.${extension.toString()}?alt=media`

export const advertsLogo = (name, extension = "svg") => `${IMAGE_BASE_URL}adverts%2Flogo%2F${name.toString()}.${extension.toString()}?alt=media`

export const artsThumbnail = (name, extension = "jpeg") => `${IMAGE_BASE_URL}arts%2Fthumbnail%2F${name.toString()}.${extension.toString()}?alt=media`

export const artsOriginal = (name, extension = "jpeg") => `${IMAGE_BASE_URL}arts%2Foriginal%2F${name.toString()}.${extension.toString()}?alt=media`

export const awardsThumbnail = (name, extension = "jpeg") => `${IMAGE_BASE_URL}awards%2Fthumbnail%2F${name.toString()}.${extension.toString()}?alt=media`

export const awardsOriginal = (name, extension = "jpeg") => `${IMAGE_BASE_URL}awards%2Foriginal%2F${name.toString()}.${extension.toString()}?alt=media`

export const awardsLogo = (name, extension = "svg") => `${IMAGE_BASE_URL}awards%2Flogo%2F${name.toString()}.${extension.toString()}?alt=media`
