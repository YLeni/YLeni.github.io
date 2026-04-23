<template>
    <div id="publication-view">
        <span class="sec-title">Publications</span>      
        <!-- <div id="button-div">
            <button class="button" :class="{ selected: displayMode == 'featured' }" @click="showFeatured">Featured</button>
            <button class="button" :class="{ selected: displayMode == 'all' }" @click="showAll">All</button>
        </div> -->
        <div id="publications">
            <div ref="pubs" class="row publication" v-for="publication in publications" :key="publication.id"
                v-show="isFeatured(publication)">
                <div class="image col-12 col-md-4 align-top">
                    <img v-if="publication.img" :src="`images/publications/${publication.img}.png`" alt="Publication Image">
                </div>
                <div class="info col-12 col-md-8  align-text-top">
                    <p class="title">{{ publication.title }}</p>
                    <p class="authors" v-mark="'Leni Yang'">{{ publication.author }}</p>
                    <p class="venue">{{ publication.venue }}</p>
                    <div class="tag">
                        <span class="extra-pub-info">{{ publication.venueTag }}</span>
                        <a class="extra-pub-info" v-if="publication.page" :href="publication.page" target="_blank">
                            <font-awesome-icon icon="fa-solid fa-link" />Page
                        </a>
                        <a class="extra-pub-info" v-if="publication.pdf" :href="publication.pdf" target="_blank">
                            <font-awesome-icon icon="fa-solid fa-file-pdf" />Pdf
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import publicationData from '../assets/publications.json'
// import Mark from 'mark.js'

export default {
    data() {
        return {
            publications: publicationData,
            showPub: false,
            displayMode: 'all' // default to show only featured publications
        };
    },
    methods: {
        showFeatured() {
            this.displayMode = 'featured';
        },
        showAll() {
            this.displayMode = 'all';
        },
        isFeatured(publication) {
            return this.displayMode === 'all' || publication.featured;
        },
        highlightKeywords() {
            this.$nextTick(() => {
                if (this.$refs.pubs) {
                    const authorsElements = this.$refs.pubs.map(pub => pub.querySelector('.authors'));
                    authorsElements.forEach(authorsElement => {
                        const authorName = authorsElement.innerText;
                        const highlightedAuthorName = authorName.replace("Leni Yang", "<span class='highlight'>Leni Yang</span>");
                        authorsElement.innerHTML = highlightedAuthorName;
                    });
                }
            });
        }

    },
    mounted() {
        this.highlightKeywords();
    },
    updated() {
        this.highlightKeywords();
    }
}
</script>

<style>
.info>p {
    margin-bottom: 0.2rem !important;
    /* line-height: 20px; */
}

.highlight {
    background: none !important;
    text-decoration: underline;
    font-weight: bold;
}
#publication-view{
    margin-top: 4vh;
}
#publications {
    margin-top: 2vh;
}

.title {
    color: cadetblue;
    font-weight: bold;
}


.info {
    line-height: auto;
}

.extra-pub-info {
    text-decoration: none;
    margin-right: 0.4vw;
    border-style: solid;
    border-width: 1px;
    border-color: cadetblue;
    color: #2c3e50;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    padding: 2px 2px;
    /* padding: 0.1em 0.1em; */
}

#pub-icon {
    text-align: center;
}

.publication {
    margin-bottom: 5vh !important;
}

/* @media (min-width:768px) {
    .authors, .venue, .tag{
        font-size: 16px !important;
}
} */
/* @media (min-width:1024px) {
    body {
        font-size: 19px !important;
    }
}
@media (min-width:1280px) {
    body {
        font-size: 24px !important; 
    }
} */



.image img {
    width: 100%;
    max-height: 250px;
    min-height: 130px;
    object-fit: contain;
    border: solid 1px cadetblue;
    padding: 5px;
    margin-bottom: 5px;
}
/* .image{
    padding-bottom: 10px;
} */
.button {
    border: 1px;
    border-radius: 20px;
    background-color: transparent;
    padding: 0px 5px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease-in-out;
    font-size: 0.9rem;
    font-weight: bold;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: 70px;
    align-items: center;
}

.button.selected {
    background-color: cadetblue;
    color: #fff;
}

.button:hover {
    background-color: cadetblue;
    color: #fff;
}

#button-div{
    width:142px;
    border: 1px solid #b5b5b5;
    border-radius: 20px;
    display: flex;
    margin-top: 20px;
}

.divider
{
	position: relative;
	margin-top: 30px;
	height: 1px;
}

.div-transparent:before
{
	content: "";
	position: absolute;
	top: 0;
	left: 1%;
	right: 1%;
	width: 100%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, rgb(159, 163, 170), transparent);
}

</style>