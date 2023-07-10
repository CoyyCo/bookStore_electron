<template>
    <div id="home">
        <div class="home_item">
            <div class="backgroundImage">
                <img :src="bgimgUrl" alt="">
            </div>
        </div>
        <div class="home_item">
            <div class="item-info">
                <div class="info-logo">
                    <img :src="logo" alt="">
                </div>
                <div class="info-title">
                    <p>Welcome back!</p>
                    <p>Login to your account</p>
                </div>
            </div>
            <router-view v-slot="{ Component }">
                <transition name="router_animate">
                    <component :is="Component" />
                </transition>
            </router-view>
            <!-- <router-view></router-view> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import bgimgUrl from '@/assets/bgimg.jpg'
import logo from '@/assets/Logo.png'
</script>

<style scoped lang="scss">
#home {
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;

    .home_item {
        height: 100%;
        width: 50%;
        box-sizing: border-box;

        // border: 1px solid var(--background-color-main);
        .backgroundImage {
            height: 100%;
            width: 100%;

            // border: 1px solid blue;
            img {
                // border: 1px solid red;
                height: 100%;
                width: 100%;
            }
        }

        .item-info {

            .info-logo {
                padding: 40px 0;
                text-align: center;
                img {
                    // border: 10px solid rgb(56, 134, 69);
                    height: 48px;
                    width: 72px;
                }
            }

            .info-title {
                // border: 1px solid red;
                width: 240px;
                margin: 0 auto;

                p {
                    margin: 9px 0;
                    text-align: left;
                }

                P:nth-child(1) {
                    font-size: 24*0.6 px;
                    color: rgba(9, 9, 55, 0.6);
                }

                p:nth-child(2) {
                    font-size: 32*0.6 px;
                    color: #090937;
                    font-weight: bold;
                }
            }
        }
    }
}

.router_animate-enter-active {
    animation: fadeInDown .3s;
    animation-delay: .5s;
}

.router_animate-leave-active {
    animation: fadeOutDown .5s;
}
</style>