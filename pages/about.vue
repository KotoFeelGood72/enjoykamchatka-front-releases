<template>
    <div v-if="data.intro" class="about-us">
        <parallax :layers="layers" />
        <PageHeader class="header__padding about-us__header">{{ data.intro.bannerText }}</PageHeader>
            <div class="about-us__wrap">
              <div class="container--middle-tour page-content text--24 about-us__bg_without_pb">
                  <div v-for="(textBlock, index) in data.intro.textBlocks" :key="'text-block-' + index">
                    <Heading tag="h2" class="text--40" color="lightBlue">{{ textBlock.title }}</Heading>
                    <p class="text--24" v-html="textBlock.text"/>
                    <Heading />
                    <videoEmbed isContainer="true" v-if="textBlock.video && textBlock.img" :url="textBlock.video" :data="textBlock.img" />
                    <ContentImage width="fullwidth" v-if="textBlock.img && !textBlock.video" isBack="true" :data="textBlock.img"/>
                </div>
              </div>
            <div class="container page-content_without_ptop text--24 about-us__bg">

                <Heading v-if="data.team && data.team.title" class="text--40 team-title" tag="h2" color="lightBlue">{{ data.team.title }}</Heading>
                <div v-if="data.team && data.team.team.length" class="about__teams row">
                    <div v-for="(team, index) in data.team.team" :key="'team-' + index" class="about__team col-md-6 col-12">
                        <div class="about__team-block">
                            <img-com :img="team.img"/>
                            <div class="about__team-container">
                                <p class="about__team-name" v-if="team.name" v-html="team.name"/>
                                <p class="about__team-text" v-if="team.text" v-html="team.text"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Heading v-if="data.advantages.length" tag="h2" size="lg" class="text--70" color="lightBlue">Наши преимущества</Heading>
                <div class="row about-us__advantages">
                    <div class="about-us__advantages-content col-md-8 col-lg-6">
                        <div v-for="(item, index) in data.advantages" :key="'about-us__advantages-' + index">
                            <Heading tag="h2" color="white" size="md">{{ item.name }}</Heading>
                            <p class="text--24">{{ item.text }}</p>
                        </div>
                    </div>
                    <div class="about-us__advantages-img col-md-4 offset-lg-1 d-none d-md-block">
                        <ContentImage src="aboutUs/storm.svg"/>
                    </div>
                </div>
            </div>
        </div>
        <ContactQueue :isAboutPage="true"/>
    </div>
</template>
<script>
import Heading from '../components/content/heading';
import ContentImage from '../components/images/contentImage';
import videoEmbed from '../components/srcVideo/videoEmbed';
import PageHeader from '../components/content/pageHeader';
import parallax from '../components/parallax/index';
import ContactQueue from '../components/ContactQueue/ContactQueue'
import seoHead from '../mixins/seo-head';
import { fetchData } from '~/utils/fetchData';

