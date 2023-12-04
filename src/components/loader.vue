<style scoped>
	.loader {
	  text-align: center;
	  display: flex;
	  align-items: center;
	  gap: 10%;
	  width: fit-content;
	}

	.loader > div {
		flex-shrink: 0;
	  width: 10px;
	  height: 10px;
	  background-color: var(--color);

	  border-radius: 100%;
	  /*display: inline-block;*/
	  animation: sk-bouncedelay 1.4s var(--delay, 0s) infinite ease-in-out both;
	}

	@keyframes sk-bouncedelay {
	  0%, 80%, 100% { 
	    /*transform: scale(0);*/
	    opacity: 0;
	  } 40% { 
	    /*transform: scale(1);*/
	    opacity: 1;
	  }
	}
</style>

<template>
	<div class="loader" :style="{ '--color': color }">
	  <div style="--delay: -0.32s"></div>
	  <div style="--delay: -0.16s"></div>
	  <div ></div>
	</div>
</template>

<script setup>
	defineProps({
		color: {
			type: String,
			default: '#fff'
		}
	})
</script>
