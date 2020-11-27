import axios from 'axios'

//base URL

//can now import this on any file
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2V0Ac1_wwZ_U08PSMGDc9BBWJ3Tp_lEAc4ZqKoAqVbZrn0JDv5Zc-LTV-xPfqAlKar9rQuQk7oO6DkPfxFsIfTS-OgQ2oGrZCiRbHtrAug82Ol-6FFJaTOJInre5X3Yx',
  },
})