export default {
    name: 'aboutUs',
		mixins: [seoHead],
    components: {
        PageHeader,
        Heading,
        ContentImage,
        videoEmbed,
        parallax,
        ContactQueue
    },
    data() {
        return {
            hover: false,
            data: {},
            seo: '',
            layers: [
                {
                strength: .25,
                background: {
                    image: 'url("/parallax/about/1.png")'
                }
                },
                {
                strength: .5,
                background: {
                    image: 'url("/parallax/about/2.png")'
                }
                },
                {
                strength: .66,
                background: {
                    image: 'url("/parallax/about/3.png")'
                }
                }
            ]
        };
    },
    methods: {
        hoverStatusChange(person) {
            person.hoverStatus = !person.hoverStatus;
        }
    },
		async asyncData(context) {
			return fetchData('about', context);
		},
		mounted() {
        let breadCrumbs = [
            {name: this.data.intro.bannerText}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    }
};

</script>
<style lang="scss" scoped>
    @import "~assets/scss/config";
    @import "~assets/scss/mixins";
    .text--24 {
        font-size: 24px;
        line-height: 1.5;
        @include respond-to(lg) {
            font-size: 20px;
            line-height: 1.5;
        }
        @include respond-to(sm) {
            font-size: 18px;
            line-height: 1.5;
        }
        @include respond-to(xs) {
            font-size: 16px;
            line-height: 1.5;
        }
    }
    .text--40 {
        font-size: 40px;
        line-height: 1.5;
        margin-top: 1em;
        margin-bottom: .5em;
        @include respond-to(lg) {
            font-size: 34px;
            line-height: 1.5;
        }
        @include respond-to(sm) {
            font-size: 28px;
            line-height: 1.5;
        }
        @include respond-to(xs) {
            font-size: 22px;
            line-height: 1.5;
        }
    }

    .text--70 {
        font-size: 55px;
        margin-top: 1em;
        @include respond-to(sm) {
            font-size: 40px;
        }
    }

    /deep/ .content-image--fullwidth {
        margin-top: 70px;
        margin-bottom: 70px
    }

    .team-title {
        max-width: 700px;
    }

    .about-us__first-title {
        margin-top: 0;
    }
    .about-us__header h1 {
        color: color(white) !important;
    }
    .fade-enter-active, .fade-leave-active {
        transition: transform .5s;
    }
    .fade-enter, .fade-leave-to {
        transform: translateX(-100%);
    }
    .about-us {
        color: color(white);
        background-color: color(black);
        .page-content {
            padding-bottom: 0;
        }
        .about-us__bg {
            padding-bottom: 180px;
            /*background: url("~assets/img/aboutUs/bg.svg") center center;*/
            background-size: 100%;
            @include respond-to(md) {
                padding-bottom: 80px;
            }
        }
        .about-us__bg_without_pb {
            // padding-bottom: 180px;
            /*background: url("~assets/img/aboutUs/bg.svg") center center;*/
            background-size: 100%;
            @include respond-to(md) {
                // padding-bottom: 80px;
            }
        }
        &__wrap {
            background: #0e121a;
            position: relative;
            margin-top: 200px;
            @include respond-to(sm) {
                margin-top: 0;
            }
        }
        .page-header {
            position: absolute;
            top: 0;
            left: 8px;
            right: 0;
            @include respond-to(md) {
                left: 0;
                top: -50px;
            }
            @include respond-to(sm) {
                left: 25px;
                top: 0;
            }
            /deep/ .container {
                margin:  0 auto;
                padding: 0;
            }
        }
        /deep/ #parallax .keyart_layer{
            background-position: left center;
        }
    }
    .about-us__header-container {
        margin-top: auto;
        margin-bottom: auto;
        h1 {
            margin: 0 !important;
            color: color(white) !important;
        }
    }
    .about-us__people {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .about__teams {
        margin-top: 30px;
        padding-left: 10px;
        @include respond-to(sm) {
            flex-wrap: nowrap;
            overflow-x: scroll;
            margin-left: -25px;
            margin-right: -25px;
        }
    }

    .about__team {
        height: 100%;
        margin-top: 10px;
        margin-bottom: 30px;
        .about__team-block {
            position: relative;
            height: 490px;
            overflow: hidden;
            @include respond-to(md) {
                height: 400px;
            }
        }

        @include respond-to(sm) {
            flex-basis: 80%;
        }

        @include respond-to(xs) {
            flex-basis: 90%;
        }

        img {
            width: 100%;
            max-height: 550px;
        }
         @include respond-to(xs) {
            /deep/.img__container { padding:0px 0.3px; }
         }
        &:hover {
            // Fix__comand_img
            @include respond-to(xs) {
             /deep/.img__container { padding:0px 1px; }
              }
            .about__team-container {
                height: 100%;
            }

            .about__team-text {
                font-size: 20px;
                line-height: 1.5;
                opacity: 0.8;
                @include respond-to(md) {
                    display: -webkit-box;
                    -webkit-line-clamp: 10;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                @include respond-to(sm) {
                    font-size: 15px;
                    -webkit-line-clamp: inherit;
                }
            }
        }

        .about__team-container {
            height: 70px;
            position: absolute;
            bottom: 0;
            width: 100%;
            transition: height .6s ease-out;
            background: #2A2E39;
            padding: 0 20px;
        }

        .about__team-text {
            font-size: 0;
            line-height: 1.5;
            color: #FBFBFB;
            opacity: 0;
            transition: opacity 1s ease-out;
        }

        .about__team-name {
            font-size: 30px;
            line-height: 1.5;
            margin-top: 18px;
            color: #FBFBFB;
            @include respond-to(lg) {
                font-size: 24px;
                line-height: 1.5;
            }
            @include respond-to(sm) {
                font-size: 20px;
                line-height: 1.5;
            }
        }
    }

    .about-us__advantages {
        h2 {
            color: color(white) !important;
            margin-top: 1.5em;
            margin-bottom: .6em;
        }
    }
    .about-us__advantages-img {
        position: absolute;
        right: 0;
        padding-right: 0;
        margin-top: 25%;
    }
</style>
