<script setup>
import { ref } from 'vue'
import { sendEmail } from '@/utils.js'

const knowMoreBtn = ref({
  label: 'En savoir plus',
  onClick: () => sendEmail(),
})

const tabListName = 'benefitsTab'
const tabTitles = [
  {
    title: 'Qualité',
    icon: 'ri-award-fill',
  },
  {
    title: 'Déploiement continu',
    icon: 'ri-git-merge-fill',
  },
  {
    title: 'Sécurité',
    icon: 'ri-shield-check-fill',
  },
]
const tabContents = [
  'Bénéficier d\'outils et de modes de production de services numériques au standard de qualité des grands industriels du numérique',
  'Passer du développement, à l\'intégration, au déploiement à l\'échelle « sans friction »',
  'Un cadre souverain sécurisé',
]

const useCases = [
  {
    title: 'Cas 1',
    description: 'La refonte du programme ERPC (éducation routière et permis de conduire)',
  },
  {
    title: 'Cas 2',
    description: 'Le projet SELFIM (détection de fraudes lors de l\'émission des titres sécurisés)',
  },
  {
    title: 'Cas 3',
    description: 'Le ministère de la Justice',
  },
  {
    title: 'Cas 4',
    description: 'Démarches-Simplifiées et Mon France Connect',
  },
]
</script>

<template>
  <section
    class="fr-py-2w container-for-two"
  >
    <DsfrCallout
      title="Description de l'offre Cloud PI Native"
      content="L'offre souverraine Interministérielle Cloud π Native proposée par la MIOM assure une protection renforcée des données sensibles de l'administration, grâce à un système de sécurité numérique intégré dès la conception des applications.
      Vous bénéficierez ainsi d'un environnement de confiance pour innover, automatiser les tests et déployer des applications performantes en toute sécurité."
      :button="knowMoreBtn"
    />
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </section>

  <hr class="section-separator">

  <section
    class="w-full flex flex-col justify-center align-center"
  >
    <h2
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      Cas d'usage
    </h2>
    <DsfrTiles :tiles="useCases" />
  </section>

  <hr class="section-separator">

  <section>
    <div
      class="container-for-two"
    >
      <DsfrTile
        class="fr-mt-2w"
        title="Les acteurs Inter-ministériels"
        description="En tant qu'acteur public ministériel vous avez un rôle ou des objectifs de transformation numérique de l'action publique ? Rejoignez la communauté Cloud Pi Native proposée par le MIOM pour sécuriser vos applications et accélérer votre tranformation numérique."
        @click="$router.push('/contact')"
      />
      <DsfrTile
        class="fr-mt-2w"
        title="Les ESN"
        description="En tant qu'ESN vous jouez un rôle de conseil, d'appui et d'accompagnement des Ministère dans leur démarche de transformation numérique ? Apportez votre contribution en rejoignant la communauté Cloud Pi Native de l'Etat donnant accès à des formations, de la documentation et du support."
        @click="$router.push('/contact')"
      />
    </div>
  </section>

  <hr class="section-separator">

  <section
    class="fr-mt-2w fr-background-contrast--grey container-for-two two-third"
  >
    <DsfrCallout
      title="Pricing"
      content="Profitez dès maintenant de l'accès au service Cloud PI Native pour le moment gratuit et obtenez du support pour être accompagné à mieux qualifier votre besoin."
    />
    <div
      class="fr-summary"
    >
      <h2
        class="fr-summary__title"
      >
        Critères d'éligibilité
      </h2>
      <ul
        class="fr-summary__list"
      >
        <li>Oeuvrer dans la sphère publique</li>
        <li>consectetur adipiscing elit</li>
        <li>consectetur adipiscing elit</li>
      </ul>
    </div>
  </section>
</template>
