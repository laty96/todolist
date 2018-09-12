<template>
    <div>
        <input type="checkbox" v-model="done">
        <input type="text" v-bind:readonly="editable" v-model="item.name">
    </div>
</template>

<script>

    export default {
        name: "Todo",
        props: {
            item: Object
        }
    }

</script>
