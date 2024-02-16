<script lang="ts" setup>
</script>

<template>
  <Div>
    <Div
      width="50"
      :height="10"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Span bold>
        <Span color="yellow">
          Usage guide:
        </Span>
        <Br :n="2" />
        Select Package:  ↑↓ + `space`
        <Br :n="2" />
        Toggle Version:  → + ↑↓
        <Br :n="2" />
        Select Package: `space`
        <Br :n="2" />
        Install Package: `enter`
      </Span>
    </Div>

  </Div>
</template>
