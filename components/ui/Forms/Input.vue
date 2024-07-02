<script setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
  successMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  mask: {
    type: String,
    default: "",
  },
});
const name = toRef(props, "name");
const model = defineModel();

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div
    class="input"
    v-bind="$attrs"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <p v-if="label" class="label">
      {{ label }}
      <span class="error">{{ errorMessage || successMessage }}</span>
    </p>
    <input
      :type="type"
      v-model="model"
      :name="name"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;

  input {
    appearance: none;
    background: $bgWhite;
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    border: 1px solid rgba($bgBlack, 0.2);
  }

  &.has-error {
    input {
      border: 1px solid rgba($bgRed, 0.3);
    }
  }

  .error {
    // position: absolute;
    margin-left: 8px;
    color: $textRed;
    right: 0;
    font-size: 14px;
    top: 2px;
    line-height: 100%;
  }
}

.label {
  font-size: 14px;
  line-height: 100%;
}
</style>
