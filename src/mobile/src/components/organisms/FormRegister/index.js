import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import { Button } from 'src/components/atoms/Button'
import { GText } from 'src/components/atoms/GText/index.js'
import styles from './styles.js'

export const FormRegister = () => {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <View style={styles.formRegister}>
      <Text style={styles.formRegister__title}>
        Adote o{' '}
        <Text style={styles.formRegister__titleEmphasis}>Green Habits</Text> em
        sua vida
      </Text>
      <GText
        style={styles.formRegister__description}
        text='Descubra o poder da sustentabilidade em pequenos hábitos diários'
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Nome'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
            mode='outlined'
            textColor='#FDFFFF'
            outlineColor='#6BBD99'
            activeOutlineColor='#6BBD99'
            placeholderTextColor='#FDFFFF'
            style={styles.formRegister__input}
          />
        )}
        name='name'
      />

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
            style={styles.formRegister__input}
          />
        )}
        name='email'
      />

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
            style={styles.formRegister__input}
          />
        )}
        name='password'
      />

      <Button
        label='Salvar informações'
        level='primary'
        onClick={handleSubmit(onSubmit)}
      />

      <Button
        label='Cancelar'
        level='tertiary'
        onClick={() => navigation.navigate('Login')}
      />
    </View>
  )
}
