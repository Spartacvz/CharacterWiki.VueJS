<template>
    <div class="charTemplate">
        <div class="menuBody">
            <div class="menuIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="sideBar">
                <ul class="menu">
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="#Basic Information">Basic Information</a></li> |
                    <li><a href="#Introduction">Introduction</a></li> |
                    <li><a href="#Early Years/Childhood">Early Years/Childhood</a></li> |
                    <li><a href="#Education">Education</a></li> |
                    <li><a href="#Career">Career</a></li> |
                    <li><a href="#Accomplishments">Accomplishments</a></li>
                    <li><a href="#Family">Family</a></li>
                </ul>
            </div>
        </div>

        <div class="heading">
            <div class="title">
                <h1>{{ character.name }}</h1>
            </div>
            </br>
        </div>

        <a name="Introduction"></a>
        <div class="pHeader">
            <h2>Introduction</h2>
        </div>
        <p>
            {{ character.introduction }}
        </p>
        </br>

        <a name="Early Years/Childhood"></a>
        <div class="pHeader">
            <h2>Early Years/Childhood</h2>
        </div>
        <p>
            {{ character.childhood }}
        </p>
        </br>

        <a name="Education"></a>
        <div class="pHeader">
            <h2>Education</h2>
        </div>
        <p>
            {{ character.training }}
        </p>
        </br>

        <a name="Career"></a>
        <div class="pHeader">
            <h2>Career</h2>
        </div>
        <p>
            {{ character.career }}
        </p>
        </br>

        <a name="Accomplishments"></a>
        <div class="pHeader">
            <h2>Accomplishments</h2>
        </div>
        <p>
            {{ character.accomplishments }}
        </p>
        </br>

        <a name="Family"></a>
        <div class="pHeader">
            <h2>Family</h2>
        </div>
        <p>
            {{ character.family }}
        </p>
        </br>

        <div class="imageHolder">
            <img class="quikView" src="{{character.fileName}}" width="300" height="400">
        </div>
        <div class="names">
            <p class="quikView">
                <strong>Name/Title:</strong>  {{ character.name }} "{{ character.title }}"
            </p>
        </div>
        <div class="build">
            <p class="quikView">
                <strong>Height/Weight:</strong>	{{ character.height }}/{{ character.weight }}
            </p>
        </div>
        <div class="power">
            <p class= "quikView">
                <strong>Super Power:</strong> {{ character.superPower }}
            </p>
        </div>
        <div class="talents">
            <p class= "quikView">
                <strong>Learned Skills:</strong> {{ character.skillOne}}, {{ character.skillTwo}}
            </p>
        </div>
        <div class="abilities">
            <p class= "quikView">
                <strong>Enhanced Abilities:</strong> {{ enhancedAbilityOne }}, {{ enhancedAbilityTwo }}, {{ enhancedAbilityThree }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PullCharacter.vue"
    }
</script>

<style scoped>

</style>