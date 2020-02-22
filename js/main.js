let service = {
    data: function () {
        return {

        }
    },
    props: ["srcimg","categorie","service"],
    methods: {},
    mounted: function () { // Permet de faire le lien entre les props et les data de bases 

    },

    template: `
    <li class=" item col-8 mx-auto mx-md-2 mx-lg-0 col-md-3  mb-5  bgBlanc text-center d-flex flex-column  py-5  ">
        <div class="mb-4">
            <img class="img-fluid" :src="srcimg" alt="">
        </div>
        <span class="itemCategorie cOrange ">{{categorie}}</span>
        <span class="itemService"><b>{{service}}</b></span>
    </li>
       
    `
    ,

}
let app = new Vue({
    el: '#app',
    components: {
        'service': service,
    },
    data: {
        'services' : [
            {
                "Service" : "Direction Artistique",
                "imgSrc" : "imgs/itemIcone1.png"
            },
            {
                "Service" : "UX & UI Design",
                "imgSrc" : "imgs/itemIcone2.png" 
            },
            {
                "Service" : "Développement front-end",
                "imgSrc" : "imgs/itemIcone3.png" 
            },
            {
                "Service" : "Développement back-end",
                "imgSrc" : "imgs/itemIcone4.png" 
            },
            {
                "Service" : "Webmarketing",
                "imgSrc" : "imgs/itemIcone5.png" 
            },
            {
                "Service" : "Optimisation SEO",
                "imgSrc" : "imgs/itemIcone6.png" 
            }

        ]
    },
    methods: {}
})