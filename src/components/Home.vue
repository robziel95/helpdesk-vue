<template>
  <v-container>
    <section>
      <h2 class="display-1">Helpdesk Dashboard</h2>
      <v-layout row wrap>
        <v-flex>
          <div class="section-info__block section-info__block--orange">
            <h3 class="section-info__block__title">Created users</h3>
            <div class="section-info__block__content">
              <div>
                <v-icon>panorama_fish_eye</v-icon>
                <span>12</span>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex>
          <div class="section-info__block section-info__block--pink">
            <h3 class="section-info__block__title">Submitted tickets</h3>
            <div class="section-info__block__content">
              <div>
                <v-icon>panorama_fish_eye</v-icon>
                <span>50</span>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex>
            <div class="section-info__block section-info__block--green">
              <h3 class="section-info__block__title">Resolved tickets</h3>
              <div class="section-info__block__content">
                <div>
                  <v-icon>panorama_fish_eye</v-icon>
                  <span>70</span>
                </div>
              </div>
            </div>
        </v-flex>
      </v-layout>
    </section>

    <section class="section-description">
      <div class="separator separator--margin"></div>
      <h3 class="headline">Description of the application</h3>
      <br/>
      <p class="subheading">Application was developed by Robert Zieliński in order to gain development skills with Vue.js</p>
      <p class="subheading">
        The goal of the application was to create helpdesk system application which will allow to manage users and ticket submission.
        There exist two types of users: administrator and normal user. Administrator has privileges to edit and delete all data of the application (Users and Tickets).
        Normal users can only edit and delete tickets which they created. They do not have access to tab, which allows to edit and delete users.
      </p>
      <p>Application uses - MongoDB, Express, Vue and NodeJS</p>
    </section>

  </v-container>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
  @import "../styles/components/home.scss";
</style>
