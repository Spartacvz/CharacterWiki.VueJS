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


    </div>
</template>

<script>
    export default {
        name: "PullCharacter",
        component: {
            character: Object
        },
        data() {
            return {
                character: {name: ""},
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
                url:""
            }
            hide: false
        },
        mounted() {
            this.character.name = this.$route.params.character
            this.fetchCharacterData()
        },
        methods: {
            fetchCharacterData() {
                this.$characterService.getOne(this.character.name).then(data => {
                    this.character = data
                    this.height = data.height
                    this.weight = data.weight
                    this.superPower = data.superPower
                    this.skillOne = data.skillOne
                    this.skillTwo = data.skillTwo
                    this.enhancedAbilityOne = data.enhancedAbilityOne
                    this.enhancedAbilityTwo = data.enhancedAbilityTwo
                    this.enhancedAbilityThree = data.enhancedAbilityThree
                    this.introduction = data.introduction
                    this.childhood = data.childhood
                    this.training = data.training
                    this.career = data.career
                    this.accomplishments = data.accomplishments
                    this.family = data.family
                    this.fileName = data.fileName
                }).catch( err => console.error(err))
            }
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