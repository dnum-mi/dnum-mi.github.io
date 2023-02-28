<script setup>
import { ref } from 'vue'
import { setWindowLocation, mail, catalogueUrl, ghFormationUrl } from '@/utils.js'

const knowMoreBtn = ref({
  label: 'Contactez-nous pour en savoir plus',
  title: mail.address,
  onClick: () => setWindowLocation(mail.to),
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
  'Bénéficier d\'un socle technique et organisationnel, ainsi que des moyens de formation nécessaire à la production de services numériques aux standards de qualité, de sureté et de sécurité de l\'industrie du numérique',
  'Passer du développement, à l\'intégration, au déploiement à l\'échelle « sans friction »',
  'L\'agilité dans un cadre souverain sécurisé, compatible avec les normes existantes',
]

const useCases = [
  {
    imgSrc: '/icons/map/car-fill-blue.svg',
    title: 'La refonte du programme ERPC ',
    description: 'Éducation routière et permis de conduire',
    to: '#cas-usage',
  },
  {
    imgSrc: '/icons/business/flag-fill-blue.svg',
    title: 'Le projet SELFIM',
    description: 'Détection de fraudes lors de l\'émission des titres sécurisés',
    to: '#cas-usage',
  },
  {
    imgSrc: '/icons/buildings/government-fill-blue.svg',
    title: 'Le ministère de la Justice',
    to: '#cas-usage',
  },
  {
    imgSrc: '/icons/user/admin-fill-blue.svg',
    title: 'Démarches-Simplifiées et Mon France Connect',
    to: '#cas-usage',
  },
]
</script>

<template>
  <h1
    id="top"
    class="fr-h1 fr-text-title--blue-france text-center"
  >
    Cloud π Native
  </h1>
  <section
    class="fr-py-2w grid grid-cols-2 gap-10 <md:flex <md:flex-col mb-2"
  >
    <DsfrCallout
      title="Description de l'offre Cloud π Native"
      class="fr-m-0"
      content="L'offre à visée interministérielle Cloud π Native s'appuie sur l'écosystème de ressources Cloud π du Ministère de l'Intérieur et des Outre-mer, pour proposer une usine logicielle et un orchestrateur DevSecOps afin de produire et opérer des services numériques de qualité au service des usagers (y compris celles et ceux qui produisent le numérique public)."
      :button="knowMoreBtn"
    />
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </section>

  <hr class="section-separator">

  <section>
    <h2
      id="personas"
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      <a href="#personas">
        À qui s'adresse l'offre Cloud π Native ?
      </a>
    </h2>
    <div
      class="grid grid-cols-3 gap-10 <md:flex <md:flex-col mb-2"
    >
      <div
        class="tile-button"
      >
        <DsfrTile
          class="fr-mb-2w"
          title="Agents ministériels"
          description="Acteur de la transformation numérique sur un secteur ministériel ou interministériel ? A terme, l'offre Cloud π Native sera consommable avec le maximum d'autonomie depuis le réseau interministériel d'Etat via le catalogue de services. Pour l'heure, elle est en co-construction en agilité avec ses partenaires-clients et le code du socle est disponible en open-source."
          :to="catalogueUrl"
        />
        <DsfrButton
          label="Consultez le catalogue de services numériques du MIOM"
          secondary
          :title="catalogueUrl"
          icon="ri-gift-2-fill"
          @click="setWindowLocation(catalogueUrl)"
        />
      </div>
      <div
        class="tile-button"
      >
        <DsfrTile
          class="fr-mb-2w"
          title="Acteurs industriels, SSII/ESN, contributeurs open source... et curieux"
          description="Industriel, freelance ou contributeur Open Source vous souhaitez vous faire une idée ? l'offre est mise à disposition en open source pour favoriser l'appropriation des technologies « Cloud Native » et l'émergence de standards du numérique public plus interopérables avec la production industrielle, dans le respect des valeurs du service public."
          :to="ghFormationUrl"
        />
        <DsfrButton
          label="Rejoignez la communauté sur GitHub"
          secondary
          :title="ghFormationUrl"
          icon="ri-github-fill"
          @click="setWindowLocation(ghFormationUrl)"
        />
      </div>
      <div
        class="tile-button"
      >
        <DsfrTile
          class="fr-mb-2w"
          title="Initiatives partenariales"
          description="Acteur du service public, industriel ou contributeur de l'Open Source, vous contribuez au numérique public et souhaitez expérimenter l'offre ? Faites-nous part de propositions/demandes d'expérimentation. Nos équipes accompagnent les expérimentations à but non-lucratif : elles n'examineront et ne répondront à AUCUNE sollicitation commerciale."
          to="#personas"
        />
        <DsfrButton
          label="Contactez-nous"
          secondary
          :title="mail.address"
          icon="ri-mail-line"
          @click="setWindowLocation(mail.to)"
        />
      </div>
    </div>
  </section>

  <hr class="section-separator">

  <section>
    <h2
      id="consommation"
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      <a href="#consommation">
        Comment consommer Cloud π Native ?
      </a>
    </h2>
    <DsfrCallout
      title="Une offre en co-construction"
      content="L'offre Cloud π native est actuellement en co-construction en agilité, avec nos partenaires clients, le soutien financier du plan de relance et l'appui de la DINUM. Afin de vous accompagner dans son expérimentation et sa construction, nous vous invitons à prendre contact avec nos équipes via l'adresse cloudpinative-relations@interieur.gouv.fr."
    />
  </section>

  <hr class="section-separator">

  <section
    class="w-full flex flex-col justify-center align-center"
  >
    <h2
      id="cas-usage"
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      <a href="#cas-usage">
        Ils nous font confiance
      </a>
    </h2>
    <DsfrTiles
      :tiles="useCases"
    />
  </section>

  <hr class="section-separator">
</template>
