<script>
import { Resource } from "../models/Resource.js";
import ResourceDetails from "./ResourceDetails.vue";

export default {
    components: { ResourceDetails },
    data() {
        return {
            resources: [
                new Resource(
                    "Book",
                    "A book to read.",
                    "https://www.theglobeandmail.com/arts/books/reviews/article-new-bill-morneau-book-offers-insiders-account-of-first-five-years-of/"
                ),
                new Resource(
                    "Website",
                    "A website to surf.",
                    "https://en.wikipedia.org/wiki/Website"
                ),
                new Resource(
                    "Food",
                    "To be consumed.",
                    "https://www.facebook.com/Wallys-Family-Restaurant-223907720231/"
                ),
                new Resource(
                    "Electricity",
                    "To power others.",
                    "https://www.reuters.com/business/energy/electricity-constraints-force-canadas-first-lng-terminal-delay-renewable-shift-2023-01-16/"
                ),
                new Resource(
                    "Water",
                    "To fuel with liquid.",
                    "http://www.mierswatercentre.com/"
                ),
            ],
        };
    },
    methods: {
        deleteResourceHandler(id) {
            const targetIndex = this.resources.indexOf((p) => p.id === id);
            this.resources.splice(targetIndex, 1);
        },
    },
};
</script>

<template>
    <ResourceDetails
        v-for="resource in resources"
        :resource="resource"
        :key="resource.id"
        @delete-resource="deleteResourceHandler"
    ></ResourceDetails>
</template>
