import mock from '@/@fake-db/mock'

import lancelot from '@images/fgo/312.jpg'
import arjuna from '@images/fgo/arjuna.jpg'
import gilgamesh from '@images/fgo/gilgamesh.jpg'
import kukulcan from '@images/fgo/kukulcan.jpg'
import tiamat from '@images/fgo/tiamat.jpg'

const database = [
    {
        id: 312,
        name: 'Lancelot',
        atk: 13969,
        multiplier: 400,
        skills:[
            {
                name: 'skill1',
                multiplier: 400,
                atk: 13696,
                a: 0,
                b: 40,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'skill2',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'skill3',
                a: 0,
                b: 0,
                c_np: 30,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 5
            },
            {
                name: 'np',
                a: 20,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 1,
                duration: 3,
                current: 0
            },
        ],
        class_advantage: 1,
        image: lancelot
    },
    {
        id: 376,
        name: 'Tiamat',
        multiplier: 400,
        atk: 12527,
        skills:[
            {
                name: 'skill1',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'skill2',
                a: 30,
                b: 30,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'skill3',
                a: 0,
                b: 0,
                c_np: 20,
                c_skill: 0,
                d: 0,
                cd: 1,
                duration: 1,
                current: 0
            },
            {
                name: 'np',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 1,
                duration: 3,
                current: 0
            },
        ],
        class_advantage: 1,
        image: tiamat
    },
    {
        id: 373,
        name: 'Kukulcan',
        multiplier: 400,
        atk: 13775,
        skills:[
            {
                name: 'skill1',
                a: 0,
                b: 50,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 5,
                duration: 3,
                current: 0
            },
            {
                name: 'skill2',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'skill3',
                a: 30,
                b: 0,
                c_np: 30,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'np',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 1,
                duration: 3,
                current: 0
            },
        ],
        class_advantage: 1,
        image: kukulcan
    },
    {
        id: 247,
        name: 'Arjuna(Alter)',
        multiplier: 400,
        atk: 14050,
        skills:[
            {
                name: 'skill1',
                a: 0,
                b: 30,
                c_np: 0,
                c_skill: 50,
                d: 0,
                cd: 5,
                duration: 3,
                current: 0
            },
            {
                name: 'skill2',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'skill3',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'np',
                a: 32,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 1,
                duration: 1,
                current: 0
            },
        ],
        class_advantage: 1.5,
        image: arjuna
    },
    {
        id: 12,
        name: 'Gilgamesh',
        multiplier: 500,
        atk: 12770,
        skills:[
            {
                name: 'skill1',
                a: 0,
                b: 21,
                c_np: 20,
                c_skill: 0,
                d: 0,
                cd: 5,
                duration: 3,
                current: 0
            },
            {
                name: 'skill2',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 50,
                cd: 6,
                duration: 3,
                current: 6
            },
            {
                name: 'skill3',
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
                cd: 6,
                duration: 3,
                current: 0
            },
            {
                name: 'np',
                a: 0,
                b: 0,
                c_np: 30,
                c_skill: 0,
                d: 0,
                cd: 1,
                duration: 1,
                current: 0
            },
        ],
        class_advantage: 1,
        image: gilgamesh
    },
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

