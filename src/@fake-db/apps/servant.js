import mock from '@/@fake-db/mock'
import lancelot from '@images/fgo/312.jpg'

const database = [
    {
        id: 312,
        skill1: {
            a: 0,
            b: 40,
            c: 0,
            d: 0,
            cd: 6,
            durtaion: 3,
        },
        image: lancelot
    }
]

mock.onGet('/apps/servant/servants').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()
  const filteredData = database.filter(servant => (servant.name.toLowerCase().includes(queryLowered)))
  
  return [
    200,
    {
        servants: filteredData,
    },
  ]
})

// 👉 Get a single servant
mock.onGet(/\/apps\/servant\/\d+/).reply(config => {
  // Get event id from URL
  const servantId = config.url?.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  const id = Number(servantId)
  const servant = database.find(servant => servant.id === id)
  if (!servant)
    return [403, { message: 'Unable to find the Servant' }]

  return [
    200,
    {
        servant: servant,
    },
  ]
})
