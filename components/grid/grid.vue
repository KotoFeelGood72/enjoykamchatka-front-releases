<template>
    <div v-if="data.length" class="row">
        <div v-for="(item, index) in data" class="col-12" :class="['col-xl-' + dataCol[isMobile][data.length][index], 'col-sm-' + dataCol[isMobile][data.length][index]]" :key="item.id">
            <nuxt-link
                :to="item.slug + '/'" class="grid-item">
                <img-com  :img="item.img" classImg="grid-image"/>
                <div class="grid-name">
                    <span>{{item.name}}</span>
                </div>
            </nuxt-link>
        </div>
        <vodal   :show="show" style="z-index:1999"  :duration="400"  @hide="show = false" >
        <div v-if="activeItem && isPopup" class="popup-active-grid">
            <div class="popup-active-grid__overlay"/>
            <div class="popup-active-grid__body">
               <span @click="closePopupLocation" class="popup-active-grid__body-close">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="28.2847" y="0.472656" width="6" height="40" transform="rotate(45 28.2847 0.472656)" fill="#FBFBFB"/>
                        <rect x="32.5269" y="28.7568" width="6" height="40" transform="rotate(135 32.5269 28.7568)" fill="#FBFBFB"/>
                    </svg>
                </span>
                <img-com :img="activeItem.img"/>
                <HeadingStep :modalProps="true" tag="h2" color="white" size="sm">{{ activeItem.name }}</HeadingStep>
                <div class="popup-active-grid__text" v-html="activeItem.text"/>
                <p class="popup-active-grid__close-text" @click="closePopupLocation">Закрыть</p>
            </div>
        </div>
        </vodal>
    </div>
</template>

