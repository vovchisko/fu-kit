<template>
  <div class="doc-typo">
    <div class="doc-typo_col">
      <h3 class="doc-typo_title">Default tags style</h3>

      <div>Default block</div>
      <small>Default small text</small>
      <p>Default paragraph</p>
      <h5>Default Heading 5 300/400</h5>
      <h4>Default Heading 4 400/500</h4>
      <h3>Default Heading 3 500/600</h3>
      <h2>Default Heading 2 600/700</h2>
      <h1>Default Heading 1 700/800</h1>
    </div>
    <div class="doc-typo_col">
      <h3 class="doc-typo_title">@include typo(*)</h3>

      <div class="h100">100 Test sample</div>
      <div class="h200">200 Test sample</div>
      <div class="h300">300 Test sample</div>
      <div class="h400">400 Test sample</div>
      <div class="h500">500 Test sample</div>
      <div class="h600">600 Test sample</div>
      <div class="h700">700 Test sample</div>
      <div class="h800">800 Test sample</div>
      <div class="h900">900 Test sample</div>
    </div>

    <fu-code-view collapse label="Example">{{ example }}</fu-code-view>
  </div>
</template>

<script>
import FuCodeView from '../../lib-components/FuCodeView.vue'
import { ref }    from 'vue'
const example =
`
.h200 {
  @include typo(200);
}

h4 {
  @include typo(400, 500);
}

`
export default {
  name: 'doc-typo',
  components: { FuCodeView },
  setup(){
    return { example }
  }
}
</script>

<style  lang="scss">

.doc-typo {
  &_col {
    @include spacing-padding(400, 0);
    flex: 1;
  }

  .h100 {
    @include typo(100);
  }
  .h200 {
    @include typo(200);
  }
  .h300 {
    @include typo(300);
  }
  .h400 {
    @include typo(400);
  }
  .h500 {
    @include typo(500);
  }
  .h600 {
    @include typo(600);
  }
  .h700 {
    @include typo(700);
  }
  .h800 {
    @include typo(800);
  }
  .h900 {
    @include typo(900);
  }

  &_title {
    margin-bottom: spacing(400);
    color: pal(text-dimm);
    font-weight: normal;
    border-bottom: 1px solid color(grey200);
  }
}
</style>