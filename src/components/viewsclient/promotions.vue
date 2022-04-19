<template>

    <section id="promo">
        <clientheader></clientheader>
        <div class="row"> 
            
            <div class="col-lg-12 col-md-8 col-sm-8  col-xs-12">
                <div class="box-part text-center"> 
                    <div class="title">
                        <h2>titulo</h2>
                        <div class="text">
                            <h4>descripcion</h4>
                            <iframe  width="500" height="609" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                       </div>
                       <h2>agotar existencias</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import clientheader from './header.vue'
export default {
  components: {
    clientheader
  }
}
</script>
<style>
#promo{
    background-color: #f2f2f2;
}
</style>

