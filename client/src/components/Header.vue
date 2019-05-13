<template>
    <div>
        <div class="heading">
            <div class="title">
                <h1>{{ character.name }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .heading {
        text-decoration: underline;
    }

    .title {
        padding: 15px;
        text-align: left;
        background: red;
        color: black;
        font-size: 30px;
    }

    h2 {
        font-weight: bolder;
    }

    p {
        color: #ffffff;
    }

    html, body {
        padding: 15px 15px 15px 15px;
        margin: 0;
        background-color: #4f5154;
    }
</style>