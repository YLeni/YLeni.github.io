<template>
    <div id="proj-view">
        <span class="sec-title">Projects</span>
        <div class="row">
            <div class="col-sm-12 col-md-6 mt-4" @click="openModal(project)" v-for="project in projects" :key="project.id">
                <img class="proj-img mb-2" :src="`images/projects/${project.img}.png`" @click="openModal(project)">
                <div class="project-title">
                    <div class="top-border"></div>
                    <div class="bottom-border"></div>
                    <div>
                        {{ project.title }}
                        <br>
                        <span class="click-detail">Details on click</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pop-up window for project details -->

        <div v-if="showModal" class="proj-window" @click="closeModal">
            <div class="proj-details" >
                <button @click="closeModal" class="close-button">
                    <font-awesome-icon icon="times" class="fa-1x" />
                </button>
                <p class="proj-detail-title">{{ currentProject.title }}</p>
                <p>{{ currentProject.abstract }}</p>
                <p><strong>Link:</strong> <a :href="currentProject.link"> {{ currentProject.link }} </a></p>
                <p><strong>Lastest News: </strong> {{currentProject.news}}</p>
                <div v-if= "currentProject.showVideo">
                    <p><strong>Watch the Video:</strong> {{currentProject.videoTitle}} <span
                            style="font-style:italic">(Copyright: {{currentProject.copyright}})</span></p>
                    <iframe class="video-frame" :src=" `${currentProject.video}` " title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div v-else>
                    <img class="proj-img-large" :src="`images/projects/${currentProject.img}.png`">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectData from '../assets/projects.json'

export default {

    data() {
        return {
            projects: projectData,
            showModal: false,
            currentProject: {}
        }
    },
    methods: {
        openModal(project) {
            this.currentProject = project;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }

}

</script>

<style scoped>
#proj-view{
    margin-top: 4vh;
}
.project-title {
    width: 100%;
    height: 100px;
    text-align: center;
    align-items: center;
    position: relative;
    padding: 5px;
}

.video-frame{
    width: 80%;
    height: 400px; 
}
.click-detail {
    font-style: italic;
    font-weight: bold;
    /* font-family: damion; */
    color: cadetblue;
}

.proj-img {
    border-radius: 3px;
    width: 100%;
    max-height: 200px;
    object-fit: contain;

}

.proj-img-large{
    width: 80%;
    height: 80%;

}
.proj-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: white; */
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.close-button {
    position: absolute;
    top: 1%;
    /* Adjust as needed */
    right: 1%;
    /* Adjust as needed */
    background-color: transparent;
    border: none;

}

.proj-details {
    position: relative;
    justify-content: center;
    background: white;
    max-width: 70%;
    max-height: 70%;
    overflow: scroll;
    z-index: 10;
    border-radius: 5px;
    box-shadow: 12px 12px 2px 1px cadetblue;
    padding: 20px;
}

.top-border,
.bottom-border {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    left: 0;
}

.top-border {
    top: 0;
}

.bottom-border {
    bottom: 0;
}

.top-border:after,
.top-border:before,
.bottom-border:after,
.bottom-border:before {
    content: '';
    width: 10px;
    height: 10px;
}

.top-border:after,
.top-border:before {
    border-top: 2px solid cadetblue;
}

.bottom-border:after,
.bottom-border:before {
    border-bottom: 2px solid cadetblue;
}

.top-border:before,
.bottom-border:before {
    border-left: 2px solid cadetblue;
}

.top-border:after,
.bottom-border:after {
    border-right: 2px solid cadetblue;
}

.top-border:before {
    border-radius: 3px 0 0 0;
}

.top-border:after {
    border-radius: 0 3px 0 0;
}

.bottom-border:before {
    border-radius: 0 0 0 3px;
}

.bottom-border:after {
    border-radius: 0 0 3px 0;
}
</style>