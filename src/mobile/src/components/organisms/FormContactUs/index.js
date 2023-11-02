import { Controller, useForm } from 'react-hook-form'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Title } from '~/components/atoms/Title'
import styles from './styles.js'

export const FormContactUs = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  })
  const onSubmit = (data) => console.log(data)

  return (
    <View style={styles.input__form}>
      <Title title='Fale conosco' />
      <Text style={styles.input__text}>
        Dúvidas? Sugestões? Reclamações? Preencha o formulário e aguarde nosso
        retorno
      </Text>

      <View style={styles.input__container}>
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
              style={styles.input__field}
            />
          )}
          name='firstName'
        />
        {errors.firstName && <Text>Campo obrigatório</Text>}

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
              style={styles.input__field}
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
              placeholder='Assunto'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
              mode='outlined'
              textColor='#FDFFFF'
              outlineColor='#6BBD99'
              activeOutlineColor='#6BBD99'
              placeholderTextColor='#FDFFFF'
              style={styles.input__field}
            />
          )}
          name='subject'
        />
        {errors.subject && <Text>Campo obrigatório</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Mensagem'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
              mode='outlined'
              textColor='#FDFFFF'
              outlineColor='#6BBD99'
              activeOutlineColor='#6BBD99'
              placeholderTextColor='#FDFFFF'
              style={styles.input__field}
            />
          )}
          name='message'
        />
        {errors.message && <Text>Campo obrigatório</Text>}
      </View>

      <Button
        title='Enviar'
        onPress={handleSubmit(onSubmit)}
        accessibilityLabel='Enviar formulário'
        color="#398278"
        style={styles.input__button}
      />
    </View>
  )
}
