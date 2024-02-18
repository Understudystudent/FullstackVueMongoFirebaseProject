<template>
    <div>
        <h1>Products</h1>

        <ProductList :products ="products"/>
        <!-- <div class="grid-wrap">
            <div class="product-item" v-for="product in products" :key="product.id">
                <img :src="product.imageName" />
                <h3 class ="product-name">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>

                <router-link :to="'/products/' + product.id">
                    <button>View Details</button>
                </router-link>

            </div>
        </div> -->
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import {products} from '../temp-data'

    export default {
        name: "ProductsPage",
        components: {
            ProductList
        },
        data(){
            return {
                products,
            }
        }
        
    }
</script>

<style scoped>

</style>