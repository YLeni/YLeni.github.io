<template>
  <div id="home-div">
    <div id="intro-bar" class="d-flex flex-row flex-wrap justify-content-center align-items-center main-text">
      <div class="">
        <img class="img-thumbnail" src="images/leni_profile_pic.png" id="avatar">
      </div>
      <div class="text-center">
        <span class="font-name">Leni Yang</span>
        <br>
        <span class="font-title">Data Visualization</span>
        <br>
        <span class="font-title">Human-Computer Interaction</span>
        <br>
        <span class="font-title">Data Storytelling</span>
        <br>
        <span style="font-style:italic;"> email: leni (dot) yang (at) inria (dot) fr (leni.yang@inria.fr)</span>
      </div>
    </div>
    <div id="main-contain" class="main-text">
      <div id="self-intro">
        <span class="sec-title">
          About Me
        </span>
        <p>
          I am a Postdoc at Inria Bordeaux,in the <a class="outer-link" href="https://bivwac.fr/">Bivwac team</a>, working
          with <a class="outer-link" href="https://dragice.fr/">Pierre Dragicevic</a>, <a class="outer-link"
            href="https://yvonnejansen.fr/">Yvonne Jansen</a>, and <a class="outer-link"
            href="https://people.bordeaux.inria.fr/hachet/">Martin Hachet</a>.
          I received my Ph.D. in Computer Science and Engineering from the Hong Kong University
          of Science and Technology, under the supervision of <a class="outer-link" href="http://huamin.org/">Prof.
            Huamin Qu</a>.

          <br>
          <br>
          My <span class="text-emph">research areas</span> are Data Visualization and Human-Computer Interaction with a focus on investigating theories, techniques, and authoring tools for transforming complex data into understandable and compelling data stories.
          My <span class="text-emph">ultimate mission</span> is to foster inclusive public participation in data-informed, accessible, and equitable decision-making that benefits society and individual well-being.

          <br>
          <br>
          My <span class="text-emph"> recent research </span> explores innovative interaction and media approaches that
          reimagine how data can be communicated to engage the general public. Examples include immersive data
          storytelling and conveying data through time and effort (<a class="outer-link"
            href="https://yleni.github.io/pdfs/viscomm25_Make_data_harder_to_read.pdf"> my position paper at Viscomm 25</a>). I am also interested in applying and evaluating data storytelling in practical domains such as climate communication and urban planning (<a class="outer-link"
            href="https://yleni.github.io/pdfs/vis25_poster_summary_AR_based_data_storytelling_for_citizen_participation_in_urban_planning.pdf"> my Poster in IEEE VIS 25</a>). My research publications can be categorized into three themes: data story design, data story evaluation, and data story authoring.
        </p>
      </div>

      <div class="row gy-2 mt-2">
        <div class="col-12 col-md-4">
          <div class="pseudo-partial-border">
            <div class="theme">
              <img class="theme-img" src="images/publications/img-frey.png" alt="">
              <div class="theme-text">
                <div class="theme-title">
                  <span class="text-emph">Theory: </span> Data Story Design
                  <br>
                  <span class="hover-detail"> Details on hover</span>
                </div>
                <div class="theme-desc">
                  I study how to integrate narrative techniques, such as dramatic theories,
                  with data visualizations. An example is using the Freytag's Pyramid structure to create compelling
                  data stories.
                  <!-- While data visualization is a key tool for telling stories behind data, it does not fully utilize the power of storytelling in engaging and shaping people's minds.  -->
                  <a target="_blank" href="https://idvxlab.com/papers/2021VIS_Pyramid_Yang.pdf"><font-awesome-icon
                      icon="fa-solid fa-link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="pseudo-partial-border">
            <div class="theme">
              <img class="theme-img" src="images/publications/img-situ.png" alt="">
              <div class="theme-text">
                <div class="theme-title">
                  <span class="text-emph">Application: </span>Data Story Evaluation
                  <br>
                  <span class="hover-detail"> Details on hover</span>
                </div>
                <div class="theme-desc">
                  I evaluate how data stories affect people's actions in significant
                  fields. For example, we found that VR data stories can increase situational awareness of the hidden
                  threats in the air. <a target="_blank"
                    href="https://www.sciencedirect.com/science/article/pii/S1071581923001465"><font-awesome-icon
                      icon="fa-solid fa-link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="pseudo-partial-border">
            <div class="theme">
              <img class="theme-img" src="images/publications/img-sketch.png" alt="">
              <div class="theme-text">
                <div class="theme-title">
                  <span class="text-emph"> Tool: </span>Data Story Authoring
                  <br>
                  <span class="hover-detail"> Details on hover</span>
                </div>
                <div class="theme-desc">
                  I explore how AI can assist data storytellers in both the ideation and creation of data
                  stories. One application of this is the use of LLMs for organizing findings from computational
                  notebooks. <a target="_blank" href="https://arxiv.org/abs/2307.07922"><font-awesome-icon
                      icon="fa-solid fa-link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="divider div-transparent div-dot"></div>
        <div class="col-12 col-md-9">
          <PublicationsView></PublicationsView>
        </div>
        <div class="col-12 col-md-3">
          <NewsView></NewsView>
        </div>
      </div>

      <div class="divider div-transparent div-dot"></div>

      <ProjectView></ProjectView>

    </div>
  </div>
