<script setup>
import { ref } from 'vue'
import { mail, catalogueUrl, setWindowLocation } from '@/utils.js'

const serviceTitle = 'DNUM'
const serviceDescription = 'Cloud π Native'
const logoText = ['Ministère', 'de l\'intérieur', 'et des outre-mer']

const quickLinks = ref([
  {
    label: 'Contactez-nous',
    title: mail.address,
    path: '/',
    onClick: () => setWindowLocation(mail.to),
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
    label: 'Cloud π Native',
    url: catalogueUrl,
  },
]

const copy = (text) => {
  navigator.clipboard.writeText(text)
}
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
    <p>
      Ecrivez-nous :
      <a :href="mail.to"> {{ mail.address }} </a>
      <span
        class="fr-icon-clipboard-line icon"
        title="copier dans le presse-papier"
        @click="copy(mail.address)"
      />
    </p>
  </div>
  <DsfrFooter
    class="dso-landing-footer"
    :logo-text="logoText"
  />
</template>
