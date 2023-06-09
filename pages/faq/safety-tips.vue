<template>
    <div class="faq-content safety-tips">
        <FaqMenu/>
        <div class="container--middle page-content text--small">
            <div v-for="(elements, index) in data.tips" :key="'elements-' + index">
                  <Heading v-if="elements.name"
                         tag="p"
                         color="granite"
                         size="sm"
                         fw="600"
                         class="heading--title"
                         underline="bottom" v-html="elements.name"/>
                <div v-for="(item, i) in elements.items" :key="i">
                    <Heading v-if="item.title && item.underlineTitle"
                             tag="p"
                             color="granite"
                             size="sm"
                             fw="600"
                             underline="bottom" v-html="item.title"/>
                    <Heading v-if="item.title && !item.underlineTitle"
                             class="safety-tips__title"
                             tag="h2"
                             color="granite"
                             size="sm"
                             fw="600"
                             v-html="item.title"/>
                    <div class="safety-tips__text" v-if="item.text" v-html="item.text"/>
                    <divider v-if="i === 1 && index === 0"/>
                    <contentImage class="safety-tips__img" isBack="true" v-if="item.img" width="fullwidth" :data="item.img"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FaqMenu from '../../components/faqMenu/faqMenu';
import Heading from '../../components/content/heading';
import ContentImage from '../../components/images/contentImage';
import Divider from '../../components/content/divider';
import { fetchData } from '~/utils/fetchData';
import seoHead from '../../mixins/seo-head';
export default {
    name: 'entryRules',
		mixins: [seoHead],
    components: {
        FaqMenu,
        ContentImage,
        Divider,
        Heading
    },
    data() {
        return {
            data: {},
            seo: ''
        };
    },
		async asyncData(context) {
			return fetchData('safety-tips', context);
		},
    created() {
        let breadCrumbs = [
            {name: 'breadCrumbs.faqSafety'}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    }
};
</script>

<style lang="scss" scoped>
    @import "~assets/scss/config";
    @import "~assets/scss/mixins";
    .heading--title {
        margin-top:60px;
        line-height: 1.5;
        &:after {
            margin-top: 20px;
            margin-bottom: 20px;
        }
        @include respond-to(lg) {
             line-height: 1.5;
        }
        @include respond-to(md) {
            font-size: 22px;
             line-height: 1.5;
        }
        @include respond-to(sm) {
            margin-top:30px;
            &:after {
                margin-top: 8px;
                margin-bottom: 8px;
            }
        }
    }

    .faq-content {
        @include respond-to(md) {
            background-image: none;
        }
    }
    .container--middle {
        @include respond-to(lg) {
            max-width: initial !important;
            width: 1020px;
            padding-left: 0;
            padding-right: 0;
        }

        @include respond-to(md) {
            width: 650px;
        }

        @include respond-to(sm) {
            max-width: 100% !important;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
    .safety-tips {
        padding-bottom: 258px;
        @include respond-to(lg) {
            padding-bottom: 150px;
        }
        @include respond-to(md) {
            padding-bottom: 100px;
        }
        @include respond-to(sm) {
            padding-bottom: 98px;
        }
        .page-content {
            padding-top:0;
            padding-bottom: 0;
        }
        &__title {
            margin-top: 100px;
            font-size: 50px;
            line-height: 1.5;
            margin-bottom: 28px;
            color: #43495C;
            @include respond-to(lg) {
                margin-top: 80px;
                font-size: 40px;
                margin-bottom: 15px;
            }
            @include respond-to(md) {
                margin-top: 70px;
                font-size: 30px;
                margin-bottom: 15px;
            }
            @include respond-to(sm) {
                margin-top: 30px;
                font-size: 26px;
                margin-bottom: 11px;
            }
        }

        &__text {
            font-size: 26px;
            line-height: 1.5;
            color: #2A2E39;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            @include respond-to(lg) {
                font-size: 18px;
                line-height: 1.5;
            }
            @include respond-to(md) {
                font-size: 16px;
                line-height: 1.5;
            }
            @include respond-to(sm) {
                font-size: 14px;
                line-height: 1.5;
            }
        }

        &__img {
            margin-bottom: -20px;
            @include respond-to(lg) {
                margin-bottom: -10px;
            }
            @include respond-to(md) {
                margin-bottom: 0;
            }
            @include respond-to(sm) {
                margin-bottom: 0;
            }
        }
        .content-divider {
            @include respond-to(md) {
                margin-top: -.3em;
                margin-bottom: -2.3em;
            }
            @include respond-to(sm) {
                margin-top: -1em;
                margin-bottom: -1.5em;
                background-size: 50%;
            }
        }
    }
</style>