</template>

<script>
import PublicationsView from './components/PublicationsView.vue';
import NewsView from './components/NewsView.vue';
import ProjectView from './components/ProjectView.vue';

export default {
  name: 'HomeView',
  components: {
    PublicationsView,
    NewsView,
    ProjectView
  },
}
</script>
<style scoped>
#main-contain {
  margin-left: 10vw;
  margin-right: 10vw;
}

@media (min-width:2000px) {
  #main-contain {
    margin-left: auto;
    margin-right: auto;
    max-width: 2000px;
  }
}

#adv {
  color: cadetblue;
  font-weight: bold;
  font-style: italic;
}

#intro-bar {
  padding: 20px;
  background-color: #f5f8fa;
  margin-top: 40px;
}

#avatar {
  border-radius: 50%;
  max-height: 130px;
  background-color: #f5f8fa;
  border-width: 1px;
  /* width: 100px;
  height: 100px; */
  /* margin-right: 20px; */
}

.theme {
  background-color: white;
  overflow: hidden;
  transition: 0.3s;
  padding: 10px;
  /* height: 30vh; */
}

.hover-detail {
  font-style: italic;
  font-weight: bold;
  /* font-family: damion; */
  color: cadetblue;
}

.theme-text {
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* bottom: 0em; */
  width: 100%;
  align-items: center;
  /* background: rgba(218, 220, 224, 0.9); */
  transition: min-height 0.2s ease-out;
  min-height: 20px;
  padding: 10px 15px;
}

.theme-img {
  max-height: 400px;
  min-height: 200px;
  width: 100%;
  object-fit: contain;
}

.theme-title {
  padding: 5px 0;
  width: 100%;
  color: black;
}

.theme-desc {
  height: 100%;
  display: none;
  color: #3c4043;
  padding: 0 10px;
}

.theme:hover .theme-text {
  background: rgba(230, 232, 237, 0.9);
}

.theme:hover .theme-desc {
  display: block;
}

.theme:hover .hover-detail {
  display: none;
}

.theme:hover .theme {
  position: relative;
}

.theme:hover .theme-text {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  min-height: 100%;
}

.outer-link {
  text-decoration: none;
  display: inline-block;
  background-image: linear-gradient(cadetblue, cadetblue);
  background-size: 100% 0.1em;
  background-position: 0 90%;
  background-repeat: no-repeat;
  color: #2c3e50;
}

.theme .example-work {
  text-decoration: none;
  background-image: linear-gradient(cadetblue, cadetblue);
  background-size: 100% 0.1em;
  background-position: 0 90%;
  background-repeat: no-repeat;
  display: inline-block;
  /* padding: 0 0.1em; */
  color: #2c3e50;
  transition: background-size 0.5s, background-position 0.5s;
}

.research-thumbnail {
  max-height: 4.5vh;
  margin-left: 0.5vw;
  display: inline-block;
  outline: 1px solid black;
  transition: outline 0.5s, transform 0.5s;
}

.example-work:hover span {
  background-size: 100% 100%;
  background-position: 0 0;
  color: white;
}

.example-work:hover .research-thumbnail {
  transform: scale(1.5);
  outline: 1.5px solid black;
}

.text-emph {
  color: cadetblue;
  font-weight: bold;
}

.prefix {
  font-weight: bold;
}

p {
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
}

#self-intro {
  z-index: 1;
  margin-top: 4vh;
}

.text-segment {
  opacity: 0;
  animation: fadeIn 1.5s forwards;
  animation-delay: calc(0.5s * var(--i));
}

.divider {
  position: relative;
  margin-top: 30px;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 1%;
  right: 1%;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, transparent, rgb(159, 163, 170), transparent);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>