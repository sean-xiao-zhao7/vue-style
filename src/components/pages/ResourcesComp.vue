<script>
import { Resource } from "../../models/Resource.js";
import ResourceDetails from "./ResourceDetails.vue";
import AddNewResource from "./AddNewResource.vue";

export default {
    components: { ResourceDetails, AddNewResource },
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
            showAddResource: false,
        };
    },
    methods: {
        addNewResourceToggle() {
            this.showAddResource = !this.showAddResource;
        },
        addNewResourceHandler(title, details, url) {
            const newResource = new Resource(title, details, url);
            this.resources.push(newResource);
            this.addNewResourceToggle();
        },
        deleteResourceHandler(id) {
            this.resources = this.resources.filter((r) => r.id !== id);
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
    <button id="button-change3" @click="addNewResourceToggle">
        Add new resource
    </button>
    <AddNewResource
        v-if="showAddResource"
        @add-new-resource="addNewResourceHandler"
    />
</template>
