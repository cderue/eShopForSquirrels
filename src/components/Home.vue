<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>eShop for squirrels</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card no-margin text-center>
        <img
          src="https://contentdeliverynetwork.blob.core.windows.net/images/banner.jpg"
        >
        <ion-card-header>
          <ion-card-subtitle>Spooky, Scary</ion-card-subtitle>
          <ion-card-title>Skeleton</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button @click="goToCatalog">Voir les produits</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToCatalog() {
      this.$router.push('catalog')
    }
  }
};
</script>

<style scoped>
ion-card {
    box-shadow: none !important;
}
</style>


