import { useHistory } from 'react-router-dom';


export function useNavigation() {
  const navigation = useHistory();

  function toRecoverPassword() {
    navigation.push(`/recover-password`);
  }

  function toLogin() {
    navigation.push(`/login`);
  }

  function toAccountActivation() {
    navigation.push(`/account-activation"`);
  }

  return {
    toRecoverPassword,
    toLogin,
    toAccountActivation,
    ...navigation,
  };
}