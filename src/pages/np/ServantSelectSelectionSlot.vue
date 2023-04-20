<script setup>
import NpDamageCard from '@/pages/np/NpDamageCard.vue';

const Supporter = [
    {
        id: 1,
        name: '第一回合双杀狐,第三回合换奥伯龙',
        buffs: {
            battle1:{
                A: 100,
                B: 0,
                C_np: 0,
                C_skill: 0,
                D: 0,
            },
            battle2:{
                A: 0,
                B: 0,
                C_np: 0,
                C_skill: 0,
                D: 0,
            },
            battle3:{
                A: 50,
                B: 0,
                C_np: 30,
                C_skill: 0,
                D: 0,
            },
        },
    },
    {
        id: 2,
        name: '第一回合单杀狐奥伯龙,第二回合换另一个杀狐',
        buffs: {
            battle1:{
                A: 50,
                B: 0,
                C_np: 30,
                C_skill: 0,
                D: 0,
            },
            battle2:{
                A: 50,
                B: 0,
                C_np: 0,
                C_skill: 0,
                D: 0,
            },
            battle3:{
                A: 50,
                B: 0,
                C_np: 0,
                C_skill: 0,
                D: 0,
            },
        },
    },

]

const selectServant = ref(null);
const selectSupporter = ref(null);
const props = defineProps({
    servant: {
      type: Object,
      required: false,
    },
})
</script>

<template>
  <VSelect
    v-model="selectServant"
    :items="props.servant"
    item-title="name"
    item-value="skills"
    label="Select Servant"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.image"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
  {{ selectServant }}
  <VSelect
    v-model="selectSupporter"
    :items="Supporter"
    item-title="name"
    item-value="buffs"
    label="Select Support Model"
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.image"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
  {{ selectSupporter }}
  <div v-for="servant in selectServant">
        <div v-if="servant && selectServant" :key="servant.id">
            <NpDamageCard v-bind:servant="servant" v-bind:supporter="selectSupporter"/>
        </div>
  </div>
</template>