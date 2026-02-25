<template>
    <div style="margin-top:0vh">
        <div v-if="galleries && galleries.length" class="photo-wall">
            <div v-for="(gallery, index) in galleries" :key="index" class="photo-grid" :style="gallery.style">
                <img :src="gallery.thumbnail" @click="selectGallery(index)" :class="{ 'active': activeGallery === index }"
                    class="thumb-img" />
                <!-- <div class="tag">{{ gallery.tag }}</div> -->
            </div>
        </div>
        <!-- Lightbox code goes here, if necessary -->
        <div v-if="activeGallery !== null" class="lightbox">
            <button @click="closeGallery" class="close-button">
                <font-awesome-icon icon="times" class="fa-2x" />
            </button>
            <button @click="prevImage" class="photo-button" style="margin-right: 2vw;">
                <font-awesome-icon icon="fa-solid fa-caret-left" class="fa-3x" />
            </button>
            <img :src="`${galleries[activeGallery].fold}/image${activeImage}.jpg`" class="lightbox-image" />
            <button @click="nextImage" class="photo-button" style="margin-left: 2vw;">
                <font-awesome-icon icon="fa-solid fa-caret-right" class="fa-3x" />
            </button>
        </div>
    </div>
</template>
  
<script>


export default {
    data() {
        return {
            galleries: [
                // {
                //     thumbnail: 'images/norway/image1.jpg',
                //     fold: 'images/norway',
                //     imageNumber: 5,
                //     tag: 'April-2023-German-Norway',
                //     style: {
                //         'grid-column': '1 / span 3', // occupies first and second columns
                //         'grid-row': '1 / span 3' // occupies first and second rows
                //     },
                // },
                {
                    thumbnail: 'images/thailand/image16.jpg',
                    fold: 'images/thailand',
                    imageNumber: 16,
                    tag: 'Dec-2021-Thailand',
                    style: {
                        'grid-column': '1 / span 3', // occupies first and second columns
                        'grid-row': '1 / span 3' // occupies first and second rows
                    },
                },

                // {
                //     thumbnail: 'images/thailand/image1.jpg',
                //     fold:'images/thailand',
                //     imageNumber:15,
                //     tag: 'Dec-2021-Thailand',
                //     style: {
                //         'grid-column': '1 / span 2', // occupies first and second columns
                //         'grid-row': '3 / span 1' // occupies first and second rows
                //     },
                // }
                // More galleries as needed...
            ],
            activeGallery: null,
            activeImage: 0,
        };
    },
    methods: {
        selectGallery(index) {
            this.activeGallery = index;
            this.activeImage = 1;
        },
        closeGallery() {
            this.activeGallery = null;
        },
        prevImage() {
            if (this.activeGallery !== null && this.activeImage > 1) {
                this.activeImage--;
            }
        },
        nextImage() {
            if (this.activeGallery !== null && this.activeImage < this.galleries[this.activeGallery].imageNumber) {
                this.activeImage++;
            }
        },
    },
};

</script>
  
<style scoped>
.photo-wall {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* 3 rows */
    /* Adjusts the number of columns to 3 */
    gap: 10px;
}

.close-button {
    position: absolute;
    top: 15vh;
    /* Adjust as needed */
    right: 10vw;
    /* Adjust as needed */
    background-color: transparent;
    border: none;
}

.photo-grid img.bw-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* filter: grayscale(100%); */
}

.photo-button {
    border: none;
    border-radius: 50%;
    /* Make the button round */
    background-color: transparent;
    /* Make the button fill transparent */
    padding: 10px;
    /* Add some spacing around the icon */
}

.photo-grid img.active {
    filter: grayscale(0%);
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* background:; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.lightbox-image {
    max-width: 60%;
    max-height: 60%;
    z-index: 10;
}
</style>