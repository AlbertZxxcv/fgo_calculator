<script setup>
import NpDamageCard from '@/pages/np/NpDamageCard.vue';

const Supporter = [
    {
        id: 1,
        name: '第一回合双杀狐,第三回合换奥伯龙',
        buffs: [
            {
                a: 100,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
            },
            {
                a: 0,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
            },
            {
                a: 50,
                b: 0,
                c_np: 30,
                c_skill: 0,
                d: 0,
            },
        ],
    },
    {
        id: 2,
        name: '第一回合单杀狐奥伯龙,第二回合换另一个杀狐',
        buffs: [
            {
                a: 50,
                b: 0,
                c_np: 30,
                c_skill: 0,
                d: 0,
            },
            {
                a: 50,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
            },
            {
                a: 50,
                b: 0,
                c_np: 0,
                c_skill: 0,
                d: 0,
            },
        ],
    },

]

const selectServant = ref(null);
const selectSupporter = ref(1);
const props = defineProps({
    servant: {
      type: Object,
      required: false,
    },
})
</script>

<template>
    <VSelect class="mar-20"
    v-model="selectSupporter"
    :items="Supporter"
    item-title="name"
    item-value="id"
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

  <VSelect class="mar-20"
    v-model="selectServant"
    :items="props.servant"
    item-title="name"
    item-value="id"
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
  <div v-for="id in selectServant">
        <template v-if="selectServant">
            <NpDamageCard class="mar-10" v-bind:servant="servant.find((s)=>s.id == id)" v-bind:supporter="Supporter.find((s)=>s.id == selectSupporter)"/>
        </template>
  </div>
</template>

<style lang="scss">
.mar-10{
    margin-top: 10px;
}
.mar-20{
    margin-top: 20px;
}
</style>