<script>

    import Heading from "../content/heading";
    import HeadingStep from "../content/headingStep";
    import Vodal from 'vodal';
    export default {
        name: "grid",
        components: {Heading,Vodal,HeadingStep},
        props: ['urlParent', 'data', 'isPopup'],
        data() {
            return {
                activeItem: '',
                show:false,
                dataCol: {
                    2500: {
                        50: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8','6','6','4','8','6','6'],
                        49: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8','6','6','4','8','6'],
                        48: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8','6','6','4','8'],
                        47: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8','6','6','4'],
                        46: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8','6','6'],
                        45: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8','6'],
                        44: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4','8'],
                        43: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8','4'],
                        42: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4','8'],
                        41: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6','4'],
                        40: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3','6'],
                        39: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3','3'],
                        38: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4','3'],
                        37: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8','4'],
                        36: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3','8'],
                        35: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3','3'],
                        34: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6','3'],
                        33: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8','6'],
                        32: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4','8'],
                        31: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6','4'],
                        30: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3','6'],
                        29: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3','3'],
                        28: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4','3'],
                        27: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8','4'],
                        26: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6','8'],
                        25: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6','6'],
                        24: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8','6'],
                        23: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4','8'],
                        22: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6','4'],
                        21: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3','6'],
                        20: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3','3'],
                        19: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4','3'],
                        18: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8','4'],
                        17: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6','8'],
                        16: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6', '6'],
                        15: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '8', '6'],
                        14: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '4', '6'],
                        13: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8', '6'],
                        12: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '4', '8'],
                        11: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6', '6'],
                        10: ['4', '8', '6', '3', '3', '8', '4', '3', '3', '6'],
                        9: ['4', '8', '6', '3', '3', '8', '4', '6', '6'],
                        8: ['4', '8', '6', '3', '3', '8', '4', '6'],
                        7: ['4', '8', '6', '3', '3', '8', '4'],
                        6: ['4', '8', '6', '3', '3', '6'],
                        5: ['4', '8', '6', '3', '3'],
                        4: ['4', '8', '6', '6'],
                        3: ['4', '8', '6'],
                        2: ['4', '8'],
                        1: ['6']
                    },
                     1500: {
                        50: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        49: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        48: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        47: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        46: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        45: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        44: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        43: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        42: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        41: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        40: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        39: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        38: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        37: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        36: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        35: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        34: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        33: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        32: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        31: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        30: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        29: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        28: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        27: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6'],
                        26: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6'],
                        25: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12'],
                        24: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6'],
                        23: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6'],
                        22: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6'],
                        21: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6'],
                        20: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12'],
                        19: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6'],
                        18: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6'],
                        17: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6'],
                        16: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6'],
                        15: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12'],
                        14: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6'],
                        13: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6'],
                        12: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6'],
                        11: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6'],
                        10: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12'],
                        9: ['6', '6', '6', '6', '12', '6', '6', '6', '6'],
                        8: ['6', '6', '6', '6', '12', '6', '6', '6'],
                        7: ['6', '6', '6', '6', '12', '6', '6'],
                        6: ['6', '6', '6', '6', '12', '6'],
                        5: ['6', '6', '6', '6', '12'],
                        4: ['6', '6', '6', '6'],
                        3: ['6', '6', '12'],
                        2: ['6', '6'],
                        1: ['12']
                    },
                    1281: {
                        50: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        49: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        48: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        47: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        46: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        45: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        44: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        43: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        42: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        41: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        40: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        39: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        38: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        37: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        36: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        35: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        34: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        33: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        32: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6','6'],
                        31: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12','6'],
                        30: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6','12'],
                        29: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6','6'],
                        28: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6','6'],
                        27: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6','6'],
                        26: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12','6'],
                        25: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6','12'],
                        24: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6','6'],
                        23: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6','6'],
                        22: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6','6'],
                        21: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12','6'],
                        20: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6','12'],
                        19: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6','6'],
                        18: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6','6'],
                        17: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6','6'],
                        16: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6'],
                        15: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6', '12'],
                        14: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6', '6'],
                        13: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6', '6'],
                        12: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6', '6'],
                        11: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12', '6'],
                        10: ['6', '6', '6', '6', '12', '6', '6', '6', '6', '12'],
                        9: ['6', '6', '6', '6', '12', '6', '6', '6', '6'],
                        8: ['6', '6', '6', '6', '12', '6', '6', '6'],
                        7: ['6', '6', '6', '6', '12', '6', '6'],
                        6: ['6', '6', '6', '6', '12', '6'],
                        5: ['6', '6', '6', '6', '12'],
                        4: ['6', '6', '6', '6'],
                        3: ['6', '6', '12'],
                        2: ['6', '6'],
                        1: ['12']
                    },
                    751: {
                        50: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        49: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        48: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        47: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        46: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        45: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        44: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        43: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        42: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        41: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        40: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        39: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        38: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        37: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        36: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        35: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        34: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        33: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        32: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        31: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        30: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        29: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        28: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12','12'],
                        27: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12','12'],
                        26: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12','12'],
                        25: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12','12'],
                        24: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12','12'],
                        23: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12','12'],
                        22: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12','12'],
                        21: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12','12'],
                        20: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12','12'],
                        19: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12','12'],
                        18: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12','12'],
                        17: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12','12'],
                        16: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        15: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        14: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        13: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        12: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        11: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        10: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        9: ['12', '12', '12', '12', '12', '12', '12', '12', '12'],
                        8: ['12', '12', '12', '12', '12', '12', '12', '12'],
                        7: ['12', '12', '12', '12', '12', '12', '12'],
                        6: ['12', '12', '12', '12', '12', '12'],
                        5: ['12', '12', '12', '12', '12'],
                        4: ['12', '12', '12', '12'],
                        3: ['12', '12', '12'],
                        2: ['12', '12'],
                        1: ['12']
                    }

                },
                isMobile: 2500,
                scrollPosition: false
            }
        },
        mounted() {
            console.log('urlParent ', this.urlParent)
            window.onresize = () => {
                this.isMobileWidth();
            };
            this.isMobileWidth();
        },
        methods: {
            isMobileWidth() {
                if (window.innerWidth < 1281) {
                    this.isMobile = 1281;
                } else {
                    this.isMobile = 2500;
                }
                if (window.innerWidth < 769) {
                    this.isMobile = 751;
                }
                if (window.innerWidth< 1500){
                    this.isMobile = 1500;
                }
            },
            changeActiveItem(item) {

                if (this.isPopup) {
                    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                    document.getElementsByTagName('body')[0].classList.add('t-body_scroll-locked_menu');
                    this.activeItem = item;
                    this.show = true
                }
            },
            closePopupLocation() {
                this.show = false
                document.getElementsByTagName('body')[0].classList.remove('t-body_scroll-locked_menu');
                this.scrollPosition = 0;
                // this.activeItem = '';

            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/mixins";
    @import "~@/assets/scss/config";
    @import "vodal/common.css";
    // @import "wow.js/css/libs/animate.css";
    /deep/.img__container {
        height: 100%;
    }
    // .animate-trim{
    //     opacity:0;
    // }
    .grid {

        &-name {
            position: absolute;
            left: 0;
            bottom: 50px;
            background: color(granite);
            min-height: 100px;
            padding: 0 30px;
            display: flex;
            align-items: center;
            cursor: pointer;
            &.no-cursor {
                cursor: auto;
            }
            @include respond-to(lg) {
                min-height: 60px;
                min-width: 300px;
            }
            @include respond-to(md) {
                min-height: 60px;
                min-width: 240px;
                max-width: 240px;

            }
            span {
                font-size: 24px;
                line-height: 1.5;
                font-weight: 700;
                color: color(craiola);
                @include respond-to(lg) {
                    font-size: 20px;
                    line-height: 1.5;
                }
                @include respond-to(sm) {
                    font-size: 18px;
                    line-height: 1.5;
                }
            }
        }
        &-image {
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            display: block;
        }

        &-item {
            background: #ccc;
            width: 100%;
            height: 490px;
            position: relative;
            margin-bottom: 30px;
            display: block;

            @include respond-to(md) {
                height: 400px;
            }
        }
    }

    .popup-active-grid {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1999;
        overflow-y: auto;
        .popup-active-grid__overlay {
            background: #171920;
            opacity: 0.7;
            width: 100%;
            position: absolute;
            height: 100%;
        }
        .popup-active-grid__body {
            padding: 30px;
            max-width: 750px;
            width: 100%;
            background: #ffffff;
            position: relative;
            box-shadow: 10px 14px 20px rgba(0, 0, 0, 0.25);
            @media(max-height: 705px) {
                height: 100%;
                overflow-y: auto;
            }
            @include respond-to(sm) {
                height: 100%;
                overflow-y: auto;
            }
            /deep/.img__container {
                max-height: 350px;
                width: 100%;
                img {
                    width: 100%;
                    max-height: 350px;
                }
            }
            h2 {
                margin-top: 0px;
                padding-top: 30px;
            }
            /deep/p {
                color: #2a2e39;
                margin-bottom: 20px;
            }
            a {
                color: #1DCFFF;
                font-weight: 500;
                font-size: 20px;
                line-height: 1.5;
                &:hover {
                    color: #2a2e39;
                }
            }
        }
        .popup-active-grid__text {
            color: #2a2e39;
            max-height: 200px;
            overflow: auto;
            font-size: 16px;
            line-height: 1.5;
            font-family: 'Montserrat';
            font-weight: 400;
            @include respond-to(sm) {
                max-height:none;
                overflow: none;
            }
            /deep/p, /deep/a {
                font-size: 16px;
                line-height: 1.5;
                font-family: 'Montserrat';
                font-weight: 400;
            }
        }
        .popup-active-grid__close-text {
            display: none;
            text-align: center;
            color: #FBFBFB;
            font-weight: 500;
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 30px;
            margin-top: 30px;
            @media(max-height: 705px) {
                display: block;
            }
            @media(max-width: 865px) {
                display: block;
            }
        }
        .popup-active-grid__body-close {
            position: absolute;
            right: -50px;
            top: -40px;
            width: 40px;
            height: 40px;
            cursor: pointer;
            @media(max-height: 705px) {
                display: none;
            }
            @media(max-width: 865px) {
                display: none;
            }
        }
    }
</style>
