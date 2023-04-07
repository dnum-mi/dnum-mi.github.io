<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useScheme } from '@gouvminint/vue-dsfr'
import { mail, catalogueUrl } from '@/utils.js'

const serviceTitle = 'DNUM'
const serviceDescription = 'Cloud π Native'
const logoText = ['Ministère', 'de l\'intérieur', 'et des outre-mer']

const quickLinks = ref([
  {
    label: 'Contactez-nous',
    title: mail.address,
    path: 'mailto:cloudpinative-relations@interieur.gouv.fr?subject=Question à propos de Cloud π Native',
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

const isDarkScheme = ref(false)

onMounted(() => {
  const { setScheme } = useScheme({ scheme: 'light' })

  watchEffect(() => setScheme(isDarkScheme.value ? 'dark' : 'light'))
})
</script>

<template>
  <DsfrHeader
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    operator-img-src="/icons/cloud-pi.svg"
    operator-img-alt="logo cloud PI Native"
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
    <div
      class="mt-2 flex flex-row gap-2 items-center cursor-pointer"
      @click="isDarkScheme = !isDarkScheme"
    >
      <v-icon
        :name="isDarkScheme ? 'ri-sun-line' : 'ri-moon-clear-line'"
        :fill="isDarkScheme ? 'var(--yellow-moutarde-sun-348-moon-860)' : 'var(--blue-france-sun-113-625)'"
      />
      <span>{{ isDarkScheme ? 'Thème clair': 'Thème sombre' }}</span>
    </div>
  </div>
  <DsfrFooter
    class="dso-landing-footer"
    :logo-text="logoText"
  />
</template>
