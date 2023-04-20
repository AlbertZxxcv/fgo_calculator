<script setup>
const props = defineProps({
    servant: {
      type: Object,
      required: false,
    },
    supporter:{
        type: Object,
        required: false,
    },
})

class Skill{
    constructor(a, b, c_np, c_skill, d, cd, duration, current) {
        this.a = a;
        this.b = b;
        this.c_np = c_np;
        this.c_skill = c_skill;
        this.d = d;
        this.cd = cd;
        this.duration = duration;
        this.current = current;
    }

    skillPrint(){
        console.log('A:', this.a, ' B:', this.b, ' C:', this.c_np + this.c_skill, ' D:', this.d);
    }
}

class Servant{
    constructor(skills, class_advantage){
        this.skills = skills
        this.class_advantage = class_advantage;
        this.buffOfBattle = [];
        this.finalBuffArray = [];
    }

    servantPrint(){
        for (const skill of this.skills){
            skill.skillPrint();
        }
        console.log(this.class_advantage);
    }

    battle(){
        let buffs = {a: 0, b: 0, c_np: 0, c_skill: 0, d: 0, class_advantage: 0};
        for (let i = 1; i <= 3; i++){
            let new_buff = {
                a: buffs.a, 
                b: buffs.b, 
                c_np: buffs.c_np, 
                c_skill: buffs.c_skill, 
                d: buffs.d, 
                class_advantage: this.class_advantage
            };
            for (const skill of this.skills){
                
                if (i == 2){
                    skill.current -= 5;
                }
                else if (i == 3){
                    skill.current -= 1;
                }
                if(skill.current <= 0){
                    new_buff.a += + skill.a;
                    new_buff.b += skill.b;
                    new_buff.c_np += skill.c_np;
                    new_buff.c_skill += skill.c_skill;
                    new_buff.d += skill.d;
                    skill.current = skill.cd;
                }
            }
            // add the buffs of support
            new_buff.a += props.supporter.buffs[i-1].a;
            new_buff.b += props.supporter.buffs[i-1].b;
            new_buff.c_np += props.supporter.buffs[i-1].c_np;
            new_buff.c_skill += props.supporter.buffs[i-1].c_skill;
            new_buff.d += props.supporter.buffs[i-1].d;

            this.buffOfBattle.push(new_buff);
            buffs = {
                a: new_buff.a, 
                b: new_buff.b, 
                c_np: new_buff.c_np, 
                c_skill: new_buff.c_skill, 
                d: new_buff.d, 
                class_advantage: this.class_advantage
            };
            // if the duration is not 3, discount it 
            for (const skill of this.skills){
                if(skill.duration == 1){
                    buffs.a -=  skill.a;
                    buffs.b -= skill.b;
                    buffs.c_np -= skill.c_np;
                    buffs.c_skill -= skill.c_skill;
                    buffs.d -= skill.d;
                }
            }
        }
        return this.buffOfBattle;
    }

    finalBuff(){
        for (let i = 0; i < 3; ++i){
            const buffs = this.buffOfBattle[i];
            let buffValue = 0;
            if (i == 2){
                buffValue = (100+buffs.a)*(100+buffs.b)*(100+buffs.c_np * 2  +buffs.c_skill)*(100+buffs.d)*this.class_advantage
            }else{
                buffValue = (100+buffs.a)*(100+buffs.b)*(100+buffs.c_np +buffs.c_skill)*(100+buffs.d)*this.class_advantage   
            }
            this.finalBuffArray.push(buffValue/100000000);
        }
        return this.finalBuffArray;
    }

    damge(){
        const damgeArray = [];
        for (let i = 0; i < 3; i++){
            const damage = 0.23 * props.servant.atk * props.servant.multiplier * this.finalBuffArray[i];
            damgeArray.push(damage/100);
        }
        return damgeArray;
    }


}

const skills = []
for (const skill of props.servant.skills) {
    const new_skill = new Skill(skill.a, skill.b, skill.c_np, skill.c_skill, skill.d, skill.cd, skill.duration, skill.current);
    skills.push(new_skill);
}

