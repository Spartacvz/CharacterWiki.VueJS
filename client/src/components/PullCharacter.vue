<template>
    <div class="charTemplate">
        <!--Section for character INTRODUCTION-->
        <a name="Introduction"></a>
        <div class="pHeader">
            <h2>Introduction</h2><button @click="hide = !hide">OPEN</button>
        </div>
        <transition name="drop">
            <p class="dropView" v-if="hide">
                {{ character.introduction }}
            </p>
        </transition>

        <!--Section for character CHILDHOOD-->
        <a name="Childhood"></a>
        <div class="pHeader">
            <h2>Childhood</h2><button @click="hide = !hide">OPEN</button>
        </div>
        <transition name="drop">
            <p class="dropView" v-if="hide">
                {{ character.childhood }}
            </p>
        </transition>

        <!--Section for character EDUCATION-->
        <a name="Training"></a>
        <div class="pHeader">
            <h2>Education</h2><button @click="hide = !hide">OPEN</button>
        </div>
        <transition name="drop">
            <p class="dropView" v-if="hide">
                {{ character.training }}
            </p>
        </transition>

        <!--Section for character CAREER-->
        <a name="Career"></a>
        <div class="pHeader">
            <h2>Career</h2><button @click="hide = !hide">OPEN</button>
        </div>
        <transition name="drop">
            <p class="dropView" v-if="hide">
                {{ character.career }}
            </p>
        </transition>

        <!--Section for character ACCOMPLISHMENTS-->
        <a name="Accomplishments"></a>
        <div class="pHeader">
            <h2>Accomplishments</h2><button @click="hide = !hide">OPEN</button>
        </div>
        <transition name="drop">
            <p class="dropView" v-if="hide">
                {{ character.accomplishments }}
            </p>
        </transition>

        <!--Section for character FAMILY-->
        <a name="Family"></a>
        <div class="pHeader">
            <h2>Family</h2><button @click="hide = !hide">OPEN</button>
        </div>
        <transition name="drop">
            <p class="dropView" v-if="hide">
                {{ character.family }}
            </p>
        </transition>

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
            <transition name="slide">
                <p class= "quikView" v-if="show">
                    <strong>Super Power:</strong> {{ character.superPower }}
                </p>
            </transition>
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
                    <strong>Enhanced Abilities:</strong> {{ enhancedAbilityOne }}, {{ enhancedAbilityTwo }}, {{ enhancedAbilityThree }}
                </p>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PullCharacter",
        props: {
            character: Object
        },
        data() {
            show: false,
            return {
                name: this.character.name,
                height: this.height,
                weight: this.weight,
                superPower: this.superPower,
                skillOne: this.skillOne,
                skillTwo: this.skillTwo,
                enhancedAbilityOne: this.enhancedAbilityOne,
                enhancedAbilityTwo: this.enhancedAbilityTwo,
                enhancedAbilityThree: this.enhancedAbilityThree,
                introduction: this.introduction,
                childhood: this.childhood,
                training: this.training,
                career: this.career,
                accomplishments: this.accomplishments,
                family: this.family,
                fileName: this.fileName,
            }
            hide: false
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .drop-enter,.drop-leave-to {
        display: none;
    }
    .drop-enter-active, .drop-leave-active {
        transition: transform .5s;
    }
    .drop-enter-to, .drop-leave {
        visibility: visible;
    }
    .slide-enter,.slide-leave-to {
        transform: translateX(-100%);
    }
    .slide-enter-active, .slide-leave-active {
        transition: transform .5s;
    }
    .slide-enter-to, .slide-leave {
        transform: translateX(0);
    }
    .imageHolder {
        width: 190px;
        height: 75px;
        cursor: pointer;
    }
    .names {
        width: 190px;
        height: 75px;
        cursor: pointer;
    }
    .build {
        width: 190px;
        height: 75px;
        cursor: pointer;
    }
    .power {
        width: 190px;
        height: 75px;
        cursor: pointer;
    }
    .talents {
        width: 190px;
        height: 90px;
        cursor: pointer;
    }
    .abilities {
        width: 190px;
        height: 125px;
        cursor: pointer;
    }

</style>