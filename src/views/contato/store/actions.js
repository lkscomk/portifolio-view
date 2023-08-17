import axios from '@/plugins/axios'

export const enviarEmail = async ({ commit }, dados) => {
  try {
    const res = await axios.post('/enviar-email', dados)

    return res.data
  } catch (error) {
    return null
  }
}