const servant = new Servant(skills, props.servant.class_advantage);
// the buff list of the battle
const buffOfBattle = servant.battle();
const finalBuff = servant.finalBuff();
const damageArray = servant.damge().map(x => Math.round(x));

</script>

<template>
            <VCard>
                <div v-if="servant && supporter">
                    <h1 class="Name">
                                {{ props.servant.name }}
                    </h1>
                    <p class="info">ATK: {{ props.servant.atk }}    Multiplier: {{ props.servant.multiplier }}%</p>
                    <VRow no-gutters>
                        <VCol cols="5">
                            <VCardText>
                            <h3>Buff</h3>
                            <!-- <p class="mb-2">
                                Best seller of the month
                            </p> -->
                            <tr v-for="i in 2">
                                <h6>Battle {{ i  }}</h6>
                                {{ buffOfBattle[i-1].a }}A * {{ buffOfBattle[i-1].b  }}B * {{ buffOfBattle[i-1].c_np +buffOfBattle[i-1].c_skill }}C * {{ buffOfBattle[i-1].d }}D * {{ buffOfBattle[i-1].class_advantage }} = {{ finalBuff[i-1] }}
                            </tr>
                            <h6>Battle 3</h6>
                            <tr>
                                {{ buffOfBattle[2].a }}A * {{ buffOfBattle[2].b  }}B * ({{ buffOfBattle[2].c_np }} * 2 + {{ buffOfBattle[2].c_skill }})C * {{ buffOfBattle[2].d }}D * {{ buffOfBattle[2].class_advantage }} = {{ finalBuff[2] }}
                            </tr>
                            <!-- <h5 class="text-h5 font-weight-semibold text-primary mb-2">
                                $48.9k
                            </h5> -->
                            </VCardText>
                        </VCol>
                        <VCol cols="5">
                            <VCardText>
                            <h1 class="text-h6">
                            </h1>
                            <h3>Damage</h3>
                            <!-- <p class="mb-2">
                                Best seller of the month
                            </p> -->
                            <tr v-for="i in 3">
                                <h6>Battle {{ i  }}</h6>
                                0.23 * {{ props.servant.atk }} * {{ props.servant.multiplier }}% * {{ finalBuff[i-1] }} = {{ damageArray[i-1] }}
                            </tr>
                            <!-- <h5 class="text-h5 font-weight-semibold text-primary mb-2">
                                $48.9k
                            </h5> -->
                            </VCardText>
                        </VCol>
                        <VCol cols="2">
                            <VCardText class="pb-0 px-0 position-relative h-100">
                            <VImg
                                :src="props.servant.image"
                                height="140"
                                class="w-100"
                                style="bottom: 0;"
                            />
                            </VCardText>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
            <!-- <tr
            >
                <td style="padding-block: 0.61rem;">
                    <div class="d-flex align-center">
                        <div class="me-3">
                            <VImg
                            :src="props.servant.image"
                            width="50"
                            />
                        </div>
                    </div>
                </td>
            </tr>
            <tr v-for="i in 2">
                {{ buffOfBattle[i-1].a }}A * {{ buffOfBattle[i-1].b  }}B * {{ buffOfBattle[i-1].c_np +buffOfBattle[i-1].c_skill }}C * {{ buffOfBattle[i-1].d }}D * {{ buffOfBattle[i-1].class_advantage }} = {{ finalBuff[i-1] }}
            </tr>
            <tr>
                {{ buffOfBattle[2].a }}A * {{ buffOfBattle[2].b  }}B * ({{ buffOfBattle[2].c_np }} * 2 + {{ buffOfBattle[2].c_skill }})C * {{ buffOfBattle[2].d }}D * {{ buffOfBattle[2].class_advantage }} = {{ finalBuff[2] }}
            </tr> -->
</template>

<style lang="scss">
.Name{
    padding-left: 2%;
    padding-top: 2%;
}

.info{
    padding-left: 2%;
}

</style>>
