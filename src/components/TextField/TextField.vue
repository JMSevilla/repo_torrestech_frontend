<script>
export default {
    props : {
        placeholder : String,
        clearable : Boolean,
        type : String,
        class : String
    }
}
</script>

<template>
<div>
    <input
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :type="type"
    class="form-control"
    />
</div>
</template>



