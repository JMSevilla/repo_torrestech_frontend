<script>
export default {
    props : {
        placeholder : String,
        clearable : Boolean,
        type : String,
        class : String,
        trigger: Number
    }
}
</script>

<template>
<div>
   <div v-if="trigger == 1">
        <input
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :type="type"
    class="form-control"
    />
   </div>
   <div v-else-if="trigger == 2">
       <textarea
       class="form-control"
       v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        :type="type"
       ></textarea>
   </div>
</div>
</template>



