<script setup>
const serviceTitle = 'DNUM'
const serviceDescription = 'Cloud PI Native'
const logoText = ['Ministère', 'de l\'intérieur', 'et des outre-mer']

const quickLinks = [
  {
    label: 'Accueil',
    path: '/',
    icon: 'ri-home-4-line',
    iconAttrs: { color: 'var(--red-marianne-425-625)' },
  },
  {
    label: 'Nous contacter',
    path: '/contact',
    icon: 'ri-mail-line',
  },
]

const networks = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/company/direction-du-num%C3%A9rique-du-minist%C3%A8re-de-l%E2%80%99int%C3%A9rieur/mycompany/',
  },
]
const newsletterData = {
  // title: '',
  // description: '',
  // email: '',

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

  <DsfrFollow
    class="fr-mt-2w"
    :networks="networks"
    :newsletter-data="newsletterData"
  />

  <DsfrFooter
    :logo-text="logoText"
  />
</template>
