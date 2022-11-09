<template>
    <div class="loader-wrapper">
            <span class="loader"><span class="loader-inner"></span></span>
        </div>
</template>

<style>
.loader-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding:0;
    margin:0;
    background:rgb(0, 250, 100);
}

.loader {
    width: 30px;
    height: 30px;
    position: relative;
    border: 4px solid rgb(238, 116, 94);
    animation: loader 2s infinite ease;
}

.loader-inner {
    vertical-align: top;
    width: 100%;
    background-color: rgb(238, 116, 94);
    animation: loader-inner 2s infinite ease-in;
}

.loader,
.loader-inner {
    z-index: 1100;
    display: inline-block;
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes loader-inner {
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
}


</style>

<script lang="js">
let loadingScreen = function () { 
    window.addEventListener('load', () => {
        document.querySelector(".loader-wrapper").style.display = "none";
        console.log("loaded");
});
  };
  
    export default {
        mounted() {
            loadingScreen();
        }
    };
</script>