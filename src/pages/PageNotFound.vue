<template lang="">
    <div class="col-full">
        <h1>Not Found</h1>
        <p>Ooops, we couldn't find what you are looking for. Why don't you
           <router-link :to="{name: 'Home'}">
              go home instead?
            </router-link>
        </p>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="css" scoped>
  div{
    text-align: center;
  }
  h1{
    font-size: 100px;
  }
  p{
    font-size: 50px;
    font-weight: 100;
  }
</style>