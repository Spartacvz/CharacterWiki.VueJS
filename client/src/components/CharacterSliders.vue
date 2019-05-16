<template>
    <div>
        <!--Slide panel for CHARACTER IMAGE-->
        <div class="imageHolder" @click="show = !show">
            <transition name="slide">
                <img class="quikView" v-bind:src="character.fileName" v-bind:alt="character.name" width="300" height="400" v-if="show">
            </transition>
        </div>

        <!--Slide panel for NAME & TITLE-->
        <div class="names" @click="show = !show">
            <transition name="slide">
                <p class="quikView" v-if="show">
                    <strong>Name/Title:</strong>  {{ character.name }} "{{ character.title }}"
                </p>
            </transition>
        </div>

        <!--Slide panel for CHARACTER BUILD-->
        <div class="build" @click="show = !show">
            <transition name="slide">
                <p class="quikView" v-if="show">
                    <strong>Height/Weight:</strong>	{{ character.height }}/{{ character.weight }}
                </p>
            </transition>
        </div>

        <!--Slide panel for SUPERPOWER-->
        <div class="power" @click="show = !show">
            <div class="powerSlider">
                <transition name="slide">
                    <p class= "quikView" v-if="show">
                        <strong>Super Power:</strong> {{ character.superPower }}
                    </p>
                </transition>
            </div>
        </div>

        <!--Slide panel for TALENTS-->
        <div class="talents" @click="show = !show">
            <transition name="slide">
                <p class="quikView" v-if="show">
                    <strong>Learned Skills:</strong> {{ character.skillOne}}, {{ character.skillTwo}}
                </p>
            </transition>
        </div>

        <!--Slide panel for Abilities-->
        <div class="abilities" @click="show = !show">
            <transition name="slide">
                <p class= "quikView" v-if="show">
                    <strong>Enhanced Abilities:</strong> {{ character.enhancedAbilityOne }}, {{ character.enhancedAbilityTwo }}, {{ character.enhancedAbilityThree }}
                </p>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CharacterSliders"
    }
</script>

<style scoped>

</style>