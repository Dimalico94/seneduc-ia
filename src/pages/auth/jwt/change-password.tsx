import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import { useState } from 'react';
import { JwtChangePasswordView } from 'src/auth/view/jwt';
import { verifyEmail } from 'src/auth/context/jwt';
import { JwtEmailVerificationView } from 'src/auth/view/jwt/email-verification-view';

const metadata = { title: `Change Password | Jwt - ${CONFIG.appName}` };

export default function Page() {
  const [emailVerified, setEmailVerified] = useState(false);

  const handleEmailVerification = async (email: string) => {
    try {
      // Vérification de l'email simulée
      if (email === 'ziza97tiv@gmail.com') {
        setEmailVerified(true);
      } else {
        setEmailVerified(false);
        setErrorMsg('Email non validé. Veuillez essayer avec un email valide.');
      }
    } catch (error) {
      setErrorMsg('Erreur lors de la vérification');
    }
    // try {
    //   // Appel à la fonction de vérification de l'email
    //   const res = await verifyEmail(email);  // À définir dans votre backend ou un service API
    //   if (res.success) {
    //     setEmailVerified(true);
    //   } else {
    //     alert('Erreur lors de la vérification de l\'email');
    //   }
    // } catch (error) {
    //   alert('Erreur lors de la vérification');
    // }
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {emailVerified ? (
        <JwtChangePasswordView />  // Affiche le formulaire de changement de mot de passe après vérification de l'email
      ) : (
        <JwtEmailVerificationView onVerify={handleEmailVerification} />  // Affiche le formulaire de vérification de l'email
      )}
    </>
  );
}
function setErrorMsg(arg0: string) {
  throw new Error('Function not implemented.');
}
