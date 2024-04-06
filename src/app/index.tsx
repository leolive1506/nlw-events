import { Input } from '@/components/input'
import { Image, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
import { Link } from 'expo-router'

export default function Home() {
    return (
      <View className='flex-1 bg-green-500 items-center justify-center text-white p-8'>
        <Image
          source={require("@/assets/logo.png")}
          className="h-16"
          resizeMode='contain'
        />

        <View className="w-full mt-12 gap-3">
          <Input>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              color={colors.green[200]}
              size={20}
            />
            <Input.Field placeholder='Código de acesso' />
          </Input>

          <Button title="Acessar credencial" />
          <Link
            href="/register"
            className='text-gray-100 text-base font-bold text-center mt-8'
          >
            Ainda não possui ingresso
          </Link>
        </View>
      </View>
    )
}