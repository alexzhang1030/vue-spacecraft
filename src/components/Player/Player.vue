<script setup lang="ts">
// TODO refactor plane
import { usePlayerMove } from '~/composables';
const { left: initLeft, top: initTop, x, y } = usePlayerMove()
const left = $computed(() => `${initLeft}px`)
const top = $computed(() => `${initTop}px`)
const transformStyle = $computed(() => `translate(${x.value}px, ${y.value}px)`)
</script>
<template>
    <div class="player" :style="{
        left, top,
        transform: transformStyle
    }" transition="duration-150">
        <div class="body"></div>
        <div class="head"></div>
        <div class="glass"></div>
        <div class="fire">
            <span w="6px" h="6px" left="50.5335%" animate=""
                style="width: 6px; height: 6px; left: 50.5335%; animation-duration: 356ms; animation-delay: 0ms; background-color: rgba(255, 68, 26, 0.77);"></span>
            <span
                style="width: 7px; height: 7px; left: 46.2838%; animation-duration: 464ms; animation-delay: 0ms; background-color: rgba(255, 37, 26, 0.7);"></span>
            <span
                style="width: 1px; height: 1px; left: 53.1594%; animation-duration: 668ms; animation-delay: 0ms; background-color: rgba(255, 41, 26, 0.57);"></span>
            <span
                style="width: 0px; height: 0px; left: 53.6591%; animation-duration: 394ms; animation-delay: 1000ms; background-color: rgba(255, 52, 26, 0.83);"></span>
        </div>
        <div class="guns"></div>
        <div class="fins"></div>
        <div class="fins2"></div>
        <div class="overlay"></div>
    </div>

</template>
<style scoped>
.player {
    position: fixed;
    width: 80px;
    height: 75px;
    z-index: 9;
}

.player .body {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 44px;
    height: 58px;
    background: #fff;
    transform: translate(-50%, 0);
    border-radius: 100% 100% 8px 8px;
    z-index: 2;
}

.player .overlay::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 48px;
    width: 44px;
    height: 23px;
    transform: translate(-50%, 0);
    border-radius: 0 0 8px 8px;
    background: #fff;
    z-index: 9;
}

.player .overlay::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 70px;
    width: 28px;
    height: 6px;
    transform: translate(-50%, 0);
    border-radius: 0 0 2px 2px;
    background: #888;
    z-index: 7;
}

.player .fins {
    position: absolute;
    z-index: 1;
    width: 40px;
    top: 40px;
    height: 24px;
    left: 50%;
    transform: translate(-50%, 0);
}

.player .fins::after,
.player .fins::before {
    content: '';
    position: absolute;
    top: 0%;
    right: 100%;
    width: 25px;
    height: 20px;
    transform: skewY(10deg);
    transform-origin: top right;
    background: #d6d7dd;
}

.player .fins::after {
    right: auto;
    left: 100%;
    transform-origin: top left;
    transform: skewY(-10deg);
}

.player .fins2 {
    position: absolute;
    width: 24px;
    top: 56px;
    height: 24px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -8;
}

.player .fins2::after,
.player .fins2::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 29px;
    height: 12px;
    transform: skewY(22deg);
    transform-origin: top right;
    background: #b8b9be;
    z-index: -8;
}

.player .fins2::after {
    right: auto;
    left: 100%;
    transform-origin: top left;
    transform: skewY(-22deg);
}

.player .head {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 20px;
    height: 50px;
    height: 60px;
    transform: translate(-50%, 0);
    border-radius: 50% 50% 0 0;
    background: #e2e2e2;
    box-shadow: 0 4px 0 6px #1e1a20;
    z-index: 3;
}

.player .glass {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 10px;
    background: #87f5f2;
    border-radius: 8px 8px 0 0;
    border: 1px solid #c3c3c3;
    z-index: 9;
}

.player .guns {
    position: absolute;
    top: 34px;
    width: 64px;
    left: 50%;
    transform: translate(-50%, -1px);
    z-index: -1;
}

.player .guns::after,
.player .guns::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 10px;
    box-shadow: 0 0 10px 1px rgba(20, 149, 255, 0.3);
    background: rgb(255, 255, 255);
    border-radius: 10px 10px 0 0;
    transform: rotate(8deg);
}

.player .guns::after {
    left: auto;
    right: 0;
    transform: rotate(-8deg);
}

.player .fire {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 22px;
    height: 30px;
    transform: translate(-50%, 0);
}

.player .fire::before {
    content: '';
    position: absolute;
    top: -11px;
    left: 50%;
    width: 8px;
    height: 40px;
    transform: translate3d(-50%, -30px, 0px) scaleX(0.6);
    border-radius: 100%;
    background: rgba(14, 255, 255, 0.692);
    animation: blueFire 2s infinite;
    box-shadow: 0 24px 14px 3px rgb(17, 73, 255);
    z-index: -1;
}

@keyframes blueFire {

    0%,
    100% {
        transform: translate3d(-50%, -30px, 0px) scaleX(0.6);
    }

    50% {
        transform: translate3d(-50%, -27px, 0px) scaleX(0.6);
    }
}

.player .fuel {
    position: absolute;
    top: 50px;
    left: 50%;
    height: 4px;
    width: 30px;
    border-radius: 1px;
    border: 2px solid #ddd;
    background: #ddd;
    transform: translate(-50%, 0);
    z-index: 9;
    display: flex;
    align-items: center;
    gap: 1px;
}

.player .fuel span {
    flex-grow: 1;
    background: #fff;
    height: 100%;
}

.player .fuel span.active {
    background: #ff2929;
    border-radius: 1px;
}

.player .fire::after {
    content: '';
    position: absolute;
    top: -11px;
    left: 50%;
    width: 8px;
    height: 20px;
    transform: translate3d(-50%, -9px, 0px);
    border-radius: 100%;
    background: rgb(255, 200, 72);
    box-shadow: 0 6px 10px 3px rgb(255, 184, 32), 0 6px 20px 3px rgb(255, 77, 23);
    z-index: -1;
}

.player .fire span {
    position: absolute;
    top: 0;
    width: 30px;
    height: 30px;
    background: rgb(255, 77, 23);
    box-shadow: 0 6px 8px 3px rgb(255, 184, 32), 0 6px 20px 4px rgb(255, 77, 23);
    border-radius: 100%;
    opacity: 0;
    transform: scale(0);
    animation: fire 2s infinite;
}

@keyframes fire {
    0% {
        opacity: 0;
        transform: translate3d(-50%, -10px, 0px) scale(0.1);
    }

    10% {
        opacity: 1;
        transform: translate3d(-50%, -10px, 0px) scale(1);
    }

    100% {
        transform: translate3d(-50%, -3px, 0px);
        opacity: 0;
    }
}
</style>