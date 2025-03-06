import axios, { endpoints } from 'src/utils/axios';

import { setSession } from './utils';
import { STORAGE_KEY } from './constant';

// ----------------------------------------------------------------------

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ email, password }: SignInParams): Promise<void> => {
  try {
    const params = { email, password };

    const res = await axios.post(endpoints.auth.signIn, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    setSession(accessToken);
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
}: SignUpParams): Promise<void> => {
  const params = {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  };

  try {
    const res = await axios.post(endpoints.auth.signUp, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    sessionStorage.setItem(STORAGE_KEY, accessToken);
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async (): Promise<void> => {
  try {
    await setSession(null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};

export const UpdatePassword = async ({
  newPassword,
  confirmPassword,
}: { newPassword: string, confirmPassword: string }): Promise<void> => {
  try {
    // Paramètres de la requête
    const params = { newPassword, confirmPassword };

    // Appel API pour mettre à jour le mot de passe
    const res = await axios.post(endpoints.auth.updatePassword, params);

    // Vérification de la réponse
    const { success } = res.data;

    if (!success) {
      throw new Error('Failed to update password');
    }

    // Si le mot de passe a été mis à jour avec succès, vous pouvez rediriger ou effectuer d'autres actions.
    console.log('Password updated successfully');
  } catch (error) {
    console.error('Error during password update:', error);
    throw error;
  }
};
// Exemple d'une fonction pour envoyer un email de vérification
export const verifyEmail = async (email: string) => {
  try {
    const response = await axios.post('/api/verify-email', { email });
    return response.data;  // On suppose que votre backend renvoie un succès ou un échec
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'email:', error);
    throw new Error('Erreur de vérification');
  }
};



