import axios from '@/plugins/axios'

export const enviarEmail = async ({ commit }, dados) => {
  try {
    const res = await axios.post('/send', dados, { useCredentails: true })

    return res.data
  } catch (error) {
    return null
  }
}
