import React, { useReducer } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { Input } from "../../components";
import { signIn, signUp } from "../../store/auth.slice";
import colors from "../../utils/colors";
import { UPDATE_FORM, onInputChange } from "../../utils/onInputChange";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM: {
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    }
    default:
      return state;
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isLogin, setIsLogin] = React.useState(true);
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin
    ? "Don't have an account?"
    : "Already have an account?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({
            email: formState.email.value,
            password: formState.password.value,
          })
        : signUp({
            email: formState.email.value,
            password: formState.password.value,
          })
    );
  };

  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="email@gmail.com"
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "email" })
          }
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
        />
        <Input
          placeholder="********"
          placeholderTextColor={colors.gray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) =>
            onHandlerInputChange({ value: text, name: "password" })
          }
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
        />
        <View>
          <TouchableOpacity onPress={onHandleChangeAuth}>
            <Text>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            onPress={onHandleAuth}
          />
        </View>
      </View>
    </View>
  );
};

export default Auth;
