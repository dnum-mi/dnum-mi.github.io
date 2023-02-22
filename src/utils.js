export const mail = {
  to: 'mailto:cloudpinative-relations@interieur.gouv.fr?subject=Question à propos de Cloud PI Native',
  label: 'Nous écrire',
}

export const sendEmail = () => {
  window.location = mail.to
}
