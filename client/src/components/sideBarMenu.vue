<template>
    <div>
        <div class="menuBody">
            <div class="menuIcon" @click="active = !active">
                <transition name="rotate">
                    <span v-if="active"></span>
                    <span v-if="active"></span>
                    <span v-if="active"></span>
                </transition>
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
    </div>
</template>

<script>
    export default {
        name: "sideBarMenu",
        data() {
            active: false
        }
    }
</script>

<style scoped>

    .rotate-enter, .rotate-leave-to {

    }
    .rotate-enter-active, .rotate-leave-active {
        transition: all .5s;
    }
    .rotate-enter-to, .rotate-leave {

    }


    .menuBody {
        margin: 0;
        padding: 0;
    }

    .menuIcon {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 44px;
        padding: 4px 8px;
        background: #262626;
        box-sizing: border-box;
        cursor: pointer;
    }

    .menuIcon span {
        width: 100%;
        height: 4px;
        display: block;
        background: #ffffff;
        margin: 6px 0;
        transition: .5s;
    }

    .menuBody .sideBar {
        position: fixed;
        top: 70px;
        left: -300px;
        width: 300px;
        height: 100vh;
        background: #262626;
        transition: .5s;
        padding: 20px;
        text-align: center;
        box-sizing: border-box;
        opacity: .85;
    }

    .sideBar.active{
        left: 0;
    }

    .sideBar .menu {
        margin: 0;
        padding: 40px 0;
    }

    .sideBar .menu li{
        list-style: none;
        font-family: sans-serif;
    }

    .sideBar .menu li a {
        display: block;
        padding: 10px 0;
        text-transform: uppercase;
        color: #ffffff;
        font-size: 18px;
        text-decoration: none;
    }

    .sideBar .menu li a:hover {
        background-color: #fc2827;
        color: #ffffff;
        padding: 10px;
        font-weight: bold;
        font-size: 24px;
        text-transform: uppercase;
    }

    .menuIcon.active span{
        position: absolute;
        width: calc(100% - 16px);
        top: calc(50% - 8px);
    }

    .menuIcon.active span:nth-child(1) {
        transform: rotate(45deg);
    }

    .menuIcon.active span:nth-child(2) {
        transform: rotate(45deg);
    }

    .menuIcon.active span:nth-child(3) {
        transform: rotate(135deg);
    }
</style>