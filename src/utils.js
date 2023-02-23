export const mail = {
  to: 'mailto:cloudpinative-relations@interieur.gouv.fr?subject=Question à propos de Cloud π Native',
  label: 'Nous écrire (cloudpinative-relations@interieur.gouv.fr)',
  address: 'cloudpinative-relations@interieur.gouv.fr',
}

export const sendEmail = () => {
  window.location = mail.to
}
