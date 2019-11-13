<template>
<section id="page-content">
<!-- header -->
<nav class="navbar fixed-top">
    <div id="headerMenu"></div>
    <div id="leftMenuPanel"></div>

</nav>

<div class="mainContent">
    <section>
        These are the routes
        <router-view></router-view>
    </section>
</div>
</section>

</template>


export default{
    name:'app',
    data:{
        msg:'Welcome to Vue js'
    },
    mount(){
        console.log('called App.vue')
    }
}