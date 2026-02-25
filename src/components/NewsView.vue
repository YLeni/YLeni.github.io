<template>
    <div id="news-view">
        <span class="sec-title">News</span>
        <div id="news">
            <p class="events" v-for="(event, index) in news" :key="index">
                <font-awesome-icon :icon="event.icon" />
                <span style="margin-left:0.5vw" class="date">{{ event.date }} 
                </span>
                <span>
                    - {{ event.event }}
                </span>
                <a class="extra-pub-info" v-if="event.link" :href="event.link" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-link" />Link
                </a>
            </p>
        </div>
    </div>
</template>

<script>
import newsData from '../assets/newsData.json'

export default {
    data() {
        return {
            news: newsData,
        };
    },
    methods: {
    }
}
</script>

<style scoped>
#news-view {
    margin-top: 4vh;
}
#news{
    margin-top: 2vh;
    overflow: scroll;
    max-height: 80vh;
}
.date{
    font-weight: bold;
    color:cadetblue;
}
</style>