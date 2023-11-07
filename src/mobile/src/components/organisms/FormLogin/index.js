import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import { Button } from 'src/components/atoms/Button'
import { GText } from 'src/components/atoms/GText'

import styles from './styles.js'

export const FormLogin = () => {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (data) => {
    const { email, password } = data
    try {
      const payload = {
        email,
        password,
      }

      const response = await loginUserApi(payload)
    } catch (error) {}
  }

  return (
    <View style={styles.login}>
      <Text style={styles.login__title}>
        Adote o <Text style={styles.login__titleEmphasis}>Green Habits</Text> em
        sua vida
      </Text>

      <GText text='Descubra o poder da sustentabilidade em pequenos hábitos diários' />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Email'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
            mode='outlined'
            textColor='#FDFFFF'
            outlineColor='#6BBD99'
            activeOutlineColor='#6BBD99'
            placeholderTextColor='#FDFFFF'
            style={styles.login__input}
          />
        )}
        name='email'
      />
      {errors.email && <Text>Campo obrigatório</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Senha'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
            mode='outlined'
            textColor='#FDFFFF'
            outlineColor='#6BBD99'
            activeOutlineColor='#6BBD99'
            placeholderTextColor='#FDFFFF'
            secureTextEntry={true}
            style={styles.login__input}
          />
        )}
        name='password'
      />
      {errors.password && <Text>Campo obrigatório</Text>}

      <Button onClick={handleSubmit(onSubmit)} level='primary' label='Entrar' />

      <Button
        onClick={handleSubmit(onSubmit)}
        level='tertiary'
        label='Esqueci a senha'
      />

      <GText text='Ainda não faz parte do Green Habits?' />

      <Button
        onClick={() => navigation.navigate('Register')}
        level='primary'
        label='Registre-se agora'
      />
    </View>
  )
}
