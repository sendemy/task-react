import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ID, databases } from '@/lib/appwrite.js'
import { ButtonContainer } from '@/styles/styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Textarea } from '../ui/textarea'
import { FormStyled } from './ContactForm.styles'

interface ContactFormProps {
	sendMessage: (message: string) => void
}

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.string().email({ message: 'Invalid email address' }),
	message: z.string(),
})

export function ContactForm({ sendMessage }: ContactFormProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		databases
			.createDocument(
				import.meta.env.VITE_APPWRITE_DATABASE_ID,
				import.meta.env.VITE_APPWRITE_COLLECTION_ID,
				ID.unique(),
				values
			)
			.then((res) => {
				console.log(res)
				sendMessage(`Thank you for your interest, ${res.name}.`)
			})
	}

	return (
		<Form {...form}>
			<FormStyled onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder='Name'
									required
									{...field}
									className='mobileS:min-w-[15rem] mobileL:min-w-[20rem]'
								/>
							</FormControl>
							<FormDescription>Enter your name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='email@email.com'
									required
									{...field}
									className='mobileS:min-w-[15rem] mobileL:min-w-[20rem]'
								/>
							</FormControl>
							<FormDescription>Enter your email.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									required
									{...field}
									className='mobileS:min-w-[15rem] mobileL:min-w-[20rem]'
								/>
							</FormControl>
							<FormDescription>Add a message.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ButtonContainer>
					<Button className='px-12'>Submit</Button>
				</ButtonContainer>
			</FormStyled>
		</Form>
	)
}
