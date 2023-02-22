<script setup>
import { ref } from 'vue'
import { mail, sendEmail } from '@/utils.js'

const serviceTitle = 'DNUM'
const serviceDescription = 'Cloud PI Native'
const logoText = ['Ministère', 'de l\'intérieur', 'et des outre-mer']

const quickLinks = ref([
  {
    label: 'Nous contacter',
    path: '/',
    onClick: () => sendEmail(),
    icon: 'ri-mail-line',
  },
])

const networks = [
  {
    name: 'linkedin',
    label: 'Linkedin',
    url: 'https://www.linkedin.com/company/direction-du-num%C3%A9rique-du-minist%C3%A8re-de-l%E2%80%99int%C3%A9rieur/mycompany/',
  },
  {
    name: 'github',
    label: 'GitHub',
    url: 'https://github.com/dnum-mi/dso-console#readme',
  },
  {
    name: 'cloud-pi-native',
    label: 'Cloud Pi Native',
    url: 'https://pi.minint.fr/',
  },
]
</script>

<template>
  <DsfrHeader
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
  />

  <div class="fr-container fr-mt-2w">
    <router-view />
  </div>

  <div class="fr-follow fr-px-4w">
    <DsfrShare
      title="Retrouvez-nous sur :"
      :networks="networks"
      :mail="mail"
      copy-label="Copier l'url de la page dans le presse-papier"
    />
  </div>
  <DsfrFooter
    class="dso-landing-footer"
    :logo-text="logoText"
  />
</template>
