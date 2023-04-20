import axios from '@axios'

export const useServantStore = defineStore('servant', {
  // ℹ️ arrow function recommended for full type inference
  state: () => ({
    servants: [],
  }),
  actions: {
    async fetchServants(payload) {
      const response = await axios.get('/apps/servant/servants', { params: payload })
      const { servants } = response.data
      this.servants = servants
    },
    async fetchServant() {
      const response = await axios.get(`/apps/servant/${id}`)
      const { servants } = response.data
      this.servants = servants
    },
    // async updateEmails(ids, data) {
    //   return axios.post('/apps/email/update-emails/', {
    //     ids,
    //     data,
    //   })
    // },
    // async updateEmailLabels(ids, label) {
    //   return axios.post('/apps/email/update-emails-label', {
    //     ids,
    //     label,
    //   })
    // },
  },
})
