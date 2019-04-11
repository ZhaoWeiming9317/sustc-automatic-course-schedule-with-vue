<template>
  <div id="Loading">
    <div class="loader-inner ball-beat">
      <div>请</div>
      <div>稍</div>
      <div>后</div>
    </div>
  </div>
</template>

<style type="text/css">
  #Loading {
    top:50%;
    left:50%;
    position: absolute;
    -webkit-transform: translateY(-50%)  translateX(-50%);
    transform: translateY(-50%)  translateX(-50%);
    z-index:1000;
    font-size: 40px;
  }

  @-webkit-keyframes ball-beat {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(1);
      transform: scale(1); }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1); } }

  @keyframes ball-beat {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(1);
      transform: scale(1); }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1); }
  }

  .ball-beat > div {
    color: #279fcf;
    margin: 8px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.5s 0s infinite linear;
    animation: ball-beat 0.5s 0s infinite linear; }

  .ball-beat > div:nth-child(3n-2) {
    -webkit-animation-delay: 0.1s !important;
    animation-delay: 0.1s !important; }

  .ball-beat > div:nth-child(3n-1) {
    -webkit-animation-delay: 0.2s !important;
    animation-delay: 0.2s !important;
  }

  .ball-beat > div:nth-child(3n) {
    -webkit-animation-delay: 0.3s !important;
    animation-delay: 0.3s !important;
  }
</style>
