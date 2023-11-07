import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button } from 'src/components/atoms/Button'
import { Title } from 'src/components/atoms/Title'

import { TextInput } from 'react-native-paper'
import { GText } from 'src/components/atoms/GText/index.js'
import styles from './styles.js'

export const FormProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <View style={styles.formProfile}>
      <Title style={styles.formProfile__heading} title='Editar perfil' />
      <GText
        style={styles.formProfile__description}
        text='Altere ou exclua seu perfil nesta página'
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
            style={styles.formProfile__input}
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
            style={styles.formProfile__input}
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
            style={styles.formProfile__input}
          />
        )}
        name='password'
      />

      <Button
        label='Salvar alterações'
        level='primary'
        onClick={handleSubmit(onSubmit)}
      />

      <Button
        label='Excluir conta'
        level='tertiary'
        onClick={handleSubmit(onSubmit)}
      />
    </View>
  )
}
