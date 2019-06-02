<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Mon panier</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card v-for="item in items">
        <ion-card-content>
          <ion-row>
              <ion-col>
                <img v-bind:src="item.image">
              </ion-col>
          
            <ion-col>
              <small>{{ item.name }}</small>
              <p>{{ item.price }}</p>
            </ion-col>
            <ion-col>
              <ion-button>Supprimer</ion-button>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: "basket",
  data: function() {
    return {
      items: [
        {
          id: 1,
          name: "ererer",
          image:
            "https://contentdeliverynetwork.blob.core.windows.net/images/1.jpg",
          price: 100
        },
        {
          id: 2,
          name: "ererere",
          image:
            "https://contentdeliverynetwork.blob.core.windows.net/images/2.jpg",
          price: 100
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>