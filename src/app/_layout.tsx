import { Slot } from 'expo-router'
import '../styles/global.css'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  return (
    <>
      <StatusBar style='light'/>
      <Slot />
    </>
  )
}