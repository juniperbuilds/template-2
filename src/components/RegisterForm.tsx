import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // ... existing registration logic ...
    try {
      await register(email, password)
      router.push('/')
    } catch (error) {
      // Handle error
    }
  }

  // ... rest of the component ...
}