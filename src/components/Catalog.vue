<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Catalogue</ion-title>
        <ion-buttons slot="end">
          <ion-button icon-only @click="goToBasket">
            <ion-icon name="cart"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-row>
        <ion-col v-for="item in items">
          <ion-card>
            <img v-bind:src="item.image">
            <ion-card-content>
              <ion-card-title>{{ item.price }}</ion-card-title>
              <ion-card-subtitle>{{ item.name }}</ion-card-subtitle>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "catalog",
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
        },
        {
          id: 3,
          name: "ererere",
          image:
            "https://contentdeliverynetwork.blob.core.windows.net/images/3.jpg",
          price: 100
        },
        {
          id: 4,
          name: "ererer",
          image:
            "https://contentdeliverynetwork.blob.core.windows.net/images/4.jpg",
          price: 100
        },
        {
          id: 5,
          name: "erere",
          image:
            "https://contentdeliverynetwork.blob.core.windows.net/images/5.jpg",
          price: 100
        },
        {
          id: 6,
          name: "erere",
          image:
            "https://contentdeliverynetwork.blob.core.windows.net/images/6.jpg",
          price: 100
        }
      ]
    };
  },
  methods: {
    goToBasket() {
      this.$router.push("basket");
    }
  }
};
</script>

<style>
</style>