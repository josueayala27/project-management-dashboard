<template>
  <nav
    class="flex justify-between items-center p-4 border-b border-b-slate-200"
  >
    <LogoJoscode />
    <div class="flex items-center">
      <BaseButton>
        <Icon size="24px" name="material-symbols:search-rounded" />
      </BaseButton>
      <BaseButton>
        <Icon size="24px" name="material-symbols:mark-chat-unread-outline" />
      </BaseButton>
      <BaseButton>
        <Icon size="24px" name="material-symbols:notifications-outline" />
      </BaseButton>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import LogoJoscode from "@/assets/svg/general/logo-joscode.svg";
</script>